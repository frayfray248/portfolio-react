import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import profilePic from '../res/profilePic.png';
import ProfilePicture from '../styledComponents/StyledProfilePicture';

const Landing = ({ className }) => (
    <div className={`${className}`}>
        <Container >
            <Row className="justify-content-sm-center">
                <Col md="auto">
                    <ProfilePicture src={profilePic} />
                </Col>
                <Col md="auto">
                    <h1>FRASER B. MACALLUM</h1>
                    <ul>
                        <li>Web developer</li>
                        <li>Technical writer</li>
                        <li>Self-Starter</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
)

export default Landing;