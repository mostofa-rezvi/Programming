"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getUniqueValues(arr1, arr2) {
    const newArray = [];
    function checkValue(value, array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return true;
            }
        }
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        const v1 = arr1[i];
        if (!checkValue(v1, newArray)) {
            newArray.push(v1);
        }
    }
    for (let j = 0; j < arr2.length; j++) {
        const v2 = arr2[j];
        if (!checkValue(v2, newArray)) {
            newArray.push(v2);
        }
    }
    return newArray;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));
//# sourceMappingURL=problem07.js.map