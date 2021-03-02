import Container from '../styledComponents/StyledContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ThreeTreesCalendarProfilePic from '../res/ThreeTreesCalendarProfilePic.png';
import RealmCraftProfilePic from '../res/RealmCraftRPGProfilePic.png';
import PortfolioItem from '../components/PortfolioItem';
import Hr from '../styledComponents/StyledHr';
import Button from '../styledComponents/StyledButton';

const Portfolio = () => (
    <Container>
        <Row>
            <Col>
                <PortfolioItem
                    title="Three Trees Calendar"
                    profilePic={ThreeTreesCalendarProfilePic}
                    description=
                    {`
                        The Three Trees Calendar is a class/workshop manager and calendar for WordPress.
                        Its purposal was submitted by Victoria companies Three Trees Technical and Oculus Design to
                        the Camosun College 2020 Capstone semester. Fraser worked on it in an Agile team as full-stack developer and technical writer.
                        He solely built its Node JS Express REST API as well wrote several of its documentation such as the charter, user manual, and team bios.
                        His team successfully presented the project results to the Camosun College 2020 Capstone Simposium.
                    `}
                    projectURL={'http://capstone.camosun.ca/archived-capstone/June2020/public/TeamPages/Team%20Three%20Trees.php'}
                    links={[
                        {
                            name: 'Capstone Page',
                            url: 'http://capstone.camosun.ca/archived-capstone/June2020/public/ICS.php'
                        }
                    ]}
                />
                <PortfolioItem
                    title="RealmCraft RPG"
                    profilePic={RealmCraftProfilePic}
                    description=
                    {`
                    RealmCraft is the name given to a personal project Fraser started in the Summer of 2019. It is a tile-based fantasy RPG featuring tile/entity collisions,
                    enemies that follow and attack the player, and an inventory system.
                    He made this project to practice his Java skills and give him something to do between ICS semesters. This project's programming is completely object-oriented with an organized class structure (e.g. 
                    an abstract Entity class has inherited Creature, Player, and Static Entity classes). It features a game engine built from scratch with
                    game states, game loop, and tick/render methods. Fraser created all the assets with Gimp and the pixel art knowledge he had at the time. RealmCraft remains an unfinished but 
                    one of the largest personal projects Fraser has done.
                    `}
                    links={[
                        {
                            name: 'Github Repo',
                            url: 'https://github.com/frayfray248/Fantasy-RPG-RealmCraft-Java'
                        }
                    ]}
                />
                <h1>Personal Project Demonstrations</h1>
                <Hr bgColor={'black'} />
                    <h3>Socket Chat</h3>
                    <p>A simple chat application that allows users to pick a username and post messages to a public chat board.</p>
                    <Button href='https://github.com/frayfray248/socket-chat-app'>Repo</Button><Button href='https://frayfraychat.herokuapp.com/'>Open App</Button>
                    <br /><br />
                    <h3>Users System API</h3>
                    <p>A REST API that creates user accounts, signs in users using JWT tokens, and deletes users.</p>
                    <Button href='https://github.com/frayfray248/users-system-api'>Repo</Button>
                    <Button href='https://frayfray-users-system-api.herokuapp.com/api-docs/'>API Docs</Button>
                    <br /><br />
                <Hr bgColor={'black'} />
            </Col>
        </Row>
    </Container>
)

export default Portfolio;