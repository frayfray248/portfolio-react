import GlobalStyle from './styledComponents/GlobalStyle';
import PortfolioPage from './styledComponents/PortfolioPage'
import PortfolioNavbar from './styledComponents/StyledPortfolioNavbar';

const App = () => {
  return (
    <PortfolioPage>
      <GlobalStyle />
      <PortfolioNavbar />
      <p>Hello World</p>
    </PortfolioPage>
  );
}

export default App;
