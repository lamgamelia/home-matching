const Link = ReactRouterDOM.Link;
const NavLink = ReactRouterDOM.NavLink;
const { useContext } = React;

import { AuthContext } from "../context/auth.js";

function Display(props){
    const review = props.review;
    const keyStar = [1,2,3,4,5];
    const starArray = keyStar.slice(0,review.rating).map(i => <i key={i} className="bi bi-star-fill text-warning"></i>);
    console.log(review);
    return(
        <div className="col-md-4 m-0 d-flex flex-column align-items-center" style={{paddingTop: "30px", paddingBottom: "30px"}} >
            <div>
                <img className="image-rounded p-2" src={review.reviewImage || "/homey.png"}/>
            </div>
            <h6>{review.designer}</h6>
            <div>
                {starArray}          
            </div>
            <p> {review.reviewMessage} </p>
            <p> {review.name} </p>   
        </div>
    )
}

function Welcome(props){
    const {user} = useContext(AuthContext)
    return user ? (
        <div className='container align-items-center p-0' style={{backgroundColor: "rgba(255, 255, 255, 0.0)", width:'100%'}}>
            <div className='row g-0 no-gutters justify-content-md-center align-items-center text-center p-3 m-3' style={{backgroundColor: "rgba(255, 255, 255, 0.7)"}}>
            <h1 style={{color: "rgb(0,0,0)"}}>Welcome to homey, {user.username}!</h1>
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
                <h5 className="font-weight-bold" >
                    Start showcasing your projects to home owners today!
                </h5>
                <br></br>
                <Link to="/" className='m-2' ><button style={{cursor:"pointer"}}>Edit My Profile</button></Link>
                </div>
            </div>
            <div className="col-md-4 p-2 text-center">
                <div className="p-2 m-2" style={{backgroundColor: "rgba(255, 255, 255, 0.7)"}}>
                <h2>
                    Are you a home owner?  
                </h2>
                <br></br>
                <h5 className="font-weight-bold">
                    Get matched with dedicated interior designers for free today!
                </h5>
                <br></br>
                <Link to="/matchDesigner" className='m-2'><button style={{cursor:"pointer"}}>Find My Designer!</button></Link>
                <Link to="/gallery" className='m-2'><button style={{cursor:"pointer"}}>View Gallery</button></Link>
                </div>
            </div>
            <div className="col-md-2"></div>
            </div>
        </div>
    ) : (
        <div className='container align-items-center p-0' style={{backgroundColor: "rgba(255, 255, 255, 0.0)", width:'100%'}}>
            <div className='row g-0 no-gutters justify-content-md-center align-items-center text-center p-3 m-3' style={{backgroundColor: "rgba(255, 255, 255, 0.7)"}}>
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
                <h5 className="font-weight-bold" >
                    Register with us to showcase your projects to home owners today!
                </h5>
                <br></br>
                <Link to="/register" className='m-2' ><button style={{cursor:"pointer"}}>Register</button></Link>
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
                <Link to="/register" className='m-2'><button style={{cursor:"pointer"}}>Register</button></Link>
                <Link to="/gallery" className='m-2'><button style={{cursor:"pointer"}}>View Gallery</button></Link>
                </div>
            </div>
            <div className="col-md-2"></div>
            </div>
        </div>
    )
}

export class Home extends React.Component {
    constructor() {
    super();
    this.state = {reviews:[]}
    }

    componentDidMount(){
        this.loadData()
    }

    async loadData(){
        const query = `query{
            listReview{
                id name designer rating reviewMessage reviewImage
            }
        }`;

        const response = await fetch('http://localhost:8000/graphql',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({query})
        });

        const body = await response.text();
        const result = JSON.parse(body);
        this.setState({reviews: result.data.listReview});
    }
  

    render(){
    const review1 = this.state.reviews.slice(0,3);
    const review2 = this.state.reviews.slice(3,6);
    const review3 = this.state.reviews.slice(6,9);
    return (
    <div>
        <div className= "container-fluid background-image p-5" style={{backgroundImage: "url(/home-design2.jpg)", backgroundSize: "cover", backgroundPosition: "center",}}>
            <Welcome/>
            </div>
            <div className="container-fluid item-align-center p-0">
            <div className="row g-0 no-gutters item-align-center p-5">
                <h1 className="justify-content-center text-center">How Homey Works</h1>
            </div>
            <div className="row g-0 no-gutters justify-content-md-center item-align-center p-5">
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
            <div className="container item-align-center p-5">
                <h1 className="justify-content-center text-center p-5">Gallery Snippet</h1>
                <div id="gallerySnippet" className="carousel slide" data-ride="carousel">
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
                <a className="carousel-control-prev" href="#gallerySnippet" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#gallerySnippet" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
            </div>
            <div id="reviewSnippet" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row no-gutters" style={{marginTop: "30px", marginLeft:"auto", marginRight:"auto", backgroundColor:"#FAF9F6"}>  
                            {review1.map((review) => (
                                <div key={review.id} className="col-md-4 m-0 d-flex flex-column align-items-center" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
                                <Display review={review} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row no-gutters" style={{marginTop: "30px", marginLeft:"auto", marginRight:"auto", backgroundColor:"#FAF9F6"}}>  
                            {review2.map((review) => (
                                <div key={review.id} className="col-md-4 m-0 d-flex flex-column align-items-center" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
                                <Display review={review} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row no-gutters" style={{marginTop: "30px", marginLeft:"auto", marginRight:"auto", backgroundColor:"#FAF9F6"}}>  
                            {review3.map((review) => (
                                <div key={review.id} className="col-md-4 m-0 d-flex flex-column align-items-center" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
                                <Display review={review} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#reviewSnippet" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#reviewSnippet" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
            
        </div>  
    </div>);
    }
  };

