import React,{ useEffect, useState } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";





function HomePage() {


const [allCategories, setAllCategories] = useState([]);
const [fetchedData, setFetchedData] = useState([]);
const [selectedCat, setSelectedCat]= useState([]);

useEffect(()=>{
    async function fetchAllCategories() {
        let res = await fetch("https://opentdb.com/api_category.php");
        let data = await res.json();
        setAllCategories(data.trivia_categories);
        // let cat=fetchedData.map((cat)=>cat.category)
       
      }
      fetchAllCategories();
      
},[])




// function startBtn(){
//     if (formRef.current.elements["user_answer"].value !== "") {
//         if (
//           allData[nextQuestion].correct_answer ===
//           formRef.current.elements["user_answer"].value
//         ) {
       
//         }
      
//       } else {
//         alert("You need to pick an option");
//       }
// }





    return (
        <div className='d-flex justify-content-center align-items-center m-5'>
            <Row className='w-50 d-flex justify-content-center m-5'>
                <h1 className='text-center titleHome'>Wanna Play?</h1>
                <Form.Group as={Col} md={12} controlId="formGridState">
                    <Form.Label>Choose difficulty </Form.Label>
                    <Form.Select defaultValue="Choose..." onChange={(e)=>setSelectedCat(e.target.value)}>
                  {console.log(allCategories)}
                  {console.log(selectedCat)}
                    {allCategories.map((cat)=>
                    <option key={cat.id}>{cat.name}</option>
                    )}
                        
                       
                    </Form.Select>
                </Form.Group>



                <Form.Group as={Col} md={12} controlId="formGridState">
                    <Form.Label>Choose category</Form.Label>
                    <Form.Select defaultValue="Choose...">
                    
                        <option>...</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>
                <Button  md={12} href="/Quiz" className='p-2 m-3 btnHome ' >Start Quiz </Button>
            </Row>
         


        </div>
    )
}

export default HomePage
