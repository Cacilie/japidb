interface Metadata {
    name: string;
    defaultValue: boolean;
}



export default class Bulb {
    name: string;
    defaultValue: boolean;

    constructor(name : string, defaultValue: boolean){
        this.name = name;
        this.defaultValue = defaultValue;

        const meta : Metadata = {
            name,
            defaultValue
        };

        localStorage.setItem(`@meta->${name}`, JSON.stringify(meta));

        const key = `Bulb->${name}`

        const localBulb = localStorage.getItem(key) || '';
        const bulb : boolean = localBulb.length > 0 ? JSON.parse(localBulb) : null;

        if(!bulb){
            localStorage.setItem(key, String(defaultValue))
        }
    }

    switch(){
        const localMeta = localStorage.getItem(`@meta->${this.name}`) || '';
        const meta: Metadata = localMeta.length > 0 ? JSON.parse(localMeta) : null;


        const key = `Bulb->${meta.name}`

        const localBulb = localStorage.getItem(key) || '';
        let bulb : boolean = localBulb.length > 0 ? JSON.parse(localBulb) : null;
        bulb = !bulb;

        localStorage.setItem(key, String(bulb))


    }

    reset(){
        const localMeta = localStorage.getItem(`@meta->${this.name}`) || '';
        const meta: Metadata = localMeta.length > 0 ? JSON.parse(localMeta) : null;


        const key = `Bulb->${meta.name}`
        localStorage.setItem(key, String(meta.defaultValue))

    }

    get(){
        const localMeta = localStorage.getItem(`@meta->${this.name}`) || '';
        const meta: Metadata = localMeta.length > 0 ? JSON.parse(localMeta) : null;
        const key = `Bulb->${meta.name}`

        const localBulb = localStorage.getItem(key) || '';
        const bulb : boolean = localBulb.length > 0 ? JSON.parse(localBulb) : null;

        return bulb;

    }


}