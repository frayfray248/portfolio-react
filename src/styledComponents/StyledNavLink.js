import { NavLink } from "react-router-dom"
import styled from 'styled-components';

const ReactRouterDomNavLink = ({...props}) => (
<NavLink {...props}></NavLink>
)

const StyledNavLink = styled(ReactRouterDomNavLink)`

    text-align : center;
    color : white;
    padding-right: 20px;
    margin-bottom: 5px;

    &:hover {
        color: purple;
        text-align: center;
    }

`

export default StyledNavLink;