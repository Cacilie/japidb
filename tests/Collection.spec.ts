import { Collection } from "../lib";
import LocalStorage from "./__mocks__/LocalStorage";



global.localStorage = new LocalStorage;

describe("Collection", () => {
    it('to be created', () => {
        const collection = new Collection("collection0", "primary")
        expect(collection).toBeTruthy()
    })

    it('saves data and then retrieves', () => {
        const collection1 = new Collection("collection1", "primary")
        const record0 = {
            "primary": 1,
            "value": "1"
        }

        collection1.save(record0)

        expect(collection1.get(1).value).toBe("1")
    })

    it('saves data and then removes a record', () => {
        const collection4 = new Collection("collection4", "primary")
        const record0 = {
            "primary": 1,
            "value": "1"
        }

        collection4.save(record0)

        expect(collection4.get(1).value).toBe("1")
        collection4.remove(1)
        expect(collection4.find().length).toBe(0)
    })

    it('saves data and then retrieves with a find', () => {
        const collection3 = new Collection("collection3", "primary")
        const record0 = {
            "primary": 1,
            "value": "1"
        }

        collection3.save(record0)

        expect(collection3.find({ "value": "1" }).length).toBe(1)
        expect(collection3.find({ value: "2" }).length).toBe(0)
    })

    it('record is not saved if it does not include primary key', () => {
        const collection2 = new Collection("collection2", "primary")
        const record0 = {
            "value": "1"
        }
        expect(() => collection2.save(record0)).toThrow('Invalid document, data does not include declared id field')
    })
})