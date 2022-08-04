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
// table.className = "table"

// const thead = g('thead')
// const trOfThead = g('tr')


// const thIndex = g('th')
// thIndex.innerText = "#"
// thIndex.setAttribute('scope', 'col')

// // trOfThead.append(thIndex) // appened th into tr

// const thFirst = g('th')
// thFirst.innerText = "First"
// thFirst.setAttribute('scope', 'col')

// const thLast = g('th')
// thLast.setAttribute('scope', 'col')

// const thHandle = g('th')
// thHandle.setAttribute('scope', 'col')

// trOfThead.append(thIndex, thFirst, thLast, thHandle)
// thead.append(trOfThead)
// table.append(thead)

// const tbody = g('tbody') // tbody 

// const trOfTbody = g('tr') // tr of tbody

// const thOfTbody = g('th') // child of tr of tbody
// thOfTbody.scope = 'row'
// thOfTbody.innerText = '1'

// const tdFirst = g('td') // child of tr of tbody
// tdFirst.innerText = "joe"

// const tdLast = g('td') // child of tr of tbody
// tdLast.innerText = "dalton"

// const tdHandle = g('td') // child of tr of tbody
// tdHandle.innerText = "@joe"
// trOfTbody.append(thOfTbody, tdFirst, tdLast, tdHandle)
// tbody.append(trOfTbody)
// table.append(tbody)
// document.body.append(table)

/*
<div class="card" style="width: 18rem;">
<img src="https://picsum.photos/200" class="card-img-top" alt="...">
 <div class="card-body">
      <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
</div> 
    */

// // Card Container
// const CardContainer = g('div')
// CardContainer.setAttribute('style','width: 18rem;')

// // Card Image
// const CardImage = g('img')
// CardImage.setAttribute('src','https://picsum.photos/200')
// //CardImage.classList.add('card-img-top')
// CardImage.className="card-img-top"
// CardImage.setAttribute('alt','Random')



// const CardBody = g('div')
// CardBody.classList.add('card-body')

// const h5=g('h5')
// h5.classList.add('card-title')
// const CardTitleText = document.createTextNode('Card title')
// h5.append(CardTitleText)

// const desc = g('p')
// desc.classList.add('card-text')
// const CardText = document.createTextNode('Some quick example text to build on the card title and make up the bulk of the card\'s content.')
// desc.append(CardText)

// const CardBtn = g('a')
// CardBtn.classList.add('btn')
// CardBtn.classList.add('btn-primary')
// CardBtn.innerText="Card Button"
// CardBody.append(h5)
// CardBody.append(desc)
// CardBody.append(CardBtn)
// CardContainer.append(CardImage)
// CardContainer.append(CardBody)

// const cloneOfCardContainer = CardContainer.cloneNode(true)
// cloneOfCardContainer.children[1].children[0].innerText="New Card Title"


// // change button style of clone one
// cloneOfCardContainer.children[1].lastChild.classList.remove('btn-primary')
// cloneOfCardContainer.children[1].lastChild.classList.add('btn-danger')
// document.body.append(CardContainer)
// document.body.append(cloneOfCardContainer)


function MakeCardComponent(image, cardTitle, description, btnColor, btnText) {
    // Card Container
    const CardContainer = g('div')
    CardContainer.setAttribute('style', 'width: 18rem;')

    // Card Image
    const CardImage = g('img')
    CardImage.setAttribute('src', `${image}`)
    //CardImage.classList.add('card-img-top')
    CardImage.className = "card-img-top"
    CardImage.setAttribute('alt', 'Random')



    const CardBody = g('div')
    CardBody.classList.add('card-body')

    const h5 = g('h5')
    h5.classList.add('card-title')
    const CardTitleText = document.createTextNode(cardTitle)
    h5.append(CardTitleText)

    const desc = g('p')
    desc.classList.add('card-text')
    const CardText = document.createTextNode(description)
    desc.append(CardText)

    const CardBtn = g('a')
    CardBtn.classList.add('btn')
    CardBtn.classList.add(btnColor != undefined ? btnColor : 'btn-primary')
    CardBtn.innerText = btnText
    CardBody.append(h5)
    CardBody.append(desc)
    CardBody.append(CardBtn)
    CardContainer.append(CardImage)
    CardContainer.append(CardBody)
    console.log(btnColor)
    return document.body.append(CardContainer)
}


MakeCardComponent('https://evolutionsports.nl/wp-content/uploads/2020/10/Martial-Art-stijlen-die-als-inspiraatsie-diende-voor-Avatar-The-Last-Airbender.jpeg','This is a test','lorem ipsum lorem ipsum','btn-success','Click me')

MakeCardComponent('https://evolutionsports.nl/wp-content/uploads/2020/10/Martial-Art-stijlen-die-als-inspiraatsie-diende-voor-Avatar-The-Last-Airbender.jpeg','Tasdasdasdasd','lorem ipsum lorem ipsum')

document.querySelector('.RemoveBtn').addEventListener('click',()=>{
    document.body.removeChild(document.body.children[2])
})