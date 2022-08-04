// Element Generator
const g = t => document.createElement(t);

// const randomImage = g('img')
// randomImage.src = 'https://picsum.photos/200'
// randomImage.className="img-fluid"
// randomImage.setAttribute('alt','Random Image')

// const container = g('div')
// container.className="container";
// const row = g('div')
// row.className="row justify-content-center align-items-center text-light";
// // column-1
// const col1 = g('div')
// const col1Text = document.createTextNode('Col 1')
// col1.appendChild(col1Text)
// col1.className="col-md-4 bg-primary p-5"
// // column-2
// const col2 = g('div')
// col2.className="col-md-4 bg-warning p-5"
// col2.appendChild(randomImage)
// // column-3
// const col3 = g('div')
// col3.className="col-md-4 bg-danger p-5"

// row.append(col1)
// row.append(col2)
// row.append(col3)
// container.append(row)
// document.body.append(container)

// exercise-2 

/*
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
*/

// const table = g('table')
// table.className="table"

// const thead = g('thead')
// const trOfThead = g('tr')


// const thIndex = g('th')
// thIndex.innerText="#"
// thIndex.setAttribute('scope','col')

// // trOfThead.append(thIndex) // appened th into tr

// const thFirst = g('th')
// thFirst.innerText="First"
// thFirst.setAttribute('scope','col')

// const thLast = g('th')
// thLast.setAttribute('scope','col')

// const thHandle = g('th')
// thHandle.setAttribute('scope','col')

// trOfThead.append(thIndex,thFirst,thLast,thHandle)
// thead.append(trOfThead)
// table.append(thead)
// console.log(table, thead)



{/* <div class="card" style="width: 18rem;">
<img src="https://picsum.photos/200" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">Card title</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div> */}


const container= g("div") // parentContainer
container.className="card";
container.style="width: 18rem"


const img= g('img')
img.src = 'https://picsum.photos/200'
img.className="card-img-top"
img.setAttribute('alt','Random Image')

container.append(img)

const cardBody=g("div") // sub-Parent Container

cardBody.className="card-body"

const title=g("h5")
title.className="card-title"
title.innerText="Card title"

const par=g("p")
par.className="card-text"
par.innerText="Some quick example text to build on the card title and make up the bulk of the card's content."

const link=g("a")
link.className="btn btn-primary"
link.innerText="Go somewhere"
link.href="#"



cardBody.append(title)
cardBody.append(par)
cardBody.append(link)

container.append(cardBody)






console.log(container,cardBody)