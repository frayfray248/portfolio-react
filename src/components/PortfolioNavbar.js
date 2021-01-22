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
                    <NavLink href="/"><i class="bi bi-house-door"></i> Home</NavLink>
                    <NavLink href="/about"><i class="bi bi-file-earmark-person"></i> About</NavLink>
                    <NavLink href="/projects"><i class="bi bi-code-square"></i> Projects</NavLink>
                    <NavLink href="/contact"><i class="bi bi-telephone"></i> Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default PortfolioNavbar;