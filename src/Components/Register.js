import React from 'react'
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Register() {
  return (
    <div className="App">
      <header className='App-header'>
        <Container>
          <div className="parent-div">
              <div className='example-div'>
                <Card className='card-style'>
                  <h1 className='login-heading'>Regjistrohuni</h1>
                <Form style={{margin:"30px"}}>
                  
                <Button variant="outline-primary" 
                  size="md"> <img width="20" height="20"
                  src="https://icon-library.com/images/google-g-icon/google-g-icon-12.jpg" 
                /> Kycu me Google</Button>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className='label-text'>Emri</Form.Label>
                    <Form.Control type="email" placeholder="Shkruani emrin" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicSurname">
                    <Form.Label className='label-text'>Mbiemri</Form.Label>
                    <Form.Control type="email" placeholder="Shkruani mbiemrin" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='label-text'>Email</Form.Label>
                    <Form.Control type="email" placeholder="Shkruani email-in" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='label-text'>Password</Form.Label>
                    <Form.Control type="password" placeholder="Shkruani password-in" />
                  </Form.Group>
    
                 <Button variant="primary" type="submit" className='button'>
                  Vazhdo
                </Button>

                  {/* <h5 display="flex" font-size="20px ">Keni llogari?</h5> */}
                  <a href ="/login" style={{textDecoration:"none", fontSize:"17px"}}>Kycu</a>
                </Form>
                </Card>
              </div>
          </div>
        </Container>
      </header>
    </div>
  )
}

export default Register