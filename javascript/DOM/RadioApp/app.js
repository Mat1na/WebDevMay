
const radioList = document.querySelector('.radioList')

document.addEventListener('DOMContentLoaded',()=>{
    fetch('http://localhost:5000/radios')
    .then(response=>response.json())
    .then(radios=>{
   
        radios.map((radio,index)=>{
            console.log(radio)
            radioList.innerHTML+=`<li class="list-group-item bg-black radio text-light" radio-id="${radio.id}">
            <img src="${radio.logo}" class="w-25 mx-2"   />
            ${radio.name}
            </li>`
        })
    })
})


function PlayAudio(obj){
    console.log(obj)
    document.querySelector("audio").src=obj.url
    document.querySelector("audio").play()
}

async function getRadioById(id){
    let res=await fetch(` http://localhost:5000/radios/${id}`)
    let radio=await res.json()
    return radio
}

radioList.addEventListener("click",(e)=>{
   if(e.target.classList.contains("radio")){
    console.log("radioooo",e.target)
    const RadioID=e.target.getAttribute("radio-id")
    console.log(RadioID)
    getRadioById(RadioID)
    .then(radio=>{
        PlayAudio(radio)
    })
   }
    e.preventDefault()
})