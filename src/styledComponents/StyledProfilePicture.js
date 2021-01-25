import styled from 'styled-components';
import Image from 'react-bootstrap/Image';

const ProfilePicture = ({...props}) => (<Image {...props}/>)

const StyledProfilePicture = styled(ProfilePicture)`
    max-width: 250px;
    max-height: 250px;  
    margin : 10px;
    border: 4px solid white;
    border-radius: 10px;
    ${props => props.float ? 'float:left' : ''}
`

export default StyledProfilePicture;