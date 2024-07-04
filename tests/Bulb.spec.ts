import { Bulb } from "../lib";

const mockGetItem = jest.fn();
const mockSetItem = jest.fn();
const mockRemoveItem = jest.fn();

Object.defineProperty(global, "localStorage", {
  value: {
    getItem: (...args: string[]) => mockGetItem(...args),
    setItem: (...args: string[]) => mockSetItem(...args),
    removeItem: (...args: string[]) => mockRemoveItem(...args),
  },
});

describe("Bulb", () => {
    test('to be created', () =>  {
        const bulb = new Bulb("switch", false)
        expect(bulb).toBeTruthy()
    })
})