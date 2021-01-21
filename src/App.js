import GlobalStyle from './styledComponents/GlobalStyle';
import PortfolioPage from './styledComponents/StyledPortfolioPage'
import PortfolioNavbar from './styledComponents/StyledPortfolioNavbar';
import Footer from './styledComponents/StyledFooter';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <PortfolioPage>
      <GlobalStyle />
        <PortfolioNavbar />
        <p>Hello World</p>
        <Footer />
    </PortfolioPage>
  );
}

export default App;
