import Container from '../styledComponents/StyledContainer';
import Hr from '../styledComponents/StyledHr';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Contact = () => (
    <Container>
        <Row>
            <Col className="text-center">
                <h1>Contact</h1>
                
            </Col>
        </Row>
        <Hr bgColor={'black'} />
        <Row>
            <Col>
                Thank you for reading my portfolio.
                If you would like more information about me,
                please follow the links on the right or send me
                an email.
            </Col>
            <Col>
                <i class="bi bi-envelope-fill"></i> <a href="mailto:fmacallum@shaw.ca">fmacallum@shaw.ca</a><br />
                <i class="fa fa-linkedin"></i> <a href="https://www.linkedin.com/in/fraser-macallum-752b2716b" >https://www.linkedin.com/in/fraser-macallum-752b2716b</a><br />
                <i class="fa fa-github"></i> <a href="https://github.com/frayfray248"> https://github.com/frayfray248 </a>
            </Col>
        </Row>
        <Hr bgColor={'black'} />

    </Container>
)

export default Contact;