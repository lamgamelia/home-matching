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
            <img id="homeyLogo" src="/homey.png" alt="Homey"/>
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
          <div className = "getMatched">
            <a
                onClick={() => this.setSelector(2)}
                className={this.state.selector === 2 ? "active" : ""}
            >
                Get Matched
            </a>
          </div>
          <div className = "login">
            <a
                onClick={() => this.setSelector(3)}
                className={this.state.selector === 3 ? "active" : ""}
            >
                Login/ Sign Up
            </a>
          </div>
          <div>
            {this.state.selector === 1 && (<Designers portfolio={this.state.designPortfolio}/>)}
            {this.state.selector === 2 && (<GetMatched />)}
            {this.state.selector === 3 && (<Login />)}
          </div>
          <br></br>
          <br></br>
          <div style={{width: "100%"}}><img id="backgroundHome" src="/home-design.jpg" alt="Home"/></div>
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