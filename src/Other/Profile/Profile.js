import React, { useContext, useReducer, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const {user}=useContext(AuthContext)

    const [name,setName]=useState(user.displayName)
    const photoURL=useRef(user?.photoURL)


    const handleSubmit=event=>{
        event.preventDefault()
        console.log(photoURL.current.value)
    }
    const handleNameChange=(event)=>{
        setName(event.target.value)
    }
    return (
        <Form  onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control readOnly defaultValue={user?.email} name='email' type="email" placeholder="Enter email" />
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Name</Form.Label>
          <Form.Control onChange={handleNameChange} name='text' defaultValue={name} type='text' placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control ref={photoURL} defaultValue={user?.photoURL} name="photoURL" type="text" placeholder="Phot URL" />
        </Form.Group>
       
        <Button variant="primary" type="submit">
          LogIn
        </Button>
        <br />
       
      </Form>
    );
};

export default Profile;