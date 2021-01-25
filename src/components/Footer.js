import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Icon from '../styledComponents/StyledIcon';

const Footer = ({ className }) => (
    <div className={`${className} p-3 text-center`}>
        <Row>
            <Col className={'mt-1'}> Fraser Macallum </Col>
            <Col>
                <Icon href='https://www.linkedin.com/in/fraser-macallum-752b2716b' className='fa fa-linkedin' />
                <Icon href='https://github.com/frayfray248' className='fa fa-github' />
            </Col>
        </Row>

    </div>
)

export default Footer;