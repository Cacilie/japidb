"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var LocalStorage_1 = __importDefault(require("./__mocks__/LocalStorage"));
global.localStorage = new LocalStorage_1.default;
describe("Collection", function () {
    it('to be created', function () {
        var item = new lib_1.Item("key0", "value");
        expect(item).toBeTruthy();
    });
    it('to be created, and retrieved', function () {
        var item1 = new lib_1.Item("key1", "value1");
        expect(item1.get()).toBe("value1");
    });
    it('to be created, and retrieved and then modified', function () {
        var item2 = new lib_1.Item("key2", "value2");
        expect(item2.get()).toBe("value2");
        item2.save("modified");
        expect(item2.get()).toBe("modified");
    });
});
