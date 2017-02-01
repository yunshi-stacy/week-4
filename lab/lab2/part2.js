/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */
/*
  Write a program that uses console.log to print the numbers from 1 to 100.
  For multiples of three, print "Fizz" instead of the number. For multiples
  of five, print "Buzz" instead of the number. For numbers which are multiples
  of both three and five, print "FizzBuzz".

  Believe it or not, this is a common programming challenge in job interviews.
*/
var arr = [];
for(i=1; i<101; i++){
  arr.push(i);
}

//or _.map(arr,function)
_.each(arr,function(value,i,arr){
  if(value%5===0 && value%3===0){
      value='FizzBuzz';
    } else if(value%5===0){
      value='Buzz';
    } else if(value%3===0){
      value='Fizz';
    } else {
      value=value;
    }
  arr[i]=value;

  });
/*OR using_.map to reassign the arr value
arr=_.map(arr,function(value){
    if(value%5===0 && value%3===0){
        value='FizzBuzz';
      } else if(value%5===0){
        value='Buzz';
      } else if(value%3===0){
        value='Fizz';
      } else {
        value=value;
      }
    return value;

    });
console.log(arr);*/

/* =====================
Instructions: Let's bring it all together. Write a function that returns only odd numbers. It takes:
              1. a list of numbers
              2. a function that takes a number and returns true or false (isOdd, let's say)
===================== */
var arr1=[1,2,5,8,92,282,54,32,31,35,57];
_.filter(arr1,function(value){return value%2===1;});
