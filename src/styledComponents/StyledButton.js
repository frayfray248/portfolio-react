import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const BootstrapButton = ({...props}) => (<Button {...props}/>)

const StyledButton = styled(BootstrapButton)`
    background: black;
    border: none;
    border-radius: 10px;

    &:hover {
        background: purple;
    }
`

export default StyledButton;