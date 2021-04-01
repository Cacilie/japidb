export default class Collection {
    name: string;
    idField: string;
    constructor(name: string, idField: string);
    get(id: string | number): any;
    find(params?: any): Array<any>;
    save(data: any): any;
    remove(id: string | number): any;
}
