import Container from '../styledComponents/StyledContainer';
import Hr from '../styledComponents/StyledHr';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../styledComponents/StyledProfilePicture';
import ThreeTreesCalendarProfilePic from '../res/ThreeTreesCalendarProfilePic.png';
import ThreeTreesDashboard from '../res/ThreeTreesDashboard.png';
import ThreeTreesEventsUIExample from '../res/ThreeTreesEventsUIExample.png';
import PortfolioItem from '../components/PortfolioItem';

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
                            name : 'Capstone Page',
                            url : 'http://capstone.camosun.ca/archived-capstone/June2020/public/ICS.php'
                        }
                    ]}
                />
            </Col>
        </Row>
    </Container>
)

export default Portfolio;