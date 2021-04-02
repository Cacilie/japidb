"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Item = /** @class */ (function () {
    function Item(name, initialValue) {
        this.name = name;
        this.initialValue = initialValue;
        var metaKey = "@meta->" + name;
        var meta = {
            name: name,
            initialValue: initialValue
        };
        localStorage.setItem("@meta->" + name, JSON.stringify(meta));
        var key = "Item->" + name;
        var localItem = localStorage.getItem(key) || '';
        var item = localItem.length > 0 ? JSON.parse(localItem) : null;
        if (!item) {
            localStorage.setItem(key, String(initialValue));
        }
    }
    Item.prototype.get = function () {
        var localMeta = localStorage.getItem("@meta->" + this.name) || '';
        var meta = localMeta.length > 0 ? JSON.parse(localMeta) : null;
        var key = "Item->" + meta.name;
        var localItem = localStorage.getItem(key) || '';
        var item = localItem.length > 0 ? JSON.parse(localItem) : null;
        return item;
    };
    Item.prototype.save = function (value) {
        var localMeta = localStorage.getItem("@meta->" + this.name) || '';
        var meta = localMeta.length > 0 ? JSON.parse(localMeta) : null;
        var key = "Item->" + meta.name;
        localStorage.setItem(key, String(value));
        return value;
    };
    return Item;
}());
exports.default = Item;
