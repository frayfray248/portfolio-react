import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const BootstrapButton = ({...props}) => (<Button {...props}/>)

const StyledButton = styled(BootstrapButton)`
    background: black;
    border: none;
    border-radius: 10px;
    box-shadow: 5px 5px 4px black;
    &:hover {
        background: purple;
    }
`

export default StyledButton;