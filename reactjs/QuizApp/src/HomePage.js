import React,{ useEffect, useState } from "react";

// import APIFetch from "./Actions/fetchActions"

import { Form, Col, Button, Row } from "react-bootstrap";




function HomePage() {


const [allCategories, setAllCategories] = useState([]);

// useEffect(()=>{

//     getCategories()
// },[])

// const getCategories=async()=>{
//     let res=await fetch("https://opentdb.com/api.php?amount=10&category=18/results")
//     let data=await res.json()
  
//     setAllCategories(data.results)

// }
// console.log(allCategories)



    return (
        <div className='d-flex justify-content-center align-items-center m-5'>
            <Row className='w-50 d-flex justify-content-center m-5'>
                <h1 className='text-center'>Wanna Play?</h1>
                <Form.Group as={Col} md={6} controlId="formGridState">
                    <Form.Label>Choose difficulty </Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>...</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} md={6} controlId="formGridState">
                    <Form.Label>Choose category</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>...</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>
                <Button  href="/quiz" className='p-2 m-3 btnHome' >Start Quiz</Button>
            </Row>
         


        </div>
    )
}

export default HomePage
