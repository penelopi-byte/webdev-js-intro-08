"use strict";

// Existing code
const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];


function findSmallestNumber(arr) {
    let smallest = arr[0];
    for (const num of arr) {
        if (num < smallest) {
            smallest = num;
        }
    }
    return smallest;
}


function findLargestNumber(arr) {
    let largest = arr[0];
    for (const num of arr) {
        if (num > largest) {
            largest = num;
        }
    }
    return largest;
}


function findAverage(arr) {
    let total = 0;
    for (const num of arr) {
        total += num;
    }
    return total / arr.length;
}


submissionBtn.addEventListener("click", () => {
    const smallest = findSmallestNumber(myNumbers);
    const largest = findLargestNumber(myNumbers);
    const average = findAverage(myNumbers);

    // Render results to the DOM elements
    smallestNumberElement.textContent = `Smallest number: ${smallest}`;
    largestNumberElement.textContent = `Largest number: ${largest}`;
    averageNumberElement.textContent = `Average: ${average.toFixed(2)}`;
});
