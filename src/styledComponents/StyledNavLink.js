import Link from 'react-bootstrap/NavLink';
import styled from 'styled-components';

const StyledNavLink = styled(Link)`

    text-align : center;
    color : white;

    &:hover {
        color: purple;
        text-align: center;
    }

`

export default StyledNavLink;