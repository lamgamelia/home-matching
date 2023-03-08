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
        <div className = "container-fluid p-0">
          <div className="container-fluid item-align-center p-0 sticky-top" >
            <div className="row g-0 align-items-center" style={{backgroundColor: "rgba(255,255,255)"}}>
              <div className="col-3">
                <img className="image-rounded p-2"  width="80px" height="80px" id="homeyLogo" src="/homey.png" alt="Homey" />
              </div>
              <div className="col-6">
                <ul className="nav justify-content-center text-center">
                  <li className="h4 nav-item">
                    <Link to="/designers" className="nav-link" style={{color: "rgb(0,0,0)"}}>
                      Our Designer
                    </Link>
                  </li>
                  <li className="h4 nav-item">
                    <Link to="/gallery" className="nav-link" style={{color: "rgb(0,0,0)"}}>
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
          <div className= "container-fluid background-image p-5" style={{backgroundImage: "url(/home-design2.jpg)", backgroundSize: "cover", backgroundPosition: "center",}}>
            <div className='container align-items-center p-0' style={{backgroundColor: "rgba(255, 255, 255, 0.0)", width:'100%'}}>
              <div className='row justify-content-md-center align-items-center text-center p-3 m-3' style={{backgroundColor: "rgba(255, 255, 255, 0.7)"}}>
                <h1 style={{color: "rgb(0,0,0)"}}>Matching Homeowner with Interior Designer</h1>
              </div>
              <div className='row' style={{height:"20%"}}></div>
              <div className='row' style={{width:'100%'}}>
                <div className="col-md-2" ></div>
                <div className="col-md-4 p-2 text-center">
                  <div className="p-2 m-2" style={{backgroundColor: "rgba(255, 255, 255, 0.7)"}}>
                    <h2>
                      Are you a designer?  
                    </h2>
                    <br></br>
                    <h5 className="font-weight-bold">
                      Register with us to showcase your projects to home owners today!
                    </h5>
                    <br></br>
                    <button>Register</button>
                  </div>
                </div>
                <div className="col-md-4 p-2 text-center">
                  <div className="p-2 m-2" style={{backgroundColor: "rgba(255, 255, 255, 0.7)"}}>
                    <h2>
                      Are you a home owner?  
                    </h2>
                    <br></br>
                    <h5 className="font-weight-bold">
                      Sign up with us to get matched with dedicated interior designers for free today!
                    </h5>
                    <br></br>
                    <button className='m-2'>Register</button>
                    <button className='m-2'>View Gallery</button>
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
          </div>
          <div className="container-fluid item-align-center p-0">
            <div className="row g-0 item-align-center p-5">
              <h1 className="justify-content-center text-center">How Homey Works</h1>
            </div>
            <div className="row g-0 justify-content-md-center item-align-center p-5">
              <div className="col-md-2 p-2 m-2 text-center" style={{backgroundColor: "#e6f7ff", width:'200px', border:'solid 3px'}}>
                <h2>
                  Step 1  
                </h2>
                <h6 className="font-weight-bold">
                  Enter your home details and pick rooms you like to discover your unique design style
                </h6>
              </div>
              <div className="col-md-2 p-2 m-2 text-center" style={{backgroundColor: "#e6f7ff", width:'200px', border:'solid 3px'}}>
                <h2>
                  Step 2  
                </h2>
                <h6 className="font-weight-bold">
                  Be matched with up to 5 interior design firms based on your requirements instantly
                </h6>
              </div>
              <div className="col-md-2 p-2 m-2 text-center" style={{backgroundColor: "#e6f7ff", width:'200px', border:'solid 3px'}}>
                <h2>
                  Step 3  
                </h2>
                <h6 className="font-weight-bold">
                  Get 1-on-1 help from a real human with your home renovation journey and to confirm your details
                </h6>
              </div>
              <div className="col-md-2 p-2 m-2 text-center" style={{backgroundColor: "#e6f7ff", width:'200px', border:'solid 3px'}}>
                <h2>
                  Step 4  
                </h2>
                <h6 className="font-weight-bold">
                  Meet your matched interior design firms for a no-obligation, no-strings attached consultation
                </h6>
              </div>
              <div className="col-md-2 p-2 m-2 text-center" style={{backgroundColor: "#e6f7ff", width:'200px', border:'solid 3px'}}>
                <h2>
                  Step 5  
                </h2>
                <h6 className="font-weight-bold">
                  Engage your perfect interior designer to make your dream home a reality
                </h6>
              </div>
              
            </div>
            <br></br>
          </div>
          <div className="container-fluid item-align-center p-0" style={{backgroundColor: "#e6f7ff"}}>
            <div id='test' className="container item-align-center p-5">
              <h1 className="justify-content-center text-center p-5">What Our Users Say</h1>
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="home-design.jpg" alt="First slide"></img>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="home-design2.jpg" alt="Second slide"></img>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="home-design.jpg" alt="Third slide"></img>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
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

