import { Item } from "../lib";
import LocalStorage from "./__mocks__/LocalStorage";



global.localStorage = new LocalStorage;

describe("Collection", () => {
    it('to be created', () => {
        const item = new Item("key0", "value")
        expect(item).toBeTruthy()
    })

    it('to be created, and retrieved', () => {
        const item1 = new Item("key1", "value1")
        expect(item1.get()).toBe("value1")
    })

    it('to be created, and retrieved and then modified', () => {
        const item2 = new Item("key2", "value2")
        expect(item2.get()).toBe("value2")
        item2.save("modified")
        expect(item2.get()).toBe("modified")
    })
})