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
                    <NavLink exact activeClassName="active" to="/"><i class="bi bi-house-door p-1"></i>Home</NavLink>
                    <NavLink exact activeClassName="active" to="/about"><i class="bi bi-file-earmark-person p-1"></i>About</NavLink>
                    <NavLink exact activeClassName="active" to="/portfolio"><i class="bi bi-code-square p-1"></i>Portfolio</NavLink>
                    <NavLink exact activeClassName="active" to="/contact"><i class="bi bi-telephone p-1"></i>Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default PortfolioNavbar;