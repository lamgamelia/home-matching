const Route = ReactRouterDOM.Route;
const BrowserRouter = ReactRouterDOM.BrowserRouter;
const Routes = ReactRouterDOM.Routes;
const HashRouter = ReactRouterDOM.HashRouter;
const Link = ReactRouterDOM.Link;
const NavLink = ReactRouterDOM.NavLink;
const Redirect = ReactRouterDOM.Redirect;
const Switch = ReactRouterDOM.Switch;

import {Home} from "./pages/Home.jsx";
import {Designers} from "./pages/Designers.jsx";
import {Gallery} from "./pages/Gallery.jsx";
import {Contact} from "./pages/Contact.jsx";
import {Match} from "./pages/Match.jsx";
import {Login} from "./pages/Login.jsx";
import {Register} from "./pages/Register.jsx";


  class Homey extends React.Component {
    constructor() {
      super();
      this.state = { designPortfolio: []};
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
      const currentLocation = window.location.pathname;
      const isHome = currentLocation === "/";
      return (
        <div className = "container-fluid p-0 sticky-top">
          <div className="container-fluid item-align-center p-0" style={{position: "sticky", top: "0", zIndex: 100 }}>
            <div className="row no-gutters align-items-center" style={{backgroundColor: "rgba(255,255,255)"}}>
              <div className="col-3">
                <img className="image-rounded p-2"  width="80px" height="80px" id="homeyLogo" src="/homey.png" alt="Homey" />
              </div>
              <div className="col-6">
                <ul className="nav justify-content-center text-center">
                  <li className="h4 nav-item">
                    <NavLink to="/home" className="nav-link" style={{color: "rgb(0,0,0)"}}>
                      Home
                    </NavLink>
                  </li>
                  <li className="h4 nav-item">
                    <Link to="/designers" className="nav-link" style={{color: "rgb(0,0,0)"}}>
                      Our Designer
                    </Link>
                  </li>
                  <li className="h4 nav-item">
                    <Link to="/gallery" className="nav-link" style={{color: "rgb(0,0,0)"}} >
                      Gallery
                    </Link>
                  </li>
                  <li className="h4 nav-item">
                    <Link to="/contacts" className="nav-link" style={{color: "rgb(0,0,0)"}}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className ="col-3">
                <ul className="nav justify-content-center text-center">
                    <li className="h6 nav-item">
                      <Link to="/matchDesigner" className="nav-link" style={{color: "rgb(0,0,0)"}}>
                        Find My Designer!
                      </Link>
                    </li>
                    <li className="h6 nav-item">
                      <Link to="/login" className="nav-link" style={{color: "rgb(0,0,0)"}}>
                        Login/ Sign Up
                      </Link>
                    </li>
                </ul>
              </div>
            </div>
          </div>
          {isHome && <Home />}
         </div>
      );
    }
  }

function App() {
  return (
  <BrowserRouter>
    <Route path="/" component={Homey}/>
    <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/designers" component={Designers}/>
      <Route path="/contacts" component={Contact}/>
      <Route path="/gallery" component={Gallery}/>
      <Route path="/matchDesigner" component={Match}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </Switch>
  </BrowserRouter>);
}

const app = <App/>; 

ReactDOM.render(app, document.getElementById('contents'));

