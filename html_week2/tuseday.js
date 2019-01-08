function lvl1exercise1() {
    // Declare a variable without instantiating it and return it!
    var name;
    console.log(name);
    return name;
    
}
lvl1exercise1()

function lvl1exercise2() {
    // Declare and instantiate a number and return it
    var i = 136;
    console.log(i);
    return i;
}
lvl1exercise2()

function lvl1exercise3() {
    // Declare and instantiate a floating point number that isn't a whole number and return it
    var i = 1.36;
    console.log(i);
    return i;
    
}
lvl1exercise3()

function lvl1exercise4() {
    // Declare and instantiate a string "Hello World!" and return it
    var i = 'Hello World!';
    console.log(i);
}
lvl1exercise4()

function lvl1exercise5() {
	// Declare and instantiate an array containing the string "Hello World!" and the number 4 and return it
    var i = 'Hello World!'
    console.log(i[4]);
    return i;
}
lvl1exercise5()

function lvl1exercise6() {
	// Declare and instantiate an object containing the key-value pairs key1 -> "Hello World!" and key2 -> 4, and return it
    var i = {
        key1 : 'Hello World',
        key2 : 4
    }
    console.log(i);
    return i;
}
lvl1exercise6()

function lvl1exercise7() {
    // Declare and instantiate a boolean value 'false' and return it
    var boolean = false;
    console.log(boolean);
    return boolean;
}
lvl1exercise7()

function lvl2exercise1(num1, num2) {
    // Return the sum of num1 and num2
    var i = num1 + num2;
    console.log(i);
    return i;

}
lvl2exercise1(130, 6)

function lvl2exercise2(num1, num2) {
    // Return the difference of num1 and num2
    var i = num1 - num2; 
    console.log(i);
    return i; 

}
lvl2exercise2(140, 4)

function lvl2exercise3(num1, num2) {
    // Return the multiplication of num1 and num 2
    var i = num1 * num2;
    console.log(i);
    return i;
}
lvl2exercise3(68, 2)
function lvl2exercise4(num1, num2) {
    // Return the division of num1 and num2
    var i = num1 / num2;
    console.log(i);
    return i;
}
lvl2exercise4(408, 3)
function lvl2exercise5(num1) {
    // Add 2 to num1 using += and return it
    var i = num1+=2;
    console.log(i);
    return;
}
lvl2exercise5(134)

function lvl3exercise1() {
	// Create a "hello" and a "world", return the concatenation of the two
    var i = 'hello' + ' ' + 'world';
    console.log(i);
    return i;
}
lvl3exercise1()

function lvl3exercise2() {
    // Create a "hello" and a 12, return the concatenation of the two
    var i = 'hello' + 12;
    return i;
}
console.log(lvl3exercise2())

function lvl3exercise3() {
    // Create a variable that equals 12 and convert it to a string with concatenation. Return it.
    var i = 12;
    console.log(String(i));
    return i;
}
lvl3exercise3()
function lvl3exercise4() {
    // Create a "hello world!" string. Return the length of the string
    var i = 'hello world!';
    console.log(i.length);
    return i;
}
lvl3exercise4()

function lvl3exercise5() {
	// Create a "hello world!" string. Return the index of the word "world".
    var i = 'hello world!';
    console.log(i.indexOf('world'))
    

}
lvl3exercise5()

function lvl4exercise1() {
    // Return the boolean value "true"
    return true;
	
}
console.log(lvl4exercise1())

function lvl4exercise2() {
	// Return the boolean value "false"
    return false;
}
console.log(lvl4exercise2())

function lvl4exercise3(bool) {
    // Return the opposite of the input boolean value
    return !true;
}
console.log(lvl4exercise3())

function lvl4exercise4(bool1, bool2) {
    // Return the logical "and" of the input boolean values
    return true && false;
}
console.log(lvl4exercise4())

function lvl4exercise5(bool1, bool2) {
    // Return the logical "or" of the input boolean values
    return true || false;
	
}
console.log(lvl4exercise5())
function lvl4exercise6(bool1, bool2) {
    // Return the logical "equivalence" of the input boolean values
    return true == false;
}
console.log(lvl4exercise6())

function lvl5exercise1() {
	// Push the string "hello" into the array and return it.
    var array = [1, "adam"];
    array.push('hello');
    console.log(array)
    return array;
}
lvl5exercise1()

function lvl5exercise2() {
	// Remove the last element from the array and return it
    var array = [1, "adam"];
    array.pop();
    console.log(array);
    return array;
}
lvl5exercise2()

function lvl5exercise3() {
	// Return the length of the array
    var array = [1, "adam"];
    console.log(array.length);
    return array;
}
lvl5exercise3()

function lvl5exercise4() {
	// Return the index of "adam" in the array
    var array = [1, "adam"];
    console.log(array.indexOf('adam'));
    return array;
}
lvl5exercise4()

function lvl6exercise1(num) {
    // Return 'hello' if num is 1, 'world' if num is 2, otherwise return'bye'
    if (num==1) {
        console.log('hello');
    } else if (num==2) {
        console.log('world');   
    } else {
        console.log('bye');
    }
}
lvl6exercise1(2)

function lvl6exercise2(num, myString) {
	// Push 10 "hello" strings into the array using a for loop, then return it
    var array = [];
    for(var i = 0; i < num; i++) {
        array.push(myString)
    }
   return array;
}
console.log(lvl6exercise2(5, 'samson'))

function lvl6exercise3() {
	// Empty this array using a while loop and return it
    var array = ["hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello"];
    while(array.length > 0) {
        array.pop()

    }
    console.log(array);
    return array;
}
lvl6exercise3()



// Write a function that takes a number as an input
// Have it create an empty array and then push a string into the array as many
// times as the input number
// Name the function "finalFunction"
function finalFunction(num) {
    var array = [];
    while(array.length < num){
        array.push('hi')
    }
    console.log(array)
}
finalFunction(3)