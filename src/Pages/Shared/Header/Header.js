import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { FaUserCircle } from 'react-icons/fa';
import { Button, Image } from 'react-bootstrap';

const Header = () => {
    const {user,Logout}=useContext(AuthContext)

    const handleLogout=()=>{
        Logout()
        .then(() => {
          
          }).catch((error) => {
            console.error(error)
          });
    }
    return (
        <div className='mb-5 text-white' >
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand > <Link to='/' className=''>News Portal</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            < >

                {
                    user?.uid?
                   <>
                    <span> {user?.displayName} </span>
                    
                    <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
                   </> :
                   <>
                   <Link to='/login' className='px-3'>Login</Link>
                   <Link to='/register'>Register</Link>
                  </>
                }
            </>
            <Link to='/profile'>
              {
                user?.photoURL ? <Image roundedCircle src={user?.photoURL} style={{height:'35px'}}>
                    
                </Image> : <FaUserCircle></FaUserCircle>
              }
            </Link>
          </Nav>


          <div className='d-lg-none'>
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;