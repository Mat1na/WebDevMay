const searchInput=document.querySelector(".searchInput")
const[wikiSearch,WikisearchRandom]=document.querySelectorAll("button")
const ResultSection=document.querySelector(".results")


async function searchData(keyword,limit){
    let response=await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=${limit}&srsearch=${keyword}`)

    let data=await response.json()
    return data
}


const g=t=>document.createElement(t)
function HtmlTemplateGenerator(obj){
    const li=g("li")
    li.className="list-group-item d-flex justify-content-between align-items-start"

    const parentDiv=g("div")
    parentDiv.className="ms-2 me-auto"
    const textOfParentDiv=document.createTextNode(obj.snippet)
   
    const childDiv=g("div")
    childDiv.className="fw-bold"
    const textOfChildDiv=document.createTextNode(obj.title)

    childDiv.append(textOfChildDiv)
    parentDiv.append(childDiv)
    parentDiv.append(textOfParentDiv)
    li.append(parentDiv)
    return ResultSection.append(li)

}


wikiSearch.addEventListener("click",(e)=>{
    searchData(searchInput.value,30)
    .then(data=>{
        console.log(data.query.search)
        data.query.search.forEach(obj=>{
            HtmlTemplateGenerator(obj)

        })
    })
    console.log("hello world", searchInput.value)
    e.preventDefault()
})