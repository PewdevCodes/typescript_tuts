function getMax(nums: number[]): number {
    if (nums.length === 0) {
        throw new Error("Array cannot be empty");
    }

    let maxVal = nums[0];

    for (let i : number = 1; i < nums.length; i++) { 
        if (nums[i] > maxVal) {
            maxVal = nums[i];
        }   
    }
    return maxVal;
};
console.log(`
    ${getMax([1, 2, 3, 4, 5])}
    ${getMax([-1, -2, -3, -4, -5])}
    ${getMax([5, 5, 5, 5])}
    `);


// Given a list of users , filter out the users that are legal  ( greater than 18 year of age )

interface User {
    name: string;
    age: number;
}

function filterLegalUsers(users: User[]): User[] {
    return users.filter(user => user.age > 18);
}

const users: User[] = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 16 },
    { name: "David", age: 22 }
];

const legalUsers = filterLegalUsers(users);
console.log(legalUsers);