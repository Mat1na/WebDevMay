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

  const fetchCryptoData = async (e) => {
    // const proxyUrl = "https://arkakapi.herokuapp.com/",
    //   targetUrl =
    //     "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=46cb6a30-7b16-428c-833a-0f1a4642c3dc&sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=EUR";

    const res = await fetch(
      "https://arkakapi.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=46cb6a30-7b16-428c-833a-0f1a4642c3dc&sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=EUR"
    );

    const data = await res.json();
    const filteredData = data.data.filter((obj) => obj.name == curentCoin);
    setListOfCoins(filteredData);
  };

  const handleInput = (e) => {
    console.log("handle input", e.target.value);
    setCurrentCoin(e.target.value);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6} className=" text-dark text-center p-5">
          <h1 className="text-center"> Price Finder </h1>
          <InputGroup className="mb-3">
            <Form.Control
              onChange={handleInput}
              placeholder="Enter your Cryptocurrency"
              aria-describedby="basic-addon1"
            />
            {console.log(listOfCoins, curentCoin)}
            <Button onClick={fetchCryptoData}>Search Price</Button>
          </InputGroup>
          <hr />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={12} className="bg-light text-dark text-center p-3">
          <h1>Currency price details</h1>

          <Badge>Cryptocurrency Name:</Badge>
          <p>{curentCoin}</p>

          {listOfCoins.quote !== undefined ? (
            <div>
              <Badge>Cryptocurrency Price:</Badge>
              <p>{listOfCoins.quote.EUR.price}</p>
            </div>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
