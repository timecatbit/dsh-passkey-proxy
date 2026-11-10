import type { IncomingMessage, ServerResponse } from 'node:http';
export declare const LOGIN = "/_dsh_login";
export declare const MAX_PASSKEYS = 5;
export interface LoginPolicy {
    password: boolean;
    passkey: boolean;
}
export declare function registeredPasskeyCount(file: string, username: string, origin?: string): number;
export declare class BrowserAuth {
    private readonly file;
    private readonly username;
    private readonly password;
    private readonly tlsProxyAddresses;
    private state;
    private readonly auth;
    private readonly pending;
    private readonly limits;
    private readonly origin?;
    private readonly owner;
    private readonly account;
    private readonly observed;
    private readonly policy;
    constructor(file: string, username: string, password: string, configuredOrigin?: string, tlsProxyAddresses?: ReadonlySet<string>, policy?: LoginPolicy);
    private sign;
    private save;
    private peer;
    observedProxyIPs(): string[];
    observeProxy(req: IncomingMessage): void;
    private matchesExternalHost;
    untrustedExternal(req: IncomingMessage): boolean;
    requestOrigin(req: IncomingMessage): string | undefined;
    passkeysAvailable(req: IncomingMessage): boolean;
    passwordAvailable(req: IncomingMessage): boolean;
    basicAvailable(req: IncomingMessage): boolean;
    sameOrigin(req: IncomingMessage, required?: boolean): boolean;
    acceptsBasic(req: IncomingMessage): boolean;
    private cookieName;
    private cookie;
    private sessionID;
    hasSession(req: IncomingMessage): boolean;
    issue(req: IncomingMessage, credential?: string): string;
    stripCookie(req: IncomingMessage): void;
    private limited;
    private remember;
    private consume;
    private checkPassword;
    private keys;
    route(req: IncomingMessage, res: ServerResponse, path: string): Promise<void>;
}
