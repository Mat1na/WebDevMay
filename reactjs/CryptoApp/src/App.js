import React, { useState } from "react";
import {
  Container,
  Button,
  Col,
  Form,
  InputGroup,
  Row,
  Badge,
} from "react-bootstrap";

function App() {
  const [listOfCoins, setListOfCoins] = useState({});
  const [curentCoin, setCurrentCoin] = useState("");



  async function fetchListOfCoins() {
    
    const res= await fetch (
      "https://arkakapi.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=46cb6a30-7b16-428c-833a-0f1a4642c3dc&sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=EUR"
    );

    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/',

    // targetUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=46cb6a30-7b16-428c-833a-0f1a4642c3dc&sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=EUR'

    // const res =  await fetch(proxyUrl + targetUrl)

    const data = await res.json()
    return data
  }
   

  
  // const handleInput = (e) => {
  //   console.log("handle input", e.target.value,e.target)
  //   setListOfCoins(e.target.value)
  // }


  // // const handleClick = () =>listOfCoins.map(coin){
  // //   console.log("click click testing => ")
  // //   setCurrentCoin([...listOfCoins, curentCoin])
  // // }

  // const getPriceOfCurrency = (param) => {
  //   console.log("test",param)
  //   setCurrentCoin(param)
  // }
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6} className=" text-dark text-center p-5">
          <img src="/images/opengraph.png" width={150} height={150} />
          <h1 className="text-center"> Price Finder </h1>
          <InputGroup className="mb-3">
            <Form.Control
              onChange={handleInput}
              placeholder="Enter your Cryptocurrency"
              aria-describedby="basic-addon1"
            />
            <Button onClick={ listOfCoins} >Search Price</Button>
            
            <Col md={12} className="bg-light text-dark text-center p-3">
              <h1>Currency price details</h1>
              <p className="text-dark text-center"><Badge>Cryptocurrency Price:</Badge>{curentCoin.quote.price}</p>


            </Col>

          </InputGroup>
          <hr />
          <ul>
          {console.log(listOfCoins)}
          {listOfCoins.map((curentCoin,index) => (
            <div key={index} >{curentCoin}
            <p>{curentCoin.price}</p></div>
          ))}
        </ul>

        </Col>
      </Row>

    </Container>
  );
}

export default App;
