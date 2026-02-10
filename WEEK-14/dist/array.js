"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getMax(nums) {
    if (nums.length === 0) {
        throw new Error("Array cannot be empty");
    }
    let maxVal = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > maxVal) {
            maxVal = nums[i];
        }
    }
    return maxVal;
}
;
console.log(`
    ${getMax([1, 2, 3, 4, 5])}
    ${getMax([-1, -2, -3, -4, -5])}
    ${getMax([5, 5, 5, 5])}
    `);
function filterLegalUsers(users) {
    return users.filter(user => user.age > 18);
}
const users = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 16 },
    { name: "David", age: 22 }
];
const legalUsers = filterLegalUsers(users);
console.log(legalUsers);
//# sourceMappingURL=array.js.map