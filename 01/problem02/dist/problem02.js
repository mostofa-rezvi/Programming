"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLength(value) {
    if (typeof value === "string") {
        return value.length + ";";
    }
    else if (Array.isArray(value)) {
        return value.length + ";";
    }
    else {
        return "0;";
    }
}
console.log(getLength("typescript"));
console.log(getLength([10, 20, 30, 40]));
//# sourceMappingURL=problem02.js.map