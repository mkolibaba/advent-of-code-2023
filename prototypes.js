Array.prototype.sum = function () {
    return this.reduce((acc, v) => acc + v, 0)
}

Array.prototype.min = function () {
    return this.length !== 0 ? this.reduce((acc, v) => Math.min(acc, v), this[0]) : undefined;
}

Array.prototype.max = function () {
    return this.length !== 0 ? this.reduce((acc, v) => Math.max(acc, v), this[0]) : undefined;
}