import { Button } from "react-bootstrap"
import { useRef } from 'react'

export default function Contact({MyFunction}){
    const inputRef=useRef()

const clickHndler=(e)=>{
    console.log(inputRef.current.value)
   
}


    return(
        <>
        <h1>Contact</h1>
        <input type="text" ref={inputRef} />
        <Button onClick={clickHndler}>Get input Value</Button>
        {
        MyFunction()
        }
        </>
    )
}