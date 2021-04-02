"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collection = /** @class */ (function () {
    function Collection(name, idField) {
        this.name = name;
        this.idField = idField;
        var localMetadata = localStorage.getItem("@meta->" + name) || '';
        var metadata = localMetadata.length > 0 ? JSON.parse(localMetadata) : null;
        var meta = localMetadata.length > 0 ? metadata : {
            name: name,
            idField: idField,
            indexes: []
        };
        localStorage.setItem("@meta->" + name, JSON.stringify(meta));
    }
    Collection.prototype.get = function (id) {
        var data = [];
        var localMeta = localStorage.getItem("@meta->" + this.name) || '';
        var meta = JSON.parse(localMeta);
        var key = meta.name + "->" + id;
        var localData = localStorage.getItem(key) || '';
        if (localData.length > 0)
            data = JSON.parse(localData);
        return data;
    };
    Collection.prototype.find = function (params) {
        var localMeta = localStorage.getItem("@meta->" + this.name) || '';
        var meta = JSON.parse(localMeta);
        var indexes = meta.indexes;
        var data = [];
        if (indexes.length === 0)
            return data;
        for (var _i = 0, indexes_1 = indexes; _i < indexes_1.length; _i++) {
            var index = indexes_1[_i];
            var element = this.get(index);
            data.push(element);
        }
        if (params && Object.keys(params).length > 0) {
            data = data.filter(function (element) {
                var shouldReturn = false;
                for (var _i = 0, _a = Object.keys(params); _i < _a.length; _i++) {
                    var param = _a[_i];
                    if (params[param] === element[param])
                        shouldReturn = true;
                    else
                        shouldReturn = false;
                }
                return shouldReturn;
            });
        }
        return data;
    };
    Collection.prototype.save = function (data) {
        var localMeta = localStorage.getItem("@meta->" + this.name) || '';
        var meta = localMeta.length > 0 ? JSON.parse(localMeta) : null;
        if (!data[meta.idField])
            throw new Error('Invalid document, data does not include declared id field');
        var key = meta.name + "->" + data[meta.idField];
        localStorage.setItem(key, JSON.stringify(data));
        var indexes = meta.indexes;
        if (indexes.indexOf(data[meta.idField]) === -1)
            indexes.push(data[meta.idField]);
        meta.indexes = indexes;
        localStorage.setItem("@meta->" + this.name, JSON.stringify(meta));
        return data;
    };
    Collection.prototype.remove = function (id) {
        var localMeta = localStorage.getItem("@meta->" + this.name) || '';
        var meta = localMeta.length > 0 ? JSON.parse(localMeta) : null;
        var key = meta.name + "->" + id;
        var localData = localStorage.getItem(key) || '';
        var data = JSON.parse(localData);
        localStorage.removeItem(key);
        var indexes = meta.indexes;
        var indexOfDeleted = indexes.indexOf(id);
        indexes.splice(indexOfDeleted, 1);
        meta.indexes = indexes;
        localStorage.setItem("@meta->" + this.name, JSON.stringify(meta));
        return data;
    };
    return Collection;
}());
exports.default = Collection;
