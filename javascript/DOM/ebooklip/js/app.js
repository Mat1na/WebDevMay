const addBookBtn = document.querySelector(".addbookbtn");
const deleteBookBtn = document.querySelector(".deleteBookBtn");

let bookName = document.querySelector("#book_name");
let bookAuthor = document.querySelector("#book_author");
let bookCategory = document.querySelector("#book_category");
let bookDate = document.querySelector("#book_date");
let bookPrice = document.querySelector("#price");





addBookBtn.addEventListener("click", (e) => {
  let books = {
    bookName: bookName.value,
    bookAuthor: bookAuthor.value,
    bookCategory: bookCategory.options[bookCategory.selectedIndex].value,
    bookDate: bookDate.value,
    bookPrice: bookPrice.value
  }
  fetch(" http://localhost:5000/books",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
   
    body: JSON.stringify(books)

  })
  .then(response=>response.json())
  .then(data=>{
    console.log(data)
 
  
})
e.preventDefault();

});

// deleteBookBtn.addEventListener("click", (e) => {
  
//   fetch(` http://localhost:5000/books/ ${id}`,{
//     method: "DELETE",
//     })
//   .then(response=>response.json())
//   .then(data=>{
//     console.log(data)
 
  
// })
// e.preventDefault();

});
