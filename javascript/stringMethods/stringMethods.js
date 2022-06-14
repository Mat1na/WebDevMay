// string methods
var result;
const MyText = 'dolor ipsum brussel sit ipsum amet';

// length
result = MyText.length;
result = MyText[MyText.length-1] // MyText.length = 30 -1

// charAt()
result = MyText.charAt(6); // return character at index 6

// concat() method
var firstname = "John "
var lastname = "Doe"
result = firstname.concat(lastname); // return JohnDoe
result = "1234".concat("5678"); // return 12345678

// startwidth() method and endwidth() method
result = MyText.endsWith("intec") // true or false
result = MyText.startsWith("lorem")

// includes method
result = MyText.includes("ipsum")

// indexOf() method
result = MyText.indexOf("brussel") // return index of word 

// replace method
//result = MyText.replace("ipsum","javascript")
result = MyText.replaceAll("ipsum","javascript");

// split method
var names="Ersin,Hande,Alex,John,Jane";
result = MyText.split(" ");
result = names.split(",")

// slice method 
result = MyText.slice(0,MyText.length-4)

result = MyText.toUpperCase(); // return all characters in uppercase
result = MyText.toLocaleLowerCase(); // return all characters in lowercase

var MyText2 = "             lorem                    ipsum             ";
//result = MyText2.trim().slice(5,MyText2.length-32); // return lorem ipsum
result = MyText2.trim().slice(0,6).concat(MyText2.trim().slice(MyText2.length-31)); // return lorem ipsum
//console.log(MyText2)
var MyNewText= "dolor ipsum dolor brussel BELGIUM sit dolor brussel ipsum amet 123456789"
result = MyNewText.match(/brussel/)
result = MyNewText.match(/brussel/g)



console.log(result)