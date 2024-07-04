import { Collection } from "../lib";
import LocalStorage from "./__mocks__/LocalStorage";



global.localStorage = new LocalStorage;

describe("Collection", () => {
    test('to be created', () =>  {
      const collection = new Collection("collection1", "primary")
      expect(collection).toBeTruthy()
    })
})