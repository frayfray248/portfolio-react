import Container from '../styledComponents/StyledContainer';
import Hr from '../styledComponents/StyledHr';
import Button from '../styledComponents/StyledButton';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Referrals = () => (
    <Container>
        <h1 className="text-center">Referrals</h1>
        <Hr bgColor={'black'} />
        <p>
            Below is a list of people assocated with Fraser 
            as a client, team member, or instructor. Please
            <a href='contact'> Contact</a> Fraser for a reference request.
        </p>
        <Row>
            <Col>
                <Hr bgColor={'black'} />
                <h3>Ben Leather</h3>
                <p>Three Trees Technical Inc. Owner.</p>
                <p>Client for Fraser's Capstone Team.</p>
                <p>Victoria, BC.</p>
                <Button href="https://www.linkedin.com/in/benleather/" className='fa fa-linkedin'></Button><span> </span>
                <Button href="https://3treestech.com/">Company Website</Button>
            </Col>
        </Row>
        <Row>
            <Col>
                <Hr bgColor={'black'} />
                <h3>Jacob Parent</h3>
                <p>Three Threes Calendar DBA, developer, and leader.</p>
                <p>Fraser's Agile teammate during the Camosun College 2020 Capstone semester</p>
                <p>Victoria, BC.</p>
                <Button href="https://www.linkedin.com/in/jacob-parent-357126170/" className='fa fa-linkedin'></Button>
            </Col>
        </Row>
        <Row>
            <Col>
                <Hr bgColor={'black'} />
                <h3>Doug Greening</h3>
                <p>Camosun College Instructor, Computer Science Department.</p>
                <p>Fraser's instructor in the Camosun College's ICS program.</p>
                <p>Victoria, BC.</p>
                <Hr bgColor={'black'} />
            </Col>
        </Row>

    </Container>

)

export default Referrals;