"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Item = /** @class */ (function () {
    function Item(name, initialValue) {
        this.name = name;
        this.initialValue = initialValue;
        var metaKey = "@meta->".concat(name);
        var meta = {
            name: name,
            initialValue: initialValue
        };
        localStorage.setItem(metaKey, JSON.stringify(meta));
        var key = "Item->".concat(name);
        var localItem = localStorage.getItem(key) || '';
        var item = localItem.length > 0 ? localItem : null;
        if (!item) {
            localStorage.setItem(key, String(initialValue));
        }
    }
    Item.prototype.get = function () {
        var localMeta = localStorage.getItem("@meta->".concat(this.name)) || '';
        var meta = localMeta.length > 0 ? JSON.parse(localMeta) : null;
        var key = "Item->".concat(meta.name);
        var localItem = localStorage.getItem(key) || '';
        var item = localItem.length > 0 ? localItem : null;
        return item;
    };
    Item.prototype.save = function (value) {
        var localMeta = localStorage.getItem("@meta->".concat(this.name)) || '';
        var meta = localMeta.length > 0 ? JSON.parse(localMeta) : null;
        var key = "Item->".concat(meta.name);
        localStorage.setItem(key, String(value));
        return value;
    };
    return Item;
}());
exports.default = Item;
