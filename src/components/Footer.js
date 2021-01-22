import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Icon from '../styledComponents/StyledIcon';

const Footer = ({className}) => (
    <div className={`${className} p-3 text-center`}>
        <Row>
            <Col className={'mt-1'}> Fraser Macallum </Col>
            <Col> <Icon href='#' className='fa fa-linkedin'/> <Icon className='fa fa-github'/></Col>
        </Row>
        
    </div>
)

export default Footer;