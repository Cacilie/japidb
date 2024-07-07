interface Metadata {
    name: string;
    initialValue: any;
}

type ItemValue = string | boolean | number;

export default class Item {
    name: string;
    initialValue: ItemValue;

    constructor(name: string, initialValue: ItemValue){
        this.name = name;
        this.initialValue = initialValue;

        const metaKey = `@meta->${name}`;

        const meta : Metadata = {
            name, 
            initialValue
        }

        localStorage.setItem(metaKey, JSON.stringify(meta));


        const key = `Item->${name}`

        const localItem = localStorage.getItem(key) || '';
        const item : any = localItem.length > 0 ? localItem : null;

        if(!item){
            localStorage.setItem(key, String(initialValue))
        }


    }


    get(){
        const localMeta = localStorage.getItem(`@meta->${this.name}`) || '';
        const meta: Metadata = localMeta.length > 0 ? JSON.parse(localMeta) : null;
        const key = `Item->${meta.name}`

        const localItem = localStorage.getItem(key) || '';
        const item : any = localItem.length > 0 ? localItem : null;

        return item;
    }

    save(value: ItemValue){
        const localMeta = localStorage.getItem(`@meta->${this.name}`) || '';
        const meta: Metadata = localMeta.length > 0 ? JSON.parse(localMeta) : null;
        const key = `Item->${meta.name}`;
        localStorage.setItem(key, String(value));

        return value;
    }
}