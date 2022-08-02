// DOM methods

// 1.getElementById
// 2.getElementsByClassName
// 3.getElementsByTagName
// 4.querySelector
// 5.querySelectorAll

var result;

result = document.getElementById("navbarSupportedContent");
result = document.getElementsByClassName('col')
result = document.getElementsByTagName('p')
Array.from(result).forEach(text=>{
    text.innerText="aisojdaojidioasjdioajsdiojas"
})
result = document.querySelector('.col') // returns the first element

result = document.querySelectorAll('.col') // returns an array of elements
result.forEach(col=>{
    console.log(col)
})


console.log(result)