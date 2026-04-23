import * as fs from 'fs';
import * as path from 'path';

/**
 * OMG Persistence Engine - State Manager
 * Handles externalization of execution state for session rehydration.
 */

export interface TaskItem {
    id: string;
    description: string;
    status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED';
    result?: any;
}

export interface RuntimeState {
    projectName: string;
    phase: 'INTERVIEW' | 'PLAN' | 'EXEC';
    currentTaskIndex: number;
    tasks: TaskItem[];
    lastUpdate: string;
    contextSummary: string;
}

export class StateManager {
    private static STATE_PATH = path.join(process.cwd(), '.omg', 'runtime_state.json');

    static init(projectName: string) {
        if (!fs.existsSync(path.dirname(this.STATE_PATH))) {
            fs.mkdirSync(path.dirname(this.STATE_PATH), { recursive: true });
        }

        const initialState: RuntimeState = {
            projectName,
            phase: 'INTERVIEW',
            currentTaskIndex: 0,
            tasks: [],
            lastUpdate: new Date().toISOString(),
            contextSummary: ''
        };

        this.save(initialState);
    }

    static save(state: RuntimeState) {
        state.lastUpdate = new Date().toISOString();
        fs.writeFileSync(this.STATE_PATH, JSON.stringify(state, null, 2));
    }

    static load(): RuntimeState | null {
        if (!fs.existsSync(this.STATE_PATH)) return null;
        return JSON.parse(fs.readFileSync(this.STATE_PATH, 'utf8'));
    }

    static updateTask(id: string, status: TaskItem['status'], result?: any) {
        const state = this.load();
        if (!state) return;

        const task = state.tasks.find(t => t.id === id);
        if (task) {
            task.status = status;
            if (result) task.result = result;
            this.save(state);
        }
    }

    static setPhase(phase: RuntimeState['phase']) {
        const state = this.load();
        if (!state) return;
        state.phase = phase;
        this.save(state);
    }
}
