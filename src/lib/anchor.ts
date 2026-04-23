import * as fs from 'fs';
import * as crypto from 'crypto';

/**
 * Hash-Anchored Edit Utility
 * Ensures deterministic code modifications by validating content hashes.
 */

export interface LineAnchor {
    line: number;
    content: string;
    hash: string;
}

export class AnchorEngine {
    /**
     * Generates anchors for all lines in a file.
     */
    static generateAnchors(filePath: string): LineAnchor[] {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        
        return lines.map((text, index) => ({
            line: index + 1,
            content: text,
            hash: this.calculateHash(text)
        }));
    }

    /**
     * Validates if a specific line's hash matches the expected hash.
     */
    static validateAnchor(filePath: string, line: number, expectedHash: string): boolean {
        const anchors = this.generateAnchors(filePath);
        const anchor = anchors.find(a => a.line === line);
        
        if (!anchor) return false;
        return anchor.hash === expectedHash;
    }

    /**
     * Calculates SHA-256 hash for a string (trimmed for consistency).
     */
    private static calculateHash(text: string): string {
        return crypto
            .createHash('sha256')
            .update(text.trim())
            .digest('hex')
            .substring(0, 8); // Using short hash for convenience
    }

    /**
     * Creates a Snapshot for the entire file.
     */
    static createSnapshot(filePath: string): string {
        const anchors = this.generateAnchors(filePath);
        const snapshotPath = `${filePath}.anchor.json`;
        fs.writeFileSync(snapshotPath, JSON.stringify(anchors, null, 2));
        return snapshotPath;
    }
}
