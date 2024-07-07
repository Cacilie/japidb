type ItemValue = string | boolean | number;
export default class Item {
    name: string;
    initialValue: ItemValue;
    constructor(name: string, initialValue: ItemValue);
    get(): any;
    save(value: ItemValue): ItemValue;
}
export {};
