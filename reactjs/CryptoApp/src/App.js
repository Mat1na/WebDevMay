import React, { useState } from 'react'
import { Container, Button, Col, Form, InputGroup, Row, Badge } from "react-bootstrap";
import { BsCurrencyBitcoin } from 'react-icons/bs'
import { v4 as uuidv4 } from "uuid"

function App() {

  const [listOfCoins, setListOfCoins] = useState({})
  const [currentCoin, setCurrentCoin] = useState('')

  const fetchCryptoData = async () => {

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/',

    targetUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=46cb6a30-7b16-428c-833a-0f1a4642c3dc&sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=EUR'



    const res =  await fetch(proxyUrl + targetUrl)

    const data = await res.json()
    setListOfCoins(data)
  }
  
  const handleInput = (e) => {
    console.log("handle input", e.target.value,e.target)
    setCurrentCoin(e.target.value)
  }


  // const handleClick = () =>listOfCoins.map((coin)=> {
  // //   console.log("click click testing => ")
  // //   setCurrentCoin([...listOfCoins, currentCoin])
  // // })

  // const getPriceOfCurrency = () => {
  //   console.log("test",setCurrentCoin)
  //   listOfCoins.map((coin)=> {
  //     console.log("click click testing => ")
  //     setCurrentCoin([...listOfCoins, currentCoin])
  //   })
  
  // }

  
  return (
    <Container className="bg-dark text-light " fluid={true}>
      <Row className="justify-content-center">
        <Col md={6} className="bg-light text-dark text-center p-5">
          <h1 className='text-center'><BsCurrencyBitcoin /> Price Finder </h1>
          <InputGroup className="mb-3">
            <Form.Control
              onChange={handleInput}
              placeholder="Enter your Cryptocurrency"
              aria-label="priceFinder"
              aria-describedby="basic-addon1"
            />
            <Button onClick={fetchCryptoData} >Search Price</Button>
            
            <Col md={12} className="bg-light text-dark text-center p-3">
              <h1>Currency price details</h1>
              <p className="text-dark text-center"><Badge>Cryptocurrency Price:</Badge>{}</p>


            </Col>

          </InputGroup>
          <hr />
          <ul>
          {console.log(listOfCoins,currentCoin.id)}
        
        </ul>

        </Col>
      </Row>

    </Container>
  )
}

export default App