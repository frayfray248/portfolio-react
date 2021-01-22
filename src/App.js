import GlobalStyle from './styledComponents/GlobalStyle';
import PortfolioPage from './styledComponents/StyledPortfolioPage'
import PortfolioNavbar from './styledComponents/StyledPortfolioNavbar';
import Footer from './styledComponents/StyledFooter';
import Landing from './styledComponents/StyledLanding';

const App = () => {
  return (
    <PortfolioPage>
      <GlobalStyle />
        <PortfolioNavbar />
          <Landing />
        <Footer />
    </PortfolioPage>
  );
}

export default App;
