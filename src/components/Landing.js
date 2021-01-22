import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import profilePic from '../res/profilePic.png';
import ProfilePicture from '../styledComponents/StyledProfilePicture';
import Hr from '../styledComponents/StyledHr';

const Landing = ({ className }) => (
    <div className={`${className}`}>
        <Container >
            <Row className="justify-content-sm-center">
                <Col md="auto">
                    <ProfilePicture className='my-box-shadow' src={profilePic} />
                </Col>
                <Col md="auto" className='d-flex flex-column' 
                style={{
                    textShadow: '5px 5px 4px black',
                    justifyContent : 'space-between'
                    }}>
                    <Hr className='my-box-shadow'/>
                    <h1>FRASER B. MACALLUM</h1>
                    <ul>
                        <li>Node JS Web developer</li>
                        <li>Technical writer</li>
                        <li>Self-Starter</li>
                    </ul>
                    <Hr className='my-box-shadow'/>
                </Col>
            </Row>
        </Container>
    </div>
)

export default Landing;