interface Metadata {
    name: string;
    initialValue: any;
}

export default class Item {
    name: string;
    initialValue: any;

    constructor(name: string, initialValue: any){
        this.name = name;
        this.initialValue = initialValue;

        const metaKey = `@meta->${name}`;

        const meta : Metadata = {
            name, 
            initialValue
        }

        localStorage.setItem(`@meta->${name}`, JSON.stringify(meta));


        const key = `Item->${name}`

        const localItem = localStorage.getItem(key) || '';
        const item : any = localItem.length > 0 ? JSON.parse(localItem) : null;

        if(!item){
            localStorage.setItem(key, String(initialValue))
        }


    }


    get(){
        const localMeta = localStorage.getItem(`@meta->${this.name}`) || '';
        const meta: Metadata = localMeta.length > 0 ? JSON.parse(localMeta) : null;
        const key = `Item->${meta.name}`

        const localItem = localStorage.getItem(key) || '';
        const item : any = localItem.length > 0 ? JSON.parse(localItem) : null;

        return item;
    }

    save(value: any){
        const localMeta = localStorage.getItem(`@meta->${this.name}`) || '';
        const meta: Metadata = localMeta.length > 0 ? JSON.parse(localMeta) : null;
        const key = `Item->${meta.name}`;
        localStorage.setItem(key, String(value));


        return value;


    }
}