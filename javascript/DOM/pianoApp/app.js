let keys=document.querySelectorAll(".key")

function PlayTone(keyCode){
    return document.querySelector(`audio[data-key='${keyCode}']`).play()
}


keys.forEach(key=>{
    key.addEventListener("click",(e)=>{
        PlayTone(e.target.getAttribute("data-key"))
        console.log(e.target.getAttribute("data-key"))
    })
})