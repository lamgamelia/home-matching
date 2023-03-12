const Route = ReactRouterDOM.Route;
const BrowserRouter = ReactRouterDOM.BrowserRouter;
const Routes = ReactRouterDOM.Routes;
const HashRouter = ReactRouterDOM.HashRouter;
const Link = ReactRouterDOM.Link;
const NavLink = ReactRouterDOM.NavLink;
const Redirect = ReactRouterDOM.Redirect;

import {Home} from "./pages/Home.js";
import {Designers} from "./pages/Designers.js";
import {Gallery} from "./pages/Gallery.js";
import {Contact} from "./pages/Contact.js";
import {Match} from "./pages/Match.js";
import {Login} from "./pages/Login.js";

  class Homey extends React.Component {
    constructor() {
      super();
      this.state = { designPortfolio: [], home: true};
    }
  
    componentDidMount() {
      this.loadData();
    }
    
    setHome(boolean)
    {
      this.setState({home: boolean});
    }

    loadData() {
      setTimeout(() => {
        this.setState({ designPortfolio: [] }); //to be replaced with database
      }, 500);
    }

    render() {
      return (
        <div className = "container-fluid p-0">
          <div className="container-fluid item-align-center p-0 sticky-top" >
            <div className="row g-0 align-items-center" style={{backgroundColor: "rgba(255,255,255)"}}>
              <div className="col-3">
                <img className="image-rounded p-2"  width="80px" height="80px" id="homeyLogo" src="/homey.png" alt="Homey" />
              </div>
              <div className="col-6">
                <ul className="nav justify-content-center text-center">
                  <li className="h4 nav-item">
                    <NavLink to="/home" className="nav-link" style={{color: "rgb(0,0,0)"}} onClick={() => this.setHome(false)}>
                      Home
                    </NavLink>
                  </li>
                  <li className="h4 nav-item">
                    <Link to="/designers" className="nav-link" style={{color: "rgb(0,0,0)"}} onClick={() => this.setHome(false)}>
                      Our Designer
                    </Link>
                  </li>
                  <li className="h4 nav-item">
                    <Link to="/gallery" className="nav-link" style={{color: "rgb(0,0,0)"}} onClick={() => this.setHome(false)}>
                      Gallery
                    </Link>
                  </li>
                  <li className="h4 nav-item">
                    <Link to="/contacts" className="nav-link" style={{color: "rgb(0,0,0)"}} onClick={() => this.setHome(false)}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className ="col-3">
                <ul className="nav justify-content-center text-center">
                    <li className="h6 nav-item">
                      <Link to="/matchDesigner" className="nav-link" style={{color: "rgb(0,0,0)"}} onClick={() => this.setHome(false)}>
                        Find My Designer!
                      </Link>
                    </li>
                    <li className="h6 nav-item">
                      <Link to="/login" className="nav-link" style={{color: "rgb(0,0,0)"}} onClick={() => this.setHome(false)}>
                        Login/ Sign Up
                      </Link>
                    </li>
                </ul>
              </div>
            </div>
          </div>
          {this.state.home === true && <Home/>}
         </div>
      );
    }
  }

function App() {
  return (
  <HashRouter>
    <Route path="/" component={Homey}/>
    <Route path="/home" component={Home}/>
    <Route path="/designers" component={Designers}/>
    <Route path="/contacts" component={Contact}/>
    <Route path="/gallery" component={Gallery}/>
    <Route path="/matchDesigner" component={Match}/>
    <Route path="/login" component={Login}/>
  </HashRouter>);
}

const app = <App/>; 

ReactDOM.render(app, document.getElementById('contents'));

