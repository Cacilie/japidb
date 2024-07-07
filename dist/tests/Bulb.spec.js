"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var LocalStorage_1 = __importDefault(require("./__mocks__/LocalStorage"));
global.localStorage = new LocalStorage_1.default;
describe("Bulb", function () {
    it('to be created', function () {
        var bulb = new lib_1.Bulb("switch0", false);
        expect(bulb).toBeTruthy();
    });
    it('switch and gets the value', function () {
        var bulb1 = new lib_1.Bulb("switch1", false);
        bulb1.switch();
        expect(bulb1.get()).toBe(true);
    });
    it('switch the bulb and then resets to original value', function () {
        var bulb2 = new lib_1.Bulb("switch2", false);
        bulb2.switch();
        expect(bulb2.get()).toBe(true);
        bulb2.reset();
        expect(bulb2.get()).toBe(false);
    });
});
