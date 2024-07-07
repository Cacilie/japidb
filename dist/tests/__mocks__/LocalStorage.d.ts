export default class LocalStorage {
    store: any;
    length: any;
    key: any;
    constructor();
    clear(): void;
    getItem(key: string): any;
    setItem(key: string, value: any): void;
    removeItem(key: string): void;
}
