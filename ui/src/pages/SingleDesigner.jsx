export class SingleDesigner extends React.Component{
    constructor(props){
      super(props);
    }
  
    handleClick(e){
      e.preventDefault();
    }
  
    render(){
      return(
        <div className="row g-0 bg-body-secondary position-relative">
          <div className="col-md-6 mb-md-0 p-md-4">
            <img src="home-design.jpg" className="w-100" alt={this.props.designer.title}/>
          </div>
          <div className="col-md-6 p-4 ps-md-0">
            <h5 className="mt-0">{this.props.designer.title} ({this.props.designer.designStyle})</h5>
            <p>{this.props.designer.description}</p>
            <a href="#" className="stretched-link">More Infomation</a>
          </div>
        </div>
      );
    }
  }