

const Route = ReactRouterDOM.Route;
const BrowserRouter = ReactRouterDOM.BrowserRouter;
const Routes = ReactRouterDOM.Routes;
const HashRouter = ReactRouterDOM.HashRouter;
const Link = ReactRouterDOM.Link;

import {Designers} from "./pages/Designers.js";
import {Gallery} from "./pages/Gallery.js";
import {Contact} from "./pages/Contact.js";
import {Match} from "./pages/Match.js";
import {Login} from "./pages/Login.js";

  class Homey extends React.Component {
    constructor() {
      super();
      this.state = { designPortfolio: [], selector: 0};
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
        <div className = "container-fluid p-0 m-0">
          <div className="row align-items-center">
            <div className="col-md-3">
              <img className="image-rounded p-2"  width="80px" height="80px" id="homeyLogo" src="/homey.png" alt="Homey" />
            </div>
            <div className="col-md-6">
              <ul className="nav justify-content-center text-center">
                <li className="h4 nav-item">
                  <Link to="/designers" className="nav-link" style={{color: "rgb(102, 102, 255)"}}>
                    Our Designer
                  </Link>
                </li>
                <li className="h4 nav-item">
                  <Link to="/gallery" className="nav-link" style={{color: "rgb(102, 102, 255)"}}>
                    Gallery
                  </Link>
                </li>
                <li className="h4 nav-item">
                  <Link to="/contacts" className="nav-link" style={{color: "rgb(102, 102, 255)"}}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className ="col-md-3">
              <ul className="nav justify-content-center text-center">
                  <li className="h6 nav-item">
                    <Link to="/matchDesigner" className="nav-link" style={{color: "rgb(102, 102, 255)"}}>
                      Find My Designer!
                    </Link>
                  </li>
                  <li className="h6 nav-item">
                    <Link to="/login" className="nav-link" style={{color: "rgb(102, 102, 255)"}}>
                      Login/ Sign Up
                    </Link>
                  </li>
              </ul>
            </div>
          </div>
          <div class = "background-image" style={{backgroundImage: "url(/home-design2.jpg)", height: "500px", backgroundSize: "cover", backgroundPosition: "center",}}>
            <div class='card d-flex  align-items-center' style={{backgroundColor: "rgba(255, 255, 255, 0.0)", height: "100%", width:'100%'}}>
              <div class='card p-3 m-3' style={{backgroundColor: "rgba(255, 255, 255, 0.5)"}}><h1 style={{color: "rgb(0,0,0)"}}>Matching Homeowner with Interior Designer</h1></div>
              <div class='card' style={{backgroundColor: "rgba(255, 255, 255, 0.3)", height: "100px", width:'100px'}}>Test</div>
            </div>
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
    <Route path="/matchDesigner" component={Match}/>
    <Route path="/login" component={Login}/>
  </HashRouter>);
}

const app = <App/>; 

ReactDOM.render(app, document.getElementById('contents'));

