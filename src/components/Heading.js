import React from 'react';
import { Link } from  'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar,
     Nav, 
     NavItem ,
      NavbarBrand,
     Container} from 'reactstrap';


function Heading() {
    return (
        <Navbar color="dark" dark>
            <Container>
                <NavbarBrand  href='/'>my Term</NavbarBrand>
                 <Nav>
                       <NavItem>
                           <Link className="btn btn-primary" to="/add">Add User</Link>
                       </NavItem>
                 </Nav> 
            </Container>
        </Navbar>
    )
}

export default Heading
