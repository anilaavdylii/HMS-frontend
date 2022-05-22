import React,{useState, useEffect} from 'react'
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


function Register() {
  const initialValues = {name:"", surname:"", email:"", password:""};
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
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.surname) {
      errors.surname = "Surname is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };


  return (
    <div className="App">
      <header className='App-header'>
        <Container>
          <div className="parent-div">
              <div className='example-div2'>
                <Card className='card-style'>
                  <h1 className='login-heading'>Regjistrohuni</h1>
                  
                <Form style={{margin:"30px"}} onSubmit={handleSubmit}>
                  
                <Button variant="outline-primary" 
                  size="md"> <img width="20" height="20"
                  src="https://icon-library.com/images/google-g-icon/google-g-icon-12.jpg" 
                /> Kycu me Google</Button>


                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className='label-text'>Emri</Form.Label>
                    <Form.Control type="text"
                        name="name"
                        placeholder="Name"
                        value={formValues.name}
                        onChange={handleChange}
                    />
                    <p>{formErrors.name}</p>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicSurname">
                    <Form.Label className='label-text'>Mbiemri</Form.Label>
                    <Form.Control type="text"
                        name="surname"
                        placeholder="Surname"
                        value={formValues.surname}
                        onChange={handleChange}
                
                    />
                    <p>{formErrors.surname}</p>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='label-text'>Email</Form.Label>
                    <Form.Control type="text"
                      name="email"
                      placeholder="Email"
                      value={formValues.email}
                      onChange={handleChange}
                    />
                    <p>{formErrors.email}</p>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='label-text'>Password</Form.Label>
                    <Form.Control type="password"
                          name="password"
                          placeholder="Password"
                          value={formValues.password}
                          onChange={handleChange}
                    />
                    <p>{formErrors.password}</p>
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