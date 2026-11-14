import { type LoginPolicy } from './browser-auth.ts';
import type { HomeScreenIcon } from './contract.ts';
export interface LanProxyOptions {
    /** Interface the proxy binds (0.0.0.0 for LAN access). */
    listenHost: string;
    /** Port the proxy listens on; 0 asks the OS for a free port. */
    listenPort: number;
    /** Upstream DSH bind host, normally the loopback address. */
    upstreamHost: string;
    /** Upstream DSH port (the web app's actual bound port). */
    upstreamPort: number;
    /** Basic Auth username; password login is enabled only when both it and `password` are set. */
    username: string;
    /** Basic Auth password; password login is enabled only when both it and `username` are set. */
    password: string;
    /**
     * DSH launch token. When present, any request the upstream rejects with 401
     * is retried once with `?token=...` appended, letting a first-time browser
     * obtain the signed cookie without being handed the token. Omit it to keep
     * DSH's token check fully in force (the default).
     */
    launchToken?: string;
    authFile?: string;
    passkeyOrigin?: string;
    trustedTLSProxyIPs?: string[];
    loginPolicy?: LoginPolicy;
    /**
     * `black`/`white` answers apple-touch-icon.png and the manifest PNG icons
     * with the bundled black-and-white whale instead of DSH's own; `dsh` or
     * unset forwards them to DSH as before.
     */
    homeScreenIcon?: HomeScreenIcon;
    /** Optional sink for human-readable lifecycle messages. */
    log?: (level: 'info' | 'warn' | 'error', message: string) => void;
}
export interface LanProxyHandle {
    /** Resolves with the bound port once listening; rejects on bind errors. */
    ready: Promise<number>;
    /** Close the listener and every upgraded socket. */
    close: () => Promise<void>;
    /** Human-readable access URLs (local + LAN) for the configured port. */
    describeUrls: (boundPort: number) => {
        local: string;
        lan: string[];
    };
    observedProxyIPs: () => string[];
}
/** LAN IPv4 addresses the host currently has, as http URLs on `port`. */
export declare function lanAddresses(port: number): string[];
export declare function startLanProxy(options: LanProxyOptions): LanProxyHandle;
