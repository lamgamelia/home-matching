const Route = ReactRouterDOM.Route;
const BrowserRouter = ReactRouterDOM.BrowserRouter;
const Routes = ReactRouterDOM.Routes;
const HashRouter = ReactRouterDOM.HashRouter;
const Link = ReactRouterDOM.Link;

import {Designers} from "./pages/Designers.js";
import {Gallery} from "./pages/Gallery.js";
import {Contact} from "./pages/Contact.js";

  class Homey extends React.Component {
    constructor() {
      super();
      this.state = { designPortfolio: [], selector: 1};
    }
  
    componentDidMount() {
      this.loadData();
    }
  
    loadData() {
      setTimeout(() => {
        this.setState({ designPortfolio: [] }); //to be replaced with database
      }, 500);
    }

    render() {
      return (
        <div className = "home">
          <div className = "logo">
            <h1>Homey</h1>
          </div>
          <div className ="navPane">
            <Link to="/designers">
              Our Designer
            </Link>
            <Link to="/gallery">
              Gallery
            </Link>
            <Link to="/contacts">
              Contact
            </Link>
          </div>
        </div>
      );
    }
  }

function App() {
  return (
  <HashRouter>
    <Route path="/" component={Homey}/>
    <Route path="/designers" component={Designers}/>
    <Route path="/contacts" component={Contact}/>
    <Route path="/gallery" component={Gallery}/>
  </HashRouter>);
}

const app = <App/>; 

  ReactDOM.render(app, document.getElementById('contents'));

  