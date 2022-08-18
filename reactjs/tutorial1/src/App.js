// rfce > create functional component
import React, { useState } from 'react'
import { Button, Col, Container, Row, InputGroup, Form } from 'react-bootstrap'
function App() {
    const [count, setCount] = useState(0)
    const [username, setUsername] = useState('none')
    const [show, setShow] = useState(false)
    const IncreaseNumber = (e) => {
        console.log('+')
        if (count >= 10) {
            alert('not allowed max value')
        } else {
            setCount(count + 1) // update state value
        }
        // 0 + 1 = 1
        // 1 + 1 = 2
    }
    const DecreaseNumber = (e) => {
        console.log('-')
        if (count != 0) {
            setCount(count - 1)
        } else {
            alert('Not allowed')
        }

    }

    const handleChange = (e) => {
        console.log(e.target.value) // payload
        setUsername(e.target.value) // update username state object
    }
    return (
        <Container fluid={false}>

            <Row className="justify-content-center align-items-center text-center">
                <Col md={5} className="p-5 bg-dark text-light">
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <Form.Control
                            onChange={handleChange}
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <Button size='lg' onClick={() => setShow(!show)} className="rounded-0 mb-2">Display Username</Button>

                    <Button size='lg' onClick={IncreaseNumber} variant='success'>INCREASE NUMBER +</Button>
                    <h1>{show ? username : ''}</h1>
                </Col>
                <Col md={5} className="p-5 bg-primary text-light">
                    <Button size='lg' onClick={DecreaseNumber} variant='danger'>DECREASE NUMBER -</Button>
                </Col>
            </Row>
            <Row className="justify-content-center text-center">
                <Col md={10} className="p-5 bg-warning text-dark">
                    <h1>{count}</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default App
