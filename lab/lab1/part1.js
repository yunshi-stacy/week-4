/* =====================
# Lab 1, Part 1 — Function Review
===================== */

/* =====================
Instructions: "Write a function that adds one to the number provided"
Example: "plusOne(2) should return 3"
===================== */

var plusOne = function(n) {
  return n+1;
  /* Your code here */
};

console.log('plusOne success:', plusOne(99) === 100);

/* =====================
Instructions: "Write a function, age, that takes a birth year and returns an age in years."
(Let's just assume this person was born January 1 at 12:01 AM)
Example: "age(2000) should return 17"
===================== */

var age = function(birth) {
  var today = new Date();
  return today.getFullYear()-birth;
};

console.log('age success:', age(1971) === 46);

/* =====================
Instructions: "Write a function that returns true for numbers over 9000 and false otherwise"
Example: "over9000(22) should return false"
===================== */

var over9000 = function(num) {
  if(num<=9000){
    return false;
  } else {
    return true;
  }
};

console.log('over9000 success:', over9000(9001) === true && over9000(12) === false);

/* =====================
Instructions: "Write a function that returns the value of an object at a specified key"
Example: "valueAtKey({'name': 'Nathan'}, 'name') should return 'Nathan'"
===================== */

var valueAtKey = function(obj,str){
  return obj[str];
//obj.str doesn't work!!!
};

console.log('valueAtKey success:', valueAtKey({'foo': 'bar'}, 'foo') === 'bar');

/* =====================
Instructions: "Write a function which returns the y coordinate of a line given m, x, and b"
Example: "y(0, 0, 0) should return 0; y(1, 1, 1) should return 2"
===================== */

var y = function(m,x,b) {
  return m * x + b;
};

console.log('y success:', y(12, 1, 12) === 24);

/* =====================
Instructions: "Write a function which counts the number of times a value occurs in an array "
Example: "countItem(['a', 'b', 'a'], 'a') should return 2"
===================== */

var countItem = function(arr,num) {
  var count = 0;
  if (Array.isArray(arr)){
    for(i=0; i<arr.length; i++){
      if (arr[i]===num){
        count ++;
      }
    }
    return count;
  } else {
    return count;
  }
};

console.log('countItem success:', countItem([1, 2, 3, 4, 5, 4, 4], 4) === 3);
