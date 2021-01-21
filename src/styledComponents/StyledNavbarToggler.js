import Toggler from 'react-bootstrap/NavbarToggle';
import styled from 'styled-components';

const TogglerComponent = ({className}) => (
    <Toggler className={className}/>
)

const StyledNavbarToggler = styled(TogglerComponent)`

    border-color: white;

    &:hover {
        border-color: purple;
    };

    & .navbar-toggler-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
    };
        
`

export default StyledNavbarToggler;