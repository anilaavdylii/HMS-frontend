import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRegisterMutation } from '../rq/hooks/useRegisterMutation';
import { RegisterFormSchema } from '../validations/RegisterForm.schema';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const { push } = useHistory();
  const notify = (message) => toast(message, { closeButton: true });
  const {
    register,
    handleSubmit,
    formState: {
      errors: { name, surname, email, password },
    },
  } = useForm({
    resolver: joiResolver(RegisterFormSchema),
  });

  const { mutate: signup } = useRegisterMutation();

  const onSubmit = (data) =>
    signup(data, {
      onSuccess: ({ status }) => {
        if (status === 200) {
          push('/login');
          notify('Successfully registered! Log in Now');
        } else notify('Something went wrong, try again!', {});
      },
    });

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <div className="parent-div">
            <div className="example-div2">
              <Card className="card-style">
                <h1 className="login-heading">Regjistrohuni</h1>

                <Form
                  style={{ margin: '30px' }}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {/*                   
                <Button variant="outline-primary" 
                  size="md"> <img width="20" height="20"
                  src="https://icon-library.com/images/google-g-icon/google-g-icon-12.jpg" 
                /> Kycu me Google</Button> */}

                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className="label-text">Emri</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      {...register('name')}
                    />
                    {name && <h6>{name.message}</h6>}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicSurname">
                    <Form.Label className="label-text">Mbiemri</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Surname"
                      {...register('surname')}
                    />
                    {surname && <h6>{surname.message}</h6>}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label-text">Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Email"
                      {...register('email')}
                    />
                    {email && <h6>{email.message}</h6>}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="label-text">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      {...register('password')}
                    />
                    {password && <h6>{password.message}</h6>}
                  </Form.Group>

                  <Button variant="primary" type="submit" className="button">
                    Vazhdo
                  </Button>

                  {/* <h5 display="flex" font-size="20px ">Keni llogari?</h5> */}
                  <a
                    href="/login"
                    style={{ textDecoration: 'none', fontSize: '17px' }}
                  >
                    Kycu
                  </a>
                </Form>
              </Card>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
};

export default Register;
