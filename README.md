
## Exercise 1
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. You can solve this using ``the frequency counter pattern``.

### Exxamples:

- sameFrequency(182,281) // true
- sameFrequency(34,14) // false
- sameFrequency(3589578, 5879385) // true
- sameFrequency(22,222) // false

## Exercise 2
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using,
- ``the frequency counter pattern`` 
-  ``the multiple pointers pattern``

### Exxamples:

- areThereDuplicates(1, 2, 3) // false
- areThereDuplicates(1, 2, 2) // true 
- areThereDuplicates('a', 'b', 'c', 'a') //true 


## Exercise 3

Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target. You can solve this using ``the multiple pointers pattern``.


### Exxamples:

- averagePair([1,2,3],2.5) // true
- averagePair([1,3,3,5,6,7,10,12,19],8) // true
- averagePair([-1,0,3,4,5,6], 4.1) // false
- averagePair([],4) // false

## Exercise 4
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function. You can solve this using ``the Sliding Window pattern``.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

### Exxamples:

- maxSubarraySum([100,200,300,400], 2) // 700
- maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
- maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
- maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
- maxSubarraySum([2,3], 3) // null

## Exercise 5
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer. You can solve this using the ``Sliding Window pattern``.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

### Examples:

- minSubArrayLen([2,3,1,2,4,3], 7) // 2 
- minSubArrayLen([2,1,6,5,4], 9) // 2
- minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1
- minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
- minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
- minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
- minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

## Exercise 6

Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters. You can solve this using the ``Sliding Window pattern``.

### Examples:

- findLongestSubstring('') // 0
- findLongestSubstring('rithmschool') // 7
- findLongestSubstring('thisisawesome') // 6
- findLongestSubstring('thecatinthehat') // 7
- findLongestSubstring('bbbbbb') // 1
- findLongestSubstring('longestsubstring') // 8
- findLongestSubstring('thisishowwedoit') // 6