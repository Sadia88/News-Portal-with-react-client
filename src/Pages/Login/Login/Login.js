import { Button } from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
const [error,setError]=useState('')
    const navigate=useNavigate()
    const {SignIn,setLoader} =useContext(AuthContext)

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target
        const email=form.email.value
        const password=form.password.value
        console.log(email,password)

        SignIn(email,password)
        .then((result) => {
            // Signed in 
            const user = result.user;
           console.log(user)
           form.reset()
           setError('')
       if(user.emailVerified){
        navigate(from, { replace: true });
       }
        else
        {
            toast.error('Your email is not verified.Please verify?')
        }
          })

          .catch(error => {
            console.error(error)
            setError(error.message);
        })
        .finally(() => {
            setLoader(false);
        })
    }
    return (
        <div>
             <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>
     
     
      <Button variant="primary" type="submit">
        LogIn
      </Button>
      <br />
      <Form.Text className="text-danger">
          {error}
        </Form.Text>
    </Form>
        </div>
    );
};

export default Login;