import React, { useContext } from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { BsGoogle,BsGithub ,BsFacebook,BsTwitter,BsWhatsapp,BsInstagram} from "react-icons/bs";
import Carousel from 'react-bootstrap/Carousel';
import BrendCarousel from './BrendCarousel';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";



const RightSideNav = () => {
 const {providerLogin}=useContext(AuthContext)
 const googleProvider = new GoogleAuthProvider();
 const handleGoogleSignIn=()=>{
    providerLogin(googleProvider)
    .then((result) => {
        const user = result.user;  
        console.log(user)
        
    })
    .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage)
    })
 }
    
    return (
        <div>
            <ButtonGroup vertical>
            <Button variant="outline-primary" onClick={handleGoogleSignIn}><BsGoogle></BsGoogle> Login with Google</Button><br />
            <Button variant="outline-dark"><BsGithub></BsGithub>Login with Github</Button>
      
    </ButtonGroup>

    <div className='mt-5'> 
        <h5>Find us on</h5>
    <ListGroup>
      <ListGroup.Item className='mb-2'><BsFacebook></BsFacebook> Facebook</ListGroup.Item>
      <ListGroup.Item className='mb-2'><BsTwitter></BsTwitter> Twitter</ListGroup.Item>
      <ListGroup.Item className='mb-2'><BsWhatsapp></BsWhatsapp> Whatsapp</ListGroup.Item>
      <ListGroup.Item className='mb-2'><BsInstagram></BsInstagram> Instagram</ListGroup.Item>
      
    </ListGroup>
    </div>
    <BrendCarousel></BrendCarousel>
        </div>
    );
};

export default RightSideNav;