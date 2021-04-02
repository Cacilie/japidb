export default class Item {
    name: string;
    initialValue: any;
    constructor(name: string, initialValue: any);
    get(): any;
    save(value: any): any;
}
