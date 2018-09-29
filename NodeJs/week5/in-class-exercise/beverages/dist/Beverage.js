"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
class Beverage {
    constructor(name, hot, colour, quantity) {
        if (hot === undefined || typeof hot != "boolean") throw new Error("Hot is required and needs to be boolean.");

        this.name = name;
        this.hot = hot;
    }

    set name(val) {
        if (!val || typeof val != "string") throw new Error("Name is required and needs to be string.");
        this._name = val;
    }

    get name() {
        return this._name;
    }

    toJSON() {
        return {
            name: this.name,
            hot: this.hot
        };
    }
}

exports.Beverage = Beverage;
class Beverages {
    constructor(...beverages) {
        this.beverages = beverages;
    }

    set beverages(list) {
        if (!list.every(b => b instanceof Beverage)) throw new Error("Only takes a beverage.");
        this._beverages = list;
    }

    get beverages() {
        return this._beverages;
    }

    add(beverage) {
        if (!(beverage instanceof Beverage)) throw new Error("Only takes a beverage.");
        this.beverages.push(beverage);
    }
}
exports.Beverages = Beverages;
//# sourceMappingURL=Beverage.js.map