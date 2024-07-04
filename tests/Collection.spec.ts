import { Collection } from "../lib";
import LocalStorage from "./__mocks__/LocalStorage";



global.localStorage = new LocalStorage;

describe("Collection", () => {
    it('to be created', () =>  {
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

    it('record is not saved if it does not include primary key', () => {
        const collection2 = new Collection("collection2", "primary")
        const record0 = {
            "value": "1"
        }
        expect(() => collection2.save(record0)).toThrow('Invalid document, data does not include declared id field')
    })
})