export default class Bulb {
    name: string;
    defaultValue: boolean;
    constructor(name: string, defaultValue: boolean);
    switch(): void;
    reset(): void;
    get(): boolean;
}
