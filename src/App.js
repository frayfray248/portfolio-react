import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GlobalStyle from './styledComponents/GlobalStyle';
import PortfolioPage from './styledComponents/StyledPortfolioPage'
import PortfolioNavbar from './styledComponents/StyledPortfolioNavbar';
import Footer from './styledComponents/StyledFooter';
import Landing from './styledComponents/StyledLanding';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <PortfolioPage>
        <GlobalStyle />

        <PortfolioNavbar />

        {/* Routes */}
        <Switch>
          <Route exact path="/"> <Landing /> </Route>
          <Route path="/about"> <About /></Route>
          <Route path="/portfolio"> <Portfolio /></Route>
          <Route path="/contact"> <Contact /></Route>
          <Route><h1 class='text-center' style={{color: 'white'}}>Oops! Page not found!</h1></Route>
        </Switch>

        <Footer />

      </PortfolioPage>
    </Router>
  );
}

export default App;
