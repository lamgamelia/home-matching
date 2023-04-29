import {SingleDesigner} from "./SingleDesigner.jsx";
import graphQLFetch from '../graphql.js';
import {DesignerProfile} from "./DesignerProfile.jsx"

function MatchResult(props){
  return(
    <div className="g-0 no-gutters mx-auto justify-content-md-center align-items-center text-center bg-light">
        <h4>Successfully Matched a Designer Style!</h4>
        <p>You are into the {props.style} design that maximises space for your property.</p>
        <p>These Designers may suit your preference</p>
        <div className="row no-gutters item-align-center p-5  text-left">
          {props.designers.map((designer)=>(<SingleDesigner key={designer.id} designer={designer} selectDesigner={props.selectDesigner}/>))}
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
    this.state = {propertyCondition:'',propertyType:'',feeLevel:''};
  }

  async handleSubmit(){
    let feeLevel = document.getElementById('feeLevel').value;
    if (feeLevel!=0){await this.setState({feeLevel:feeLevel});}
    await this.props.updateFilter(this.state.feeLevel,this.state.propertyType, this.state.propertyCondition);
    this.props.nextpage();
  }


  render(){
    return(
      <div>
        <div className='g-0 no-gutters mx-auto justify-content-md-center align-items-center text-center bg-light' style={{width:"50%"}}>
          <div><br></br></div>
          <div><br></br></div>
          <h1 style={{color: "rgb(46, 103, 130)"}}>Tell Us More About your Home!</h1>
          {/*#####################*/}
          <div className="mt-5">
            <h3 className="p-2" style={{fontWeight:"bold"}}>Property Condition</h3>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-primary btn-size" style={{fontSize:"22px", fontWeight:"bold", color:"white", backgroundColor:"rgb(46, 103, 130)", borderColor:"white"}} onClick = {()=>this.setState({propertyCondition:'New'})}>
                <input type="radio" name="options" id="conditionNew" autoComplete="off" /> New
              </label>
              
              <div className="mx-2"></div> 

              <label className="btn btn-primary btn-size" style={{fontSize:"22px", fontWeight:"bold", color:"white", backgroundColor:"rgb(46, 103, 130)", borderColor:"white"}} onClick = {()=>this.setState({propertyCondition:'Resale'})}>
                <input type="radio" name="options" id="conditionResale" autoComplete="off" /> Resale
              </label>
            </div>

          </div>
          

          {/*#####################*/}
          <div className="mt-5">
            <h3 className="p-2" style={{fontWeight:"bold"}}>Property Type</h3>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-primary" style={{fontSize:"22px", fontWeight:"bold", color:"white", backgroundColor:"rgb(46, 103, 130)", borderColor:"white"}} onClick = {()=>this.setState({propertyType:'HDB'})}>
                <input type="radio" name="options" id="TypeHDB" autoComplete="off" /> HDB
              </label>
              
              <div className="mx-2"></div> 

              <label className="btn btn-primary" style={{fontSize:"22px", fontWeight:"bold", color:"white", backgroundColor:"rgb(46, 103, 130)", borderColor:"white"}} onClick = {()=>this.setState({propertyType:'Condo'})}>
                <input type="radio" name="options" id="TypeCondo" autoComplete="off" /> Condo
              </label>

              <div className="mx-2"></div> 

              <label className="btn btn-primary" style={{fontSize:"22px", fontWeight:"bold", color:"white", backgroundColor:"rgb(46, 103, 130)", borderColor:"white"}} onClick = {()=>this.setState({propertyType:'Land'})}>
                <input type="radio" name="options" id="TypeLand" autoComplete="off" /> Land
              </label>

              <div className="mx-2"></div> 

              <label className="btn btn-primary" style={{fontSize:"22px", fontWeight:"bold", color:"white", backgroundColor:"rgb(46, 103, 130)", borderColor:"white"}} onClick = {()=>this.setState({propertyType:'Commercial'})}>
                <input type="radio" name="options" id="TypeCommercial" autoComplete="off" /> Commercial
              </label>
            </div>  
          </div>
          

          {/*#####################*/}
          <div className="mt-5">
            <h3 className="p-2" style={{fontWeight:"bold"}}>Budget</h3>
            <select className="form-select form-size" aria-label="Default select example" id="feeLevel"> 
              <option value={0}>Select a Budget Range</option>
              <option value={1}>10k-30k </option>
              <option value={2}>31k-50k</option>
              <option value={3}>51k-80k</option>
              <option value={4}>Over 80k</option>
            </select>
          </div>

          <div className="mt-5 justify-content-md-center align-items-center">
            <button type="button" className="btn btn-primary" style={{fontSize:"22px", fontWeight:"bold", color:"white", backgroundColor:"rgb(46, 103, 130)", borderColor:"white"}} onClick={()=>this.handleSubmit()}>Next</button>
          </div>
          <div><br></br></div>
          <div><br></br></div>
        </div>
      </div>
    );
  }
}

class HouseStyle extends React.Component{
  constructor(){
    super();
    this.state = {designStyle:''};
  }

  async handleSubmit(){
    if(this.state.designStyle){await this.props.updateFilter('','','',this.state.designStyle)};
    this.props.nextpage();
  }

  render(){
    return(
      <div className='g-0 no-gutters mx-auto justify-content-md-center align-items-center text-center'>

        <div className="mt-5">
            <h4>Select the type you prefer most:</h4>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn" onClick={()=>this.setState({designStyle:'Modern'})}>
                <input type="radio" name="options" id="styleModern" autoComplete="off" />
                <img src="home-design.jpg" alt="My Image" className="img-fluid"/>
              </label>

              <label className="btn" onClick={()=>this.setState({designStyle:'Artistic'})}>
                <input type="radio" name="options" id="styleArtistic" autoComplete="off" />
                <img src="home-design.jpg" alt="My Image" className="img-fluid"/>
              </label>

              <label className="btn" onClick={()=>this.setState({designStyle:'Traditional'})}>
                <input type="radio" name="options" id="styleTraditional" autoComplete="off" />
                <img src="home-design.jpg" alt="My Image" className="img-fluid"/>
              </label>
            </div>
        </div>

        <div className="row mt-5 justify-content-md-center align-items-center">
            <button type="button" className="btn btn-primary" onClick={this.props.prevpage}>Back</button>
            <div className="mx-5"/>
            <button type="button" className="btn btn-primary" onClick={()=>this.handleSubmit()}>Next</button>
        </div>
            

      </div>
    );
  }
}


export class Match extends React.Component {
    constructor() {
      super();
      this.state = {selector:1,designers:[],feeLevel:0,designStyle:'',propertyCondition:'',propertyType:'',selectedDesigner:null};
      this.nextpage = this.nextpage.bind(this);
      this.prevpage = this.prevpage.bind(this);
      this.updateFilter = this.updateFilter.bind(this);
      this.selectDesigner = this.selectDesigner.bind(this);
    }

    async matchDesigner(){
      const query = `query listDesigner($propertyCondition:String,$propertyType:String,$designStyle:String,$feeLevel:Int){
        listDesigner (houseCondition:$propertyCondition,houseType:$propertyType,designStyle:$designStyle,feeLevel:$feeLevel){
          id,
          title,
          username,
          email,
          mobile,
          designStyle,
          propertyCondition,
          feeLevel,
          propertyType,
          description,
        }
      }`;
      const variables = {"propertyCondition": this.state.propertyCondition,"propertyType": this.state.propertyType,"designStyle": this.state.designStyle,"feeLevel":this.state.feeLevel};
      const data = await graphQLFetch(query,variables);
      this.setState({designers: data.listDesigner})
    }

    prevpage(){
      this.setState({selector:this.state.selector-1});
    }

    nextpage(){
      this.setState({selector:this.state.selector+1});
    }

    async updateFilter(feeLevel=0,propertyType='',propertyCondition='',designStyle=''){
      let stateUpdate = {};
      if (feeLevel!=0){
        stateUpdate.feeLevel = feeLevel;
      }
      if (propertyType){
        stateUpdate.propertyType = propertyType;
      }
      if (propertyCondition){
        stateUpdate.propertyCondition = propertyCondition;
      }
      if (designStyle){
        stateUpdate.designStyle = designStyle;
      }
      await this.setState(stateUpdate);
      await this.matchDesigner();
    }

    selectDesigner(designer=null){
      if (designer){
        this.setState({selectedDesigner:designer,selector:4});
      }else{
        this.setState({selector:3});
      }
      
    }

    render(){
      return (
      <div style={{backgroundColor: "#e6f7ff"}}>
        <div className= "container-fluid background-image p-5" style={{backgroundImage: "url(/home-design3.jpg)", backgroundSize: "cover", backgroundPosition: "center",}}>
            <div className='container align-items-center  p-0' style={{backgroundColor: "rgba(255, 255, 255, 0.0)", width:'100%'}}>
                <div className='row g-0 no-gutters mx-auto justify-content-md-center align-items-center text-center' style={{width:"50%", backgroundColor: "rgba(255, 255, 255, 0.7)"}}>
                  <h1 style={{color: "rgb(0,0,0)"}}>Match The Designer!</h1>
                </div>
                <div><br></br></div>
                <div><br></br></div>
                <div><br></br></div>
                <div><br></br></div>
                <div className='row g-0 no-gutters mx-auto justify-content-md-center align-items-center text-center' style={{width:"100%", backgroundColor: "rgba(255, 255, 255, 0.7)"}}>
                  <h1 style={{color: "rgb(0,0,0)"}}>We have thousands of Designers ready to help you! </h1>
                </div>
            </div>
        </div>
        <div className="p-3" style={{backgroundColor: "#e6f7ff"}}></div>
        <div>
          {this.state.selector===1?<HouseType nextpage={this.nextpage} prevpage={this.prevpage} updateFilter = {this.updateFilter}/>:<div/>}
          {this.state.selector===2?<HouseStyle nextpage={this.nextpage} prevpage={this.prevpage} updateFilter = {this.updateFilter}/>:<div/>}
          {this.state.selector===3?<MatchResult prevpage={this.prevpage} style={this.state.designStyle} designers = {this.state.designers} selectDesigner={this.selectDesigner}/>:<div/>}
          {this.state.selector===4?<DesignerProfile designer={this.state.selectedDesigner} selectDesigner={this.selectDesigner}/>:<div/>}
        </div>
        <div className="p-3" style={{backgroundColor: "#e6f7ff"}}></div>
      </div>);
    }
  };
