var number = 1; // global scope variable
const inputValue = document.getElementById("username")
function ClickHandler(event) {
    //  event.preventDefault()
   // var number = 1; // local scope variable
    number++
    console.log("Clicked the button", number)
}

function InputHandler(event){
    console.log('hello',inputValue.value)
}

inputValue.addEventListener("change",InputHandler)

const RegisterBtn = document.getElementById("register")
// addEventListener
function RegisterClickHandler(event){
    console.log("register button clicked",inputValue.value)
}
RegisterBtn.addEventListener("click", RegisterClickHandler)