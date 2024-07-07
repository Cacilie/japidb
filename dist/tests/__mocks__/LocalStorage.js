"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
        this.store = {};
    }
    LocalStorage.prototype.clear = function () {
        this.store = {};
    };
    LocalStorage.prototype.getItem = function (key) {
        return this.store[key] || null;
    };
    LocalStorage.prototype.setItem = function (key, value) {
        this.store[key] = String(value);
    };
    LocalStorage.prototype.removeItem = function (key) {
        delete this.store[key];
    };
    return LocalStorage;
}());
exports.default = LocalStorage;
