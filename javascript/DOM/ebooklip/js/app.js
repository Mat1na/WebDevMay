const addBookBtn = document.querySelector(".addbookbtn");
const deleteBookBtn = document.querySelector(".deleteBookBtn");

let bookName = document.querySelector("#book_name");
let bookAuthor = document.querySelector("#book_author");
let bookCategory = document.querySelector("#book_category");
let bookDate = document.querySelector("#book_date");
let bookPrice = document.querySelector("#price");

let tBody=document.querySelector("#entries");




// <tr>
// <th scope="row">1</th>
// <td>Thus spoke zarathustra</td>
// <td>Friedrich Nietzsche</td>
// <td>Philosophy</td>
// <td>1883</td>
// <td>10 <i class="fa fa-eur" aria-hidden="true"></i></td>
// <td><a href="#"><i class="fa fa-trash lead" aria-hidden="true"></i></a></td>
// </tr> 


const g=t=>document.createElement(t)
function bookListGenerator(entry){
const tr=g('tr')

const thIndex = g('th')
thIndex.innerText = "#"
thIndex.setAttribute('scope', 'row')

const tdName=g('td')
const textOfName = document.createTextNode(entry.bookName)
tdName.append(textOfName)
const tdAuthor=g('td')
const textOfAuthor = document.createTextNode(entry.bookAuthor)
tdAuthor.append(textOfAuthor)
const tdCategory=g('td')
const textOfCategory= document.createTextNode(entry.bookCategory)
tdCategory.append(textOfCategory)
const tdDate=g('td')
const textOfDate= document.createTextNode(entry.bookDate)
tdDate.append(textOfDate)
const tdPrice=g('td')
const textOfPrice= document.createTextNode(entry.bookPrice)
tdPrice.append(textOfPrice)
const euro=g('i')
euro.setAttribute('aria-hidden', 'true')
euro.className="fa fa-eur"
tdPrice.append(euro)


tr.append(tdName,tdAuthor,tdCategory,tdDate,tdPrice)
tr.append(thIndex)
tBody.append(tr)
document.body.appendChild(tr);

// var tr = document.createElement('tr');
// var array = [ 'bookName', 'bookAuthor', 'bookCategory', 'bookDate','bookPrice'];

// const tr=g('tr')
// const thIndex = g('th')

}





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
    data.forEach(data=>{
      tBody.innerHTML+=bookListGenerator(data)
    
    })
 
    e.preventDefault();
})





// <tr>
// <th scope="row">1</th>
// <td>Thus spoke zarathustra</td>
// <td>Friedrich Nietzsche</td>
// <td>Philosophy</td>
// <td>1883</td>
// <td>10 <i class="fa fa-eur" aria-hidden="true"></i></td>
// <td><a href="#"><i class="fa fa-trash lead" aria-hidden="true"></i></a></td>
// </tr> 







// deleteBookBtn.addEventListener("click", (e) => {
  
//   fetch(` http://localhost:5000/books/ ${id}`,{
//     method: "DELETE",
//     })
//   .then(response=>response.json())
//   .then(data=>{
//     console.log(data)
 
  
// })
// e.preventDefault();

// })
