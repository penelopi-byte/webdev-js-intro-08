// Prevent us from attempting to use variables
// that are not declared
"use strict"
/*
const basicArray = [1, 2, 3, 4, 5];
for (let i = 0; i < basicArray.length; i++) {
    console.log("Basic Loop:", basicArray[i]);
}

const forOfArray = ["apple", "banana", "cherry"];
for (const item of forOfArray) {
    console.log("For...of Loop:", item);
}

const forEachArray = [true, false, true];
forEachArray.forEach((value, index) => {
    console.log(`ForEach Loop (index ${index}):`, value);
});

const modifyArrayForOf = [10, 20, 30];
for (const num of modifyArrayForOf) {
    
    num = num * 2; 
    console.log("Attempted Modification (for...of):", num);
}
console.log("Array after for...of:", modifyArrayForOf);

const modifyArrayForEach = [5, 10, 15];
modifyArrayForEach.forEach((value, index, arr) => {
    
    arr[index] = value * 2;
});
console.log("Array after forEach:", modifyArrayForEach);

const objectArray = { a: 1, b: 2, c: 3 };

for (const key in objectArray) {
    console.log(`For...in Loop: Key = ${key}, Value = ${objectArray[key]}`);
}

const arrayExample = [10, 20, 30];
for (const index in arrayExample) {
    console.log(`For...in with Array: Index = ${index}, Value = ${arrayExample[index]}`);
}
/*