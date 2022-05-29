import React, { useState, useEffect } from 'react'
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {

  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } 
    return errors;
  };

  return (
    <div className="App">
      <header className='App-header'>
        <Container>
          <div className="parent-div">
              <div className='example-div'>
                <Card className='card-style'>
                  <h1 className='login-heading'>Kycu</h1>
                  
                <Form style={{margin:"30px"}} onSubmit={handleSubmit}> 

                  <Button variant="outline-primary" 
                  size="md"> <img width="20" height="20"
                  src="https://icon-library.com/images/google-g-icon/google-g-icon-12.jpg" 
                /> Kycu me Google</Button>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='label-text'>Email</Form.Label>
                    <Form.Control type="email" placeholder="Shkruani email-in"                      
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                    />
                     <h6>{formErrors.email}</h6>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='label-text'>Password</Form.Label>
                    <Form.Control type="password" placeholder="Shkruani password-in " 
                      name="password"
                      value={formValues.password}
                      onChange={handleChange}
                    />
                     <h6>{formErrors.password}</h6>
                  </Form.Group>
                  <br/>
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