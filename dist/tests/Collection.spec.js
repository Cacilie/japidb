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
        var collection = new lib_1.Collection("collection0", "primary");
        expect(collection).toBeTruthy();
    });
    it('saves data and then retrieves', function () {
        var collection1 = new lib_1.Collection("collection1", "primary");
        var record0 = {
            "primary": 1,
            "value": "1"
        };
        collection1.save(record0);
        expect(collection1.get(1).value).toBe("1");
    });
    it('saves data and then removes a record', function () {
        var collection4 = new lib_1.Collection("collection4", "primary");
        var record0 = {
            "primary": 1,
            "value": "1"
        };
        collection4.save(record0);
        expect(collection4.get(1).value).toBe("1");
        collection4.remove(1);
        expect(collection4.find().length).toBe(0);
    });
    it('saves data and then retrieves with a find', function () {
        var collection3 = new lib_1.Collection("collection3", "primary");
        var record0 = {
            "primary": 1,
            "value": "1"
        };
        collection3.save(record0);
        expect(collection3.find({ "value": "1" }).length).toBe(1);
        expect(collection3.find({ value: "2" }).length).toBe(0);
    });
    it('record is not saved if it does not include primary key', function () {
        var collection2 = new lib_1.Collection("collection2", "primary");
        var record0 = {
            "value": "1"
        };
        expect(function () { return collection2.save(record0); }).toThrow('Invalid document, data does not include declared id field');
    });
});
