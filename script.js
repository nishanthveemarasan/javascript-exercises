//Exercise 1
const sameFrequency = (num1, num2) => {
    let num1Str = num1.toString();
    let num2Str = num2.toString();
    
    if(num1Str.length !== num2Str.length) return false;
    
    let counter1 = {};
    let counter2 = {};
    for(let value of num1Str){
        counter1[value] = (counter1[value] || 0) + 1
    }
    for(let value of num2Str){
        counter2[value] = (counter2[value] || 0) + 1
    }
    
    for(let key in counter1){
      if(!counter2[key]){
        return false
      }
        if(counter1[key] !== counter2[key]){
          return false
        }
    }
    return true;
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) //false

//Exercise 2
// Using the frequency counter pattern
const areThereDuplicates = (...numbers) => {
    let counter1 = {};
    for(let value of numbers){
        counter1[value] = (counter1[value] || 0) + 1
    }
    for(let key in counter1){
        if(counter1[key] > 1){
          return true
        }
    }
    return false;
  }
  console.log(areThereDuplicates(1, 2, 3));
  console.log(areThereDuplicates(1, 2, 2));
  console.log(areThereDuplicates('a', 'b', 'c', 'a'))

  //Using the multiple pointers pattern.
  const areThereDuplicatesMP = (...numbers) => {
    numbers.sort((a,b) => {
      if(a > b) return 1;
      if(a < b) return -1;
      return 0;
    })
    let cur = 0;
    let next = 1;
    while(next < numbers.length){
      if(numbers[cur] == numbers[next]){ 
        return true;
      }
      cur++;
      next++;
    }
    return false;
  }
  console.log(areThereDuplicatesMP(1, 2, 3));
  console.log(areThereDuplicatesMP(1, 2, 2));
  console.log(areThereDuplicatesMP('a', 'b', 'c', 'a'))

  //Exercise 3
  const averagePair = (arr, avg) => {
    let left = 0;
     let right = arr.length - 1;
    while(left < right){
      let curAvg = (arr[right]+ arr[left])/2;
      let fomatterAvg = parseFloat(curAvg.toFixed(2))
      if(fomatterAvg == avg) {
            return true
         } else if(fomatterAvg > avg) {
              right --;     
         } else {
              left ++;       
         }
    }
    return false;
  }

console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair([],4)) // false

  //Exercise 4
  function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for(let i = 0; i < num; i++){
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let j = num; j < arr.length; j++){
      tempSum = tempSum - arr[j - num] + arr[j];
      maxSum = Math.max(maxSum,tempSum);
    }
    return maxSum
  }
  
  console.log(maxSubarraySum([100,200,300,400], 2))
  console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))
  console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2))
  console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2))
  console.log(maxSubarraySum([2,3], 3))

  //Exercise 5
  function minSubArrayLen(arr, num){
    let start = 0;
    let end = 0;
    let minLength = arr.length;
    let total = 0;
    while(start < arr.length ){
      if(total < num && end < arr.length){
        total += arr[end];
        end++
      }else if(total >= num){
        minLength = Math.min(minLength, (end - start))
        total -= arr[start]
        start++
      }else {
        break;
      }
    }
    return minLength == arr.length ? 0 : minLength;
  }

  console.log(minSubArrayLen([2,3,1,2,4,3], 7))

  //Exercise 6
  function findLongestSubstring(str){
    let distStr = {};
    let start = 0;
    let longest = 0;
    for(let i = 0; i < str.length; i++){
      if(distStr[str[i]]){
        start = Math.max(start, distStr[str[i]]);
      }
      longest = Math.max(longest, i - start + 1);
      distStr[str[i]] = i + 1;
    }
    return longest
  }
  
  console.log(findLongestSubstring('rithmschool'))
  console.log(findLongestSubstring('thisisawesome'))
  console.log(findLongestSubstring('thecatinthehat'))
  console.log(findLongestSubstring('bbbbbb'))
  console.log(findLongestSubstring('longestsubstring'))
  console.log(findLongestSubstring('thisishowwedoit'))