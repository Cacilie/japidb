import { Bulb } from "../lib";
import LocalStorage from "./__mocks__/LocalStorage";



global.localStorage = new LocalStorage;

describe("Bulb", () => {
    it('to be created', () =>  {
      const bulb = new Bulb("switch0", false)
      expect(bulb).toBeTruthy()
    })

    it('switch and gets the value', () => {
      const bulb1 = new Bulb("switch1", false)
      bulb1.switch()
      expect(bulb1.get()).toBe(true)
    })

    it('switch the bulb and then resets to original value', () => {
      const bulb2 = new Bulb("switch2", false)
      bulb2.switch()
      expect(bulb2.get()).toBe(true)
      bulb2.reset()
      expect(bulb2.get()).toBe(false)
    })
})