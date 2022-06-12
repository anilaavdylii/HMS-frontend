import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { LoginFormSchema } from '../validations/LoginForm.schema';
import { useLoginMutation } from '../rq/hooks/useLoginMutation';
import { useLogin } from '../hooks/useAuth';
import { toast } from 'react-toastify';

const Login = () => {
  const notify = (message) => toast(message, { closeButton: true });
  const {
    register,
    handleSubmit,
    formState: {
      errors: { email, password },
    },
  } = useForm({
    resolver: joiResolver(LoginFormSchema),
  });
  const { login: userLogin } = useLogin();
  const { mutate: login } = useLoginMutation();

  const onSubmit = (data) =>
    login(data, {
      onSuccess: (data) => userLogin(data.jwt),
      onError: () => notify('Something went wrong !'),
    });

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <div className="parent-div">
            <div className="example-div">
              <Card className="card-style">
                <h1 className="login-heading">Kycu</h1>

                <Form
                  style={{ margin: '30px' }}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {/* <Button variant="outline-info" size="md">
                    {' '}
                    <img
                      width="20"
                      height="20"
                      src="https://icon-library.com/images/google-g-icon/google-g-icon-12.jpg"
                    />{' '}
                    Kycu me Google
                  </Button> */}

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label-text">Email</Form.Label>
                    <Form.Control
                      placeholder="Shkruani email-in"
                      {...register('email')}
                    />
                    {email && <h6>{email.message}</h6>}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="label-text">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Shkruani password-in "
                      name="password"
                      {...register('password')}
                    />
                    {password && <h6>{password.message}</h6>}
                  </Form.Group>
                  <br />
                  <a href="#/" className="forgot-pw">
                    Keni harruaj fjalekalimin?
                  </a>

                  <Button variant="primary" type="submit" className="button">
                    Vazhdo
                  </Button>

                  <a
                    href="/register"
                    style={{ textDecoration: 'none', fontSize: '17px' }}
                  >
                    Krijo nje llogari
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

export default Login;
