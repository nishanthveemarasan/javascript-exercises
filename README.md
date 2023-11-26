
## exercise 1
Write a recursive function called ``reverse`` which accepts a string and returns a new string in reverse.

### examples 
- reverse('awesome') // 'emosewa'
- reverse('rithmschool') // 'loohcsmhtir'

## Excerise 2
Write a recursive function called ``isPalindrome`` which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

### examples
- isPalindrome('awesome') // false
- isPalindrome('foobar') // false
- isPalindrome('tacocat') // true
- isPalindrome('amanaplanacanalpanama') // true
- isPalindrome('amanaplanacanalpandemonium') // false

## Exercise 3
Write a recursive function called ``someRecursive`` which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

### examples
``const isOdd = val => val % 2 !== 0;``
- someRecursive([1,2,3,4], isOdd) // true
- someRecursive([4,6,8,9], isOdd) // true
- someRecursive([4,6,8], isOdd) // false
- someRecursive([4,6,8], val => val > 10); // false

## Exercise 4

Write a recursive function called ``flatten`` which accepts an array of arrays and returns a new array with all values flattened.

### examples
- flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
- flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
- flatten([[1],[2],[3]]) // [1,2,3]