//This is an in-line comment
/*This is a multi-line comment
  Unlike in-line comments it can take up two lines */

var myAge; 
//variable declaration 

myAge=24; 
//variable initialization 


var undefinedVar;     //variable of data type "undefined" (since there's no value initialized to it)
                      //if this gets added with an integer, an error message "NaN" appears (aka "Not a Number")
var integerVar=2018;  //variable of data type "integer"
var stringVar="text"; //variable of data type "string"  
var booleanVar= true; //variable of data type "boolean" 

var varNullObject=null; 
//variable of data type object (null is of type object, not null)
//you can empty an object by setting it to null or undefined
var varListObject={objectName1:"object1Value1", objectName2:"object1Value2", objectName3:"object1Value3"};
//above is an object with three properties: objectName1, objectName2, and objectName3

var varArray= ["arrayItem1", "arrayItem2", "arrayItem3"];
//this is an array with three array items




var int1= 1; 
int1++; 
console.log(int1); 

int1--; 
console.log(int1); 




var additionVar = 1 + 1; 
var subtractionVar = 3 - 2;
var multiplicationVar = 2 * 3; 
var divisionVar = 10 / 5; 

console.log("additionVar", additionVar);
console.log("subtractionVar", subtractionVar);
console.log("multiplicationVar", multiplicationVar);
console.log("divisionVar", divisionVar);
