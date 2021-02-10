import Hr from '../styledComponents/StyledHr';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../styledComponents/StyledProfilePicture';
import Button from '../styledComponents/StyledButton';

const PortfolioItem = ({ title, profilePic, description, projectURL, links }) => (
    <div>
        <Row>
            <Col>
                <h1>{title}</h1>
                <Hr bgColor={'black'} />
                <Image src={profilePic} float />
                <p>{description}</p>
                <br />
                {projectURL? <Button href={projectURL}>Project Page</Button> : ''}
                {links? (links.map((link, index) => (
                    <Button id={index} href={link.url}>{link.name}</Button>
                ))) : '' }
            </Col>
        </Row>
        <Hr bgColor={'black'} />
    </div>
)

export default PortfolioItem;