//  Exercise 1
function reverse(str){
    if(str.length == 0) return "";
    return `${str.at(-1)}${reverse(str.slice(0,-1))}`;
}
console.log(reverse('awesome'))

// Exercise 2
function isPalindrome(str){
    if(str.length == 1) return true;
    if(str.length == 2) return str[0] === str[1];
    if(str[0] === str.at(-1)) return isPalindrome(str.slice(1,-1));
    return false;
}
console.log(isPalindrome('awesome'))
console.log(isPalindrome('amanaplanacanalpanama'))

// Exercise 3
const isOdd = val => val % 2 !== 0;
function someRecursive(arr, callback){
  if (arr.length === 0) return false;
   if (callback(arr[0])) return true;
   arr.shift()
   return someRecursive(arr,callback);
}
console.log(someRecursive([4,6,8], isOdd))

//Exercise 4
function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
  }
  console.log(flatten([1, [2, [3, 4], [[5]]]])) 