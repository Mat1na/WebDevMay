const searchInput = document.querySelector('.searchInput') // input element
const [wikiSearch, wikiSearchRandom] = document.querySelectorAll('button'); // search buttons
const ResultsSection = document.querySelector('.results'); // results section

// https://en.wikipedia.org/w/api.php?action=query&list=search&prop=summary&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=reactjs
async function searchData(keyword, limit) {
    let response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=summary&inprop=url&utf8=&format=json&origin=*&srlimit=${limit}&srsearch=${keyword}`)
    let data = await response.json() // retrieve the data from the response
    return data
}

/*
<li class="list-group-item d-flex justify-content-between align-items-start">
                       <div class="ms-2 me-auto">
                            <div class="fw-bold">title</div>
                            Short description
                        </div> 
                        
                    </li>
                    
*/

const g = t => document.createElement(t) // create element
function HtmlTemplateGenerator(obj) {
    const li = g('li')
    li.className = "list-group-item d-flex justify-content-between align-items-start"

    const parentDiv = g('div')
    parentDiv.className = "ms-2 me-auto"
    const textOfParentDiv = document.createTextNode(obj.snippet)


    const childDiv = g('div')
    childDiv.className = "fw-bold"
    const textOfChildDiv = document.createTextNode(obj.title)
    childDiv.append(textOfChildDiv)
    parentDiv.append(childDiv)
    parentDiv.append(textOfParentDiv)
    li.append(parentDiv)
    return ResultsSection.append(li)
}


wikiSearch.addEventListener('click', (e) => {
    ResultsSection.innerHTML='' // clear the results section
    // fetching data here
    searchData(searchInput.value, 30)
        .then(data => {
            console.log(data.query.search) // retrieved data
            data.query.search.forEach(obj=>{
                HtmlTemplateGenerator(obj)
            })
        }).catch(err=>{
            alert('No data found')
        })
    console.log('hello world', searchInput.value)
    e.preventDefault()
})

// html events
// mouse events


// mouseover
ResultsSection.addEventListener('mouseover', (e) => {
    console.log('Mouse Over Event', e.target)
    if (e.target.classList.contains('bg-dark')) {
        e.target.classList.remove('bg-dark')
        e.target.classList.add('bg-danger')
    }

})

// mouseout
ResultsSection.addEventListener('mouseout', (e) => {
    console.log('Mouse Out Event', e.target)
    e.target.classList.add('bg-dark')
    e.target.classList.add('text-light')
})

// mousedown
ResultsSection.addEventListener('mousedown', (e) => {
    console.log('Mouse down event', e.target)
})

// mouseup
ResultsSection.addEventListener('mouseup', (e) => {
    console.log('Mouse up event', e.target)
})

// keyboard events

// keydown // works all keypresses
// searchInput.addEventListener('keydown',(e)=>{
//     console.log('Key Down Event', e.key)
// })

// keyup // works all keypresses
// searchInput.addEventListener('keyup',(e)=>{
//     console.log('Key Up Event', e.key)
// }) 

// keypress only works for chars
// searchInput.addEventListener('keypress',(e)=>{
//     console.log('Key press Event', e.key)
// });

// change event
searchInput.addEventListener('change', (e) => {
    console.log('Change Event', e.target.value)
})

// focus event
searchInput.addEventListener('focus', (e) => {
    console.log('Focus Event', e.target.value)
    e.target.classList.add('bg-dark')
    e.target.classList.add('text-light')
})

searchInput.addEventListener('blur', (e) => {
    console.log('Blur Event', e.target.value)
    if (e.target.classList.contains('bg-dark')) {
        e.target.classList.remove('bg-dark')
        e.target.classList.remove('text-light')
        e.target.classList.add('bg-light')
        e.target.classList.add('text-dark')
    }

})

// DOMContentLoaded event
document.addEventListener('DOMContentLoaded',()=>{
    searchData('javascript',20)
    .then(data=>{
        console.log(data,'DOMContentLoaded event')
        data.query.search.forEach(obj=>{
            HtmlTemplateGenerator(obj)
        })
    })
})