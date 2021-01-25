import Container from '../styledComponents/StyledContainer';
import Hr from '../styledComponents/StyledHr';

const About = () => (
    <Container >
        <h1 className="text-center"> About Fraser </h1>
        <Hr />
        <p>
            Fraser B. Macallum is a Camosun Information and Computer Systems 
            graduate seeking a career in web development. He did full-stack 
            development for Victoria companies Three Trees Technical and 
            Oculus design.
        </p>
        <p>
            Fraser is motivated by network programming. He loves the 
            problem-solving nature of connecting systems and data transfer. 
            He always has a personal Node JS Express project in the works. 
            He’s pursuing his goal of being a senior full-stack developer.
        </p>
        <p>
            Fraser’s web dev skills were put to the test in Camosun College’s 
            2020 Capstone semester. He used the latest ES6 concepts to solely 
            develop a fast and asynchronous REST API for his team’s Calendar app, 
            receiving praise from his clients.
        </p>
        <p>
            Fraser is currently finding his first steps into junior development 
            and is always interested in contributing to a challenging web app project. 
            <a href='#'> Contact</a> Fraser and create an amazing app with him.
        </p>

    </Container>
)

export default About;