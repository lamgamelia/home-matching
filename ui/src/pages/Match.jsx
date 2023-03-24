const sudo_designers = [{id:1,title:"Designer1",info:"Mordern"},
                        {id:2,title:"Designer2",info:"Old Fashion"},
                        {id:3,title:"Designer3",info:"Cyber Punk"}]

import {SingleDesigner} from "./SingleDesigner.jsx";

function MatchResult(props){
  console.log(props);
  return(
    <div className="g-0 no-gutters mx-auto justify-content-md-center align-items-center text-center bg-light">
        <h4>Successfully Matched a Designer Style!</h4>
        <p>You are into the {props.style} design that maximises space for your property.</p>
        <p>These Designers may suit your preference</p>
        <div className="row no-gutters item-align-center p-5  text-left">
          {props.designers.map((designer)=>(<SingleDesigner key={designer.id} designer={designer}/>))}
        </div>
        <div className="mt-2 justify-content-md-center align-items-center">
            <button type="button" className="btn btn-primary" onClick={props.prevpage}>Back</button>
        </div>
    </div>
  );
}


class HouseType extends React.Component{
  constructor(props){
    super(props);
  }

  handleSubmit(){

  }

  render(){
    return(
      <div>
        <div className='g-0 no-gutters mx-auto justify-content-md-center align-items-center text-center bg-light' style={{width:"50%"}}>
          <h2 style={{color: "rgb(0,0,0)"}}>Tell Us More About your Home!</h2>
          {/*#####################*/}
          <div className="mt-5">
            <h4>Condition</h4>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-primary">
                <input type="radio" name="options" id="option1" autoComplete="off" /> New
              </label>
              
              <div className="mx-2"></div> 

              <label className="btn btn-primary">
                <input type="radio" name="options" id="option2" autoComplete="off" /> Resale
              </label>
            </div>

          </div>
          

          {/*#####################*/}
          <div className="mt-5">
            <h4>Condition</h4>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-primary">
                <input type="radio" name="options" id="option1" autoComplete="off" /> HDB
              </label>
              
              <div className="mx-2"></div> 

              <label className="btn btn-primary">
                <input type="radio" name="options" id="option2" autoComplete="off" /> Condo
              </label>

              <div className="mx-2"></div> 

              <label className="btn btn-primary">
                <input type="radio" name="options" id="option2" autoComplete="off" /> Land
              </label>

              <div className="mx-2"></div> 

              <label className="btn btn-primary">
                <input type="radio" name="options" id="option2" autoComplete="off" /> Commercial
              </label>
            </div>  
          </div>
          

          {/*#####################*/}
          <div className="mt-5">
            <h4>Budget</h4>
            <select className="form-select" aria-label="Default select example">
              <option value>Select a Budget Range</option>
              <option value="1">10k-30k </option>
              <option value="2">31k-50k</option>
              <option value="3">51k-80k</option>
              <option value="4">Over 80k</option>
            </select>
          </div>

          <div className="mt-5 justify-content-md-center align-items-center">
            <button type="button" className="btn btn-primary" onClick={this.props.nextpage}>Next</button>
          </div>

        </div>
      </div>
    );
  }
}

class HouseStyle extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div className='g-0 no-gutters mx-auto justify-content-md-center align-items-center text-center'>

        <div className="mt-5">
            <h4>Select the type you prefer most:</h4>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn">
                <input type="radio" name="options" id="option1" autoComplete="off" />
                <img src="home-design.jpg" alt="My Image" className="img-fluid"/>
              </label>

              <label className="btn">
                <input type="radio" name="options" id="option2" autoComplete="off" />
                <img src="home-design.jpg" alt="My Image" className="img-fluid"/>
              </label>

              <label className="btn">
                <input type="radio" name="options" id="option3" autoComplete="off" />
                <img src="home-design.jpg" alt="My Image" className="img-fluid"/>
              </label>
            </div>
        </div>

        <div className="row mt-5 justify-content-md-center align-items-center">
            <button type="button" className="btn btn-primary" onClick={this.props.prevpage}>Back</button>
            <div className="mx-5"/>
            <button type="button" className="btn btn-primary" onClick={this.props.nextpage}>Next</button>
        </div>
            

      </div>
    );
  }
}


export class Match extends React.Component {
    constructor() {
      super();
      this.state = {selector:1};
      this.nextpage = this.nextpage.bind(this);
      this.prevpage = this.prevpage.bind(this);
    }


    prevpage(){
      this.setState({selector:this.state.selector-1});
    }

    nextpage(){
      this.setState({selector:this.state.selector+1});
    }

    render(){
      return (
      <div>
        <div className= "container-fluid background-image p-5" style={{backgroundImage: "url(/home-design3.jpg)", backgroundSize: "cover", backgroundPosition: "center",}}>
            <div className='container align-items-center  p-0' style={{backgroundColor: "rgba(255, 255, 255, 0.0)", width:'100%'}}>
                <div className='row g-0 no-gutters mx-auto justify-content-md-center align-items-center text-center' style={{width:"50%", backgroundColor: "rgba(255, 255, 255, 0.7)"}}>
                  <h1 style={{color: "rgb(0,0,0)"}}>Match The Designer!</h1>
                </div>
            </div>
        </div>
        
          {this.state.selector===1?<HouseType nextpage={this.nextpage} prevpage={this.prevpage}/>:<div/>}
          {this.state.selector===2?<HouseStyle nextpage={this.nextpage} prevpage={this.prevpage}/>:<div/>}
          {this.state.selector===3?<MatchResult prevpage={this.prevpage} style={"Modern"} designers = {sudo_designers}/>:<div/>}

      </div>);
    }
  };
