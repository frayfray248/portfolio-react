import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavLink from '../styledComponents/StyledNavLink';
import NavbarToggler from '../styledComponents/StyledNavbarToggler';

const PortfolioNavbar = ({className}) => {

    const textColor = "white";
    const backgroundColor = "black";
    const linkHoverColor = "purple";

    return (
        <Navbar className={`${className} justify-content-center`} variant="custom" expand="md">
            {/* BRAND */}
            <Navbar.Brand>Fraser's Portfolio</Navbar.Brand>

            {/* TOGGLER */}
            <NavbarToggler aria-controls="basic-navbar-nav" />

            {/* COLLAPSE */}

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <NavLink href="#home">Home</NavLink>
                    <NavLink href="#home">About</NavLink>
                    <NavLink href="#home">Projects</NavLink>
                    <NavLink href="#home">Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default PortfolioNavbar;