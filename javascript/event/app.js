var number=1;
const inputValue=document.getElementById("username")
function clickHandler(event){
    //event.preventDefault()
    // var number=1;
    number++;
    console.log("Clicked button",number)
}

function inputHandler(event){
    console.log("Hello",inputValue.value);
}

inputValue;addEventListener("change",inputHandler())
const registerBtn=document.getElementById("register")
registerBtn.addEventListener("click",function(event){
    console.log("registered button clicked",inputValue.value)
})