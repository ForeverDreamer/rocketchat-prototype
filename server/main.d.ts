declare module 'async_hooks' {
    export class AsyncLocalStorage<T> {
        disable(): void;

        getStore(): T | undefined;

        run(store: T, callback: (...args: any[]) => void, ...args: any[]): void;

        exit(callback: (...args: any[]) => void, ...args: any[]): void;

        runSyncAndReturn<R>(store: T, callback: (...args: any[]) => R, ...args: any[]): R;

        exitSyncAndReturn<R>(callback: (...args: any[]) => R, ...args: any[]): R;

        enterWith(store: T): void;
    }
}
