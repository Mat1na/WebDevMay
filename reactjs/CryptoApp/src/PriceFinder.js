// import React from 'react'
// import { useState } from "react";
// import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
// import {BsCurrencyBitcoin} from 'react-icons/bs'





// export default function PriceFinder() {

//   const[currency, setCurrency]= useState([])

//   const handleInput=(e)=>{
//     console.log("handle input",e.target.value)
//    setCurrency(e.target.value)
//   }
//  const handleClick=(e)=>{
//   console.log("click click testing => ")
//  }
//   return (
//     <Row className="justify-content-center">
//     <Col md={6}>
//       <h1 className='text-center'><BsCurrencyBitcoin/> Price Finder </h1>
//       <InputGroup className="mb-3">
//         <Form.Control
//           onChange={handleInput}
//           placeholder="Enter your Cryptocurrency"
//           aria-label="priceFinder"
//           aria-describedby="basic-addon1"
//         />
//         <Button onClick={handleClick} >Search Price</Button>
       
//       </InputGroup>
//       <hr />
      
//     </Col>
//   </Row>
//   )
// }
