"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bulb = /** @class */ (function () {
    function Bulb(name, defaultValue) {
        this.name = name;
        this.defaultValue = defaultValue;
        var meta = {
            name: name,
            defaultValue: defaultValue
        };
        localStorage.setItem("@meta->".concat(name), JSON.stringify(meta));
        var key = "Bulb->".concat(name);
        var localBulb = localStorage.getItem(key) || '';
        var bulb = localBulb.length > 0 ? JSON.parse(localBulb) : null;
        if (!bulb) {
            localStorage.setItem(key, String(defaultValue));
        }
    }
    Bulb.prototype.switch = function () {
        var localMeta = localStorage.getItem("@meta->".concat(this.name)) || '';
        var meta = localMeta.length > 0 ? JSON.parse(localMeta) : null;
        var key = "Bulb->".concat(meta.name);
        var localBulb = localStorage.getItem(key) || '';
        var bulb = localBulb.length > 0 ? JSON.parse(localBulb) : null;
        bulb = !bulb;
        localStorage.setItem(key, String(bulb));
    };
    Bulb.prototype.reset = function () {
        var localMeta = localStorage.getItem("@meta->".concat(this.name)) || '';
        var meta = localMeta.length > 0 ? JSON.parse(localMeta) : null;
        var key = "Bulb->".concat(meta.name);
        localStorage.setItem(key, String(meta.defaultValue));
    };
    Bulb.prototype.get = function () {
        var localMeta = localStorage.getItem("@meta->".concat(this.name)) || '';
        var meta = localMeta.length > 0 ? JSON.parse(localMeta) : null;
        var key = "Bulb->".concat(meta.name);
        var localBulb = localStorage.getItem(key) || '';
        var bulb = localBulb.length > 0 ? JSON.parse(localBulb) : null;
        return bulb;
    };
    return Bulb;
}());
exports.default = Bulb;
