//95221ebc50cf4e13b60594d17bb22237
var api_Key="95221ebc50cf4e13b60594d17bb22237"
var baseURL="https://newsapi.org/v2/"


var ResultsElement = document.querySelector('.results')
var ModalTitle = document.querySelector('.modal-title')
var NewsImageEl= document.querySelector('.news-image')
var publishedAtEl= document.querySelector('.publishedAt')
var NewsContent = document.querySelector('.content')
// fetch(`${baseURL}/everything?sortBy=publishedAt&q=javascript&language=en&apiKey=${api_Key}`)
// .then(res=>res.json())
// .then(data=>{
//     console.log(data)
//     data.articles.forEach(news=>{
//         console.log(news.title)
//     })
// })

async function getAllNews() {
    let res = await fetch(`${baseURL}/everything?sortBy=publishedAt&q=javascript&language=en&apiKey=${api_Key}`)
    return res.json()
}

// function getAllNews2(){
//     return new Promise((resolve,reject)=>{
//         fetch(`${baseURL}/everything?sortBy=publishedAt&q=javascript&language=en&apiKey=${api_Key}`)
//         .then(res=>res.json())
//         .then(data=>{
//             resolve(data)
//         })
//     })
// }

function GetDetail(news) {
    ModalTitle.innerHTML = news.title
    NewsImageEl.src = news.urlToImage
    publishedAtEl.innerHTML = news.publishedAt
    NewsContent.innerHTML = news.content
}

getAllNews()
    .then(result => {
        // console.log(result)
        result.articles.map((news, index) => {
            //  console.log(news)
            let NewsLink = `<a href="${news.url}" data-bs-toggle="modal" data-bs-target="#staticBackdrop" target="_blank" data-id="${index}">${news.title}</a><br/>`
            //  console.log(NewsLink)

            ResultsElement.innerHTML += NewsLink
        })
        document.querySelectorAll('a').forEach(link => {
            //  console.log(link)
            link.addEventListener('click', (event) => {
                let id = event.target.getAttribute('data-id');
                let singleNews = result.articles

                GetDetail(result.articles[id])
            })
        })
    })