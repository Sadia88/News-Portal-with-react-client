
import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error,setError]=useState('')
    const [accept,setAccept]=useState(false)
const {CreateUser,updateUserProfile,verifyEmail}=useContext(AuthContext)

    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target
        const email=form.email.value
        const password=form.password.value
        const name=form.name.value
        const photoURL=form.photoURL.value
        console.log(name,email,password)

        CreateUser(email,password)
        .then((result) => {
            // Signed in 
            const user = result.user;
           console.log(user)
           form.reset()
           setError('')
           handleUpdateUserProfile(name,photoURL)
           handleVerification()
           toast.success('Please! Verify your Email Address set to your Email')
           
          })
          .catch((error) => {
            
            const errorMessage = error.message;
        //   console.error(errorMessage)
        setError(errorMessage)
          });

    }

const handleUpdateUserProfile=(name,photoURL)=>{
const profile={
    displayName: name, photoURL: photoURL

}


    updateUserProfile(profile)
    .then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
      console.error(error)
      });
   

}

const handleVerification=()=>{

    verifyEmail()
    .then(() => {
        
      });
    
}
   const handleAcceptTerms=event=>{
    setAccept(event.target.checked)
   }
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        onClick={handleAcceptTerms}
         type="checkbox" 
         label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
      </Form.Group>
        <Button variant="primary" type="submit" disabled={!accept}>
            Register
        </Button>
        <Form.Text className="text-danger">
            {error}
        </Form.Text>
    </Form>
    );
};

export default Register;