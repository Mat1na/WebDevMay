//fizzBuzz
var output = [];
var number = 1;

function fizzBuzz() {
  if (number % 3 === 0 && number % 5 === 0) {
    output.push("fizzbuzz");
  } else if (number % 3 === 0) {
    output.push("fizz");
  } else if (number % 5 === 0) {
    output.push("buzz");
  } else {
    output.push(number);
  }
  number++;
  console.log(output);
}



//leap year

function leapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year";
      } else {
        return "Not a leap year";
      }
    } else {
      return "Leap year";
    }
  } else {
    return "Not a leap year";
  }
}
console.log(leapYear(2022))