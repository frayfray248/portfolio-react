import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavLink from '../styledComponents/StyledNavLink';
import NavbarToggler from '../styledComponents/StyledNavbarToggler';

const PortfolioNavbar = ({className}) => {

    return (
        <Navbar className={`${className} justify-content-center`} variant="custom" expand="md">
            {/* BRAND */}
            <Navbar.Brand>Fraser's Portfolio</Navbar.Brand>

            {/* TOGGLER */}
            <NavbarToggler aria-controls="basic-navbar-nav" />

            {/* COLLAPSE */}

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <NavLink exact activeClassName="active" to="/"><i className="bi bi-house-door p-1"></i>Home</NavLink>
                    <NavLink exact activeClassName="active" to="/about"><i className="bi bi-file-earmark-person p-1"></i>About</NavLink>
                    <NavLink exact activeClassName="active" to="/portfolio"><i className="bi bi-code-square p-1"></i>Portfolio</NavLink>
                    <NavLink exact activeClassName="active" to="/referrals"><i className="bi bi-person-check p-1"></i>Referrals</NavLink>
                    <NavLink exact activeClassName="active" to="/contact"><i className="bi bi-telephone p-1"></i>Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default PortfolioNavbar;