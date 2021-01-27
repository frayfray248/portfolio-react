import Container from '../styledComponents/StyledContainer';
import Hr from '../styledComponents/StyledHr';
import Button from '../styledComponents/StyledButton';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const About = () => (
    <Container >
        <Row>
            <Col>
                <h1 className="text-center"> About Fraser </h1>
                <Hr bgColor={'black'}/>
                <p>
                    Fraser is a Camosun Information and Computer Systems
                    graduate seeking a career in web development. He finished
                    his diploma with an 8.6 GPA and did full-stack
                    development for Victoria companies Three Trees Technical and
                    Oculus design.
        </p>
                <p>
                    He is motivated by back end web development and loves the
                    problem-solving nature of connecting systems and data transfer.
                    He always has a personal Node JS Express project in the works.
                    His career goal is to become a senior full-stack developer.
        </p>
                <p>
                    His web development skills were put to the test in Camosun College’s
                    2020 Capstone semester. He used the latest ES6 concepts to solely
                    develop a fast and asynchronous REST API for his team’s Calendar app,
                    receiving praise from his clients.
        </p>
                <p>
                    Fraser is currently finding his first steps into junior web development
                    and is always interested in contributing to a challenging web app project.
            <a href='contact'> Contact</a> Fraser and create an amazing app with him.
        </p>
            </Col>
        </Row>
        <Row>
            <Col className='text-right'>
            <Button href='portfolio'>Portfolio</Button>
            </Col>
        </Row>
        <Hr bgColor={'black'}/>


    </Container>
)

export default About;