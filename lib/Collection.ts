interface Metadata {
    name: string;
    idField: string;
    indexes: Array<string | number>;
}

export default class Collection {
    name: string;
    idField: string;



    constructor(name: string, idField: string) {
        this.name = name;
        this.idField = idField;

        const localMetadata = localStorage.getItem(`@meta->${name}`) || '';
        const metadata: Metadata = localMetadata.length > 0 ? JSON.parse(localMetadata) : null;


        const meta: Metadata = localMetadata.length > 0 ? metadata : {
            name,
            idField,
            indexes: []
        };

        localStorage.setItem(`@meta->${name}`, JSON.stringify(meta));
    }


    get(id: string | number) {
        let data = []
        const localMeta = localStorage.getItem(`@meta->${this.name}`) || ''
        const meta: Metadata = JSON.parse(localMeta)
        const key = `${meta.name}->${id}`
        const localData = localStorage.getItem(key) || ''
        if (localData.length > 0) data = JSON.parse(localData)

        return data;

    }

    find(params?: any): Array<any> {
        const localMeta = localStorage.getItem(`@meta->${this.name}`) || ''
        const meta: Metadata = JSON.parse(localMeta)
        const { indexes } = meta;

        let data: Array<any> = []

        if (indexes.length === 0) return data;


        for (let index of indexes) {
            const element = this.get(index)
            data.push(element)
        }

        if (params && Object.keys(params).length > 0) {
            data = data.filter(element => {
                let shouldReturn = false;
                for (let param of Object.keys(params)) {
                    if (params[param] === element[param]) shouldReturn = true
                    else shouldReturn = false
                }

                return shouldReturn
            })
        }

        return data;

    }

    save(data: any) {
        const localMeta = localStorage.getItem(`@meta->${this.name}`) || ''
        const meta: Metadata = localMeta.length > 0 ? JSON.parse(localMeta) : null

        if(!data[meta.idField]) throw new Error('Invalid document, data does not include declared id field')

        const key = `${meta.name}->${data[meta.idField]}`
        localStorage.setItem(key, JSON.stringify(data))
        const { indexes } = meta;
        if (indexes.indexOf(data[meta.idField]) === -1) indexes.push(data[meta.idField])
        meta.indexes = indexes;
        localStorage.setItem(`@meta->${this.name}`, JSON.stringify(meta))
        return data;
    }

    remove(id: string | number) {
        const localMeta = localStorage.getItem(`@meta->${this.name}`) || ''
        const meta: Metadata = localMeta.length > 0  ? JSON.parse(localMeta) : null
        const key = `${meta.name}->${id}`
        const localData = localStorage.getItem(key) || ''
        const data = JSON.parse(localData)
        localStorage.removeItem(key)

        const { indexes } = meta;
        const indexOfDeleted = indexes.indexOf(id)
        indexes.splice(indexOfDeleted, 1);
        meta.indexes = indexes;
        localStorage.setItem(`@meta->${this.name}`, JSON.stringify(meta))

        return data
    }


}