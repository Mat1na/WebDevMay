const addBookBtn = document.querySelector(".addbookbtn");
const deleteAllBtn = document.querySelector(".deleteAllBtn");
const table = document.querySelector(".table")
const divBooklist = document.queryCommandValue(".booklist")

let bookName = document.querySelector("#book_name");
let bookAuthor = document.querySelector("#book_author");
let bookCategory = document.querySelector("#book_category");
let bookDate = document.querySelector("#book_date");
let bookPrice = document.querySelector("#price");






// <tr>
// <th scope="row">1</th>
// <td>Thus spoke zarathustra</td>
// <td>Friedrich Nietzsche</td>
// <td>Philosophy</td>
// <td>1883</td>
// <td>10 <i class="fa fa-eur" aria-hidden="true"></i></td>
// <td><a href="#"><i class="fa fa-trash lead" aria-hidden="true"></i></a></td>
// </tr> 


const g = t => document.createElement(t)
function bookListGenerator(entry) {

  const tBody = g("tbody")
  const tr = g('tr')

  const thIndex = g('th')
  const textOfIndex=document.createTextNode(entry.id)
  thIndex.setAttribute('scope', 'row')
  thIndex.append(textOfIndex)

  const tdName = g('td')
  const textOfName = document.createTextNode(entry.bookName)
  tdName.append(textOfName)
  const tdAuthor = g('td')
  const textOfAuthor = document.createTextNode(entry.bookAuthor)
  tdAuthor.append(textOfAuthor)
  const tdCategory = g('td')
  const textOfCategory = document.createTextNode(entry.bookCategory)
  tdCategory.append(textOfCategory)
  const tdDate = g('td')
  const textOfDate = document.createTextNode(entry.bookDate)
  tdDate.append(textOfDate)
  const tdPrice = g('td')
  const textOfPrice = document.createTextNode(entry.bookPrice)
  tdPrice.append(textOfPrice)
  const euro = g('i')
  euro.setAttribute('aria-hidden', 'true')
  euro.className = "fa fa-eur"
  tdPrice.append(euro)
  const tdDelete=g("td")
  const button = g("button")
  const trashCan = g('i')
  trashCan.setAttribute('aria-hidden', 'true')
  trashCan.className = "fa fa-trash lead "
  button.append(trashCan)
  button.className="deletebtn"
  tdDelete.append(button)


  tr.append(thIndex,tdName, tdAuthor, tdCategory, tdDate, tdPrice,tdDelete)

  tBody.append(tr)
  table.append(tBody)
  document.body.append(divBooklist);
}








let booksList = []

addBookBtn.addEventListener("click", (e) => {

  let newBook = {
    id: booksList.length,
    bookName: bookName.value,
    bookAuthor: bookAuthor.value,
    bookCategory: bookCategory.options[bookCategory.selectedIndex].value,
    bookDate: bookDate.value,
    bookPrice: bookPrice.value
  }
  fetch("   http://localhost:5000/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(newBook)

  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      booksList = booksList.push(bookListGenerator(data))



      e.preventDefault();
    })
    .catch(error => {

      console.log(error)
    })
})


// deleteAllBtn.addEventListener("click", (e) => {
// var tableHeaderRowCount = 1;
// var rowCount = table.rows.length;
// for (var i = tableHeaderRowCount; i < rowCount; i++) {
//     table.deleteRow(tableHeaderRowCount);
// }
// })







// })




// let trashButton=document.querySelector(".deletebtn")


// deleteAllBtn.addEventListener("click", (e) => {

//   fetch(`http://localhost:5000/books`, {
//     method: "DELETE",
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data)



//     })
//   e.preventDefault();

// })
