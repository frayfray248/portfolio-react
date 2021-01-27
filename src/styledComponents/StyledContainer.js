import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

const BootStrapContainer = ({...props}) => (<Container {...props}/>)

const StyledContainer = styled(Container)`
    color: white;
    border: 2px solid white;
    border-radius: 10px;
`

export default StyledContainer;