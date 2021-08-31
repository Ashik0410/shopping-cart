import {Navbar, Container, FormControl, Dropdown, Nav} from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import {Link} from 'react-router-dom';
import './Header.css';
import './style.css';


const Header = () => {
	return(
    <div className="header">
		<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand className="main-text">
    <Link to="/"> Shopping Cart </Link>
    </Navbar.Brand>
    <Navbar.Brand className="main-text">
    <FaShoppingCart color="white" fontSize="25px"/>
    <Link to="/cart"> Cart </Link>
    </Navbar.Brand>
    <Navbar.Text className="search" >  
    <FormControl placeholder='search a product'/>
    </Navbar.Text>
    {/*<Nav>
      <Dropdown alignRight>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <FaShoppingCart color="white" fontSize="25px"/>
  </Dropdown.Toggle>

  <Dropdown.Menu style={{minWidth: 370}}>
  <span style={{padding :10, width: "100%"}}> Cart is empty </span>
  </Dropdown.Menu>
  </Dropdown>
    </Nav>*/}
    </Container>
    </Navbar>
    </div>


		);
}
export default Header;