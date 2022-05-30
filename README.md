# conditional-linear-sort

This is a conditionally linear sorting algorithm.

The sorting algorithm is only linear in a number of conditions:
* The difference between the highest and lowest values is not large
* The array is made of only numbers

# How to run

This program doesn't need any dependencies to run, but you'll need [Node JS](https://nodejs.org/en/) installed.

To execute this program, follow the below steps:
1. Run `git clone https://github.com/TheGhoulRe/conditional-linear-sort.git`.
2. `Cd` into the `conditional-linear-sort` folder.
3. Run `node sorting.js`

# Algorithm

This algorithm achieves sorting through the following steps:
1. Create an empty JavaScript object ( you can use a hash map instead ).
2. Use the elements of the array as the key of the object ( the keys of the object are the values of the array, and the values in the object are the number of times each value appears ).
3. Get the largest number.
4. Get the smallest number.
5. Create a loop that counts from the smallest number to the largest.
6. Push a value to the result array, If the loop's current number exists as a key in the JavaScript object.

> **Note**: This algorithm is only linear in a few of scenarios. It doesnt work for all cases
