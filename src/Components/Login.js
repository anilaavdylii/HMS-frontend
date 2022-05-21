import React from 'react'
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  return (
    <div className="App">
      <header className='App-header'>
        <Container>
          <div className="parent-div">
              <div className='example-div'>
                <Card className='card-style'>
                  <h1 className='login-heading'>Kycu</h1>
                  
                <Form style={{margin:"30px"}}> 

                  <Button variant="outline-primary" 
                  size="md"> <img width="20" height="20"
                  src="https://icon-library.com/images/google-g-icon/google-g-icon-12.jpg" 
                /> Kycu me Google</Button>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='label-text'>Email</Form.Label>
                    <Form.Control type="email" placeholder="Shkruani email-in" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='label-text'>Password</Form.Label>
                    <Form.Control type="password" placeholder="Shkruani password-in " />
                  </Form.Group>
    
                  <a href="#/" className='forgot-pw'>
                   Keni harruaj fjalekalimin?
                  </a>

                  <Button variant="primary" type="submit" className='button'>
                    Vazhdo
                  </Button>

                  <a href ="/register" style={{textDecoration:"none", fontSize:"17px"}}>Krijo nje llogari</a>
                </Form>
                </Card>
              </div>
          </div>
        </Container>
      </header>
    </div>
  )
}

export default Login