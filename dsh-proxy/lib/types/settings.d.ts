import { type HomeScreenIcon, type LanProxyUpdatePayload } from './contract.ts';
/** The on-disk shape (a subset of the update payload; no derived fields). */
export interface PersistedRuntimeSettings {
    lanAccessEnabled?: boolean;
    /** Proxy listen port override. */
    listenPort?: number;
    /** Deprecated forward-target override, kept for legacy persisted files. */
    upstreamPort?: number;
    username?: string;
    password?: string;
    /** Launch-token auto-login override; see LanProxyUpdatePayload. */
    skipLaunchToken?: boolean;
    passkeyOrigin?: string;
    tlsProxyIPs?: string;
    passwordLoginEnabled?: boolean;
    passkeyLoginEnabled?: boolean;
    homeScreenIcon?: HomeScreenIcon;
}
/** Match equivalent IPv6 spellings and dual-stack IPv4 sockets consistently. */
export declare function canonicalProxyIP(value: string): string | undefined;
export declare function trustedProxyIPs(value?: string): string[];
export declare function parsePasskeyOrigin(value: string): URL;
/** Tolerant read of an unknown JSON value into the persisted shape. */
export declare function normalizeRuntimeSettings(raw: unknown): PersistedRuntimeSettings;
/**
 * Read/write access to the persisted settings file. Writes are atomic
 * (temp file + rename) so a crash never leaves a truncated JSON behind.
 */
export declare class RuntimeSettingsFile {
    private readonly filePath;
    constructor(filePath: string);
    read(): PersistedRuntimeSettings;
    write(settings: PersistedRuntimeSettings): void;
}
export type UpdateValidation = {
    ok: true;
    patch: Required<Pick<LanProxyUpdatePayload, 'listenPort' | 'upstreamPort' | 'username' | 'password' | 'skipLaunchToken'>> & LanProxyUpdatePayload;
} | {
    ok: false;
    message: string;
};
/**
 * Validate an update payload from the settings page.
 * @param payload - the raw RPC payload.
 * @param currentListenPort - the proxy's current listen port.
 * @param currentUpstreamPort - the current forward-target (default service) port.
 * @returns the normalized patch, or a user-facing rejection message.
 */
export declare function validateUpdate(payload: unknown, currentListenPort: number, currentUpstreamPort: number): UpdateValidation;
