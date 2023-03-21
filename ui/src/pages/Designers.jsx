const sudo_designers = [{id:1,title:"Designer1",info:"Mordern"},
                        {id:2,title:"Designer2",info:"Old Fashion"},
                        {id:3,title:"Designer3",info:"Cyber Punk"}]

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
          <a href="#" class="btn btn-primary">Check it Now!</a>
        </div>
      </div>  
    );
  }
}

class SingleDesigners extends React.Component{
  constructor(props){
    super(props);
  }

  handleClick(e){
    e.preventDefault();
  }

  render(){
    return(
      <div class="row g-0 bg-body-secondary position-relative">
        <div class="col-md-6 mb-md-0 p-md-4">
          <img src="home-design.jpg" class="w-100" alt={this.props.designer.title}/>
        </div>
        <div class="col-md-6 p-4 ps-md-0">
          <h5 class="mt-0">{this.props.designer.title}</h5>
          <p>{this.props.designer.info}</p>
          <a href="#" class="stretched-link">More Infomation</a>
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
            {this.state.designers.map((designer)=>(<SingleDesigners designer={designer}/>))}
        </div>
      </div>

    </div>);
    }
  };

