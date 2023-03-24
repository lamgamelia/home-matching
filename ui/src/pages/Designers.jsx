const sudo_designers = [{id:1,title:"Designer1",info:"Mordern"},
                        {id:2,title:"Designer2",info:"Old Fashion"},
                        {id:3,title:"Designer3",info:"Cyber Punk"}]

import {SingleDesigner} from "./SingleDesigner.jsx";

class Recommended3Designers extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    alert("The picture is clicked!");
  }

  render(){
    return(
      <div className="card col-md-4 d-flex justify-content-center justify-content-md-between bg-light" style={{width: "18rem", border:'3px'}}>
        <img src="home-design.jpg" className="card-img-top" alt={this.props.designer.title}/>
        <div className="card-body">
          <h6 className="card-text">{this.props.designer.title}</h6>
          <p className="card-text">{this.props.designer.info}</p>
          <a href="#" className="btn btn-primary">Check it Now!</a>
        </div>
      </div>  
    );
  }
}


export class Designers extends React.Component {
    constructor() {
      super();
      this.state = {designers:sudo_designers};
    }

    render(){
    return (
    <div>
      <div className="bg-light" style={{position:'relative'}}>
        <div className="row no-gutters item-align-center p-5">
              <h1 className="">Top Recommendations</h1>
        </div>
        <div className="row justify-content-center px-5 bg-light" >
          <Recommended3Designers designer={this.state.designers[0]}/>
          <Recommended3Designers designer={this.state.designers[1]}/>
          <Recommended3Designers designer={this.state.designers[2]}/>
        </div>
      </div>

      <div style={{position:'relative'}}>
        <div className="row no-gutters item-align-center p-5">
            <h1 className="">Our Designers</h1>
            {this.state.designers.map((designer)=>(<SingleDesigner key={designer.id} designer={designer}/>))}
        </div>
      </div>

    </div>);
    }
  };

