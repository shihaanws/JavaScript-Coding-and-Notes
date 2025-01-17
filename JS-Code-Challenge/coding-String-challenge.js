// 1. reverse string each word
function reverseStr(str) {
    let newstr = [];
    let str1 = str.split(" ");
    for (let i = 0; i < str1.length; i++) {
        newstr.push(str1[i].split("").reverse().join(""));
    }
    return newstr.join(" ")
}

const str = "this is javascript codee";
reverseStr(str);



// 2.  find number of character
const str2 = " this is javascript code and you have to find max character";
function findNumberOfChar(str) {
    let str1 = str.split("");
    let charCount = {};

    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        if (char !== ' ') {
            if (charCount[char]) {
                charCount[char]++;
            } else {
                charCount[char] = 1;
            }
        }
    }
    return charCount;

}

// console.log(findNumberOfChar(str2))




// 3.   find maximum value from an object
let obj = { t: 4, h: 3, i: 4, s: 3, j: 1 };

function findMaxValue(obj){
    let max=0;
    for(let data in obj){
        // console.log(obj[data])
        if(obj[data]>max){
            max= obj[data];
        }
    }
    for(let data in obj){
        if(obj[data]===max){
            return data
        }
    }
}

// console.log(findMaxValue(obj))

// 4. combine 2 and 3 -- find max character and its value

// 5. understand sorting problem 
// string sorting
// [ {name: "bittu", city:"blr"},{name: "rahul", city:"blr"},{name: "samay", city:"blr"} ]
// sort by name



// 6  slice and splice
/*
    slice : 
    array.slice(startIndex, endIndex);    both index are optional and endIndex is not included
    It does not modify original array
    It return a shallow copy of a portion of an array into a new array object

    splice :
    This method is used for making modifications to the original array by adding, removing, or replacing elements
    array.splice(startIndex, deleteCount, item1, item2, ...);

*/


let arr1= [1,2,3,4,5];
let arr2= arr1.slice(2,3)
// console.log(arr1) // [ 1, 2, 3, 4, 5 ]
// console.log(arr2) // [ 3 ]

let arr3= [1,2,3,4,5,6]
let arr4= arr3.splice(1,1,10,20)
// console.log(arr3)
// console.log(arr4)


// 7. Create your own string method: repeatify(3)- input string will be repeated three times
      // Ex- console.log("hello".repeatString(3)); // HelloHelloHello

String.prototype.repeatString= function(times){
    let str="";
    for(let i=0; i<times; i++){
        str= str+this;  // here this= "Hello"
    }
    return str;
}
// console.log("Hello".repeatString(3))  // HelloHelloHello
  


// 8. Write a program to mask card number 

const cardNumber= "1234234534564567";
const len= cardNumber.length;
const last4= cardNumber.slice(len-4)
const remaining= cardNumber.slice(0,len-4);
const masked= "*".repeat(remaining.length)+ last4
console.log(masked)   // ***************4567