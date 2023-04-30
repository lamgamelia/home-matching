import {SingleDesigner} from "./SingleDesigner.jsx";
import graphQLFetch from '../graphql.js';
import {DesignerProfile} from "./DesignerProfile.jsx"

class Recommended3Designers extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    alert("The picture is clicked!");
  }

  render(){
    if (this.props.designer){
      return(
        <div className="card col-md-4 d-flex justify-content-center justify-content-md-between bg-light" style={{width: "18rem", border:'3px'}}>
          <img src={this.props.designer.profileImage || "home-design.jpg"} className="card-img-top" alt={this.props.designer.title}/>
          <div className="card-body">
            <h6 className="card-text">{this.props.designer.title} ({this.props.designer.designStyle})</h6>
            <p className="card-text">{this.props.designer.description}</p>
            <div className="btn btn-primary" onClick={()=>this.props.selectDesigner(this.props.designer)}>Check it Now!</div>
          </div>
        </div>  
      );
    }else{
      return (<></>);
    }
  }
}

class MultiDesigners extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
    <div>
      <div className="bg-light" style={{position:'relative'}}>
        <div className="row no-gutters item-align-center p-5">
              <h1 className="">Top Recommendations</h1>
        </div>
        <div className="row justify-content-center px-5 bg-light" >
          <Recommended3Designers designer={this.props.designers[0]} selectDesigner={this.props.selectDesigner}/>
          <Recommended3Designers designer={this.props.designers[1]} selectDesigner={this.props.selectDesigner}/>
          <Recommended3Designers designer={this.props.designers[2]} selectDesigner={this.props.selectDesigner}/>
        </div>
      </div>

      <div style={{position:'relative'}}>
        <div className="row no-gutters item-align-center p-5">
            <h1 className="">Our Designers</h1>
            {this.props.designers.map((designer)=>(<SingleDesigner key={designer.id} designer={designer} selectDesigner={this.props.selectDesigner}/> ))}
        </div>
      </div>

    </div>);
    }
}

export class Designers extends React.Component {
    constructor() {
      super();
      this.state = {designers:[],showProfile:false,selectedDesigner:null};
      this.selectDesigner = this.selectDesigner.bind(this);
    }
    async loadData(){
      const query = `query listDesigner {
        listDesigner{
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
          profileImage
        }
      }`;

      const data = await graphQLFetch(query);
      this.setState({designers: data.listDesigner})
    }
    
    componentDidMount(){
      this.loadData();
    }

    selectDesigner(designer=null){
      if (designer){
        this.setState({selectedDesigner:designer,showProfile:true});
      }else{
        this.setState({showProfile:false});
      }
      
    }

    render(){
      return (
        <div>
          {this.state.showProfile?<DesignerProfile designer={this.state.selectedDesigner} selectDesigner={this.selectDesigner}/>:<MultiDesigners designers={this.state.designers} selectDesigner={this.selectDesigner}/>}
        </div>
        );
      }
  };

