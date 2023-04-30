import graphQLFetch from '../graphql.js';

function Display(props){
  const project = props.project;
  return(
    <div className="col-md-4 m-0 d-flex flex-column align-items-center" style={{paddingTop: "30px", paddingBottom: "30px"}} >
        <div>
          <a href="/home">
            <img className="image-rounded p-2"src={project.image || "/homey.png"}/>
          </a>
        </div>
        <div className="row">
          <div className ="c-6" style={{marginLeft:"10px", marginRight:"10px"}}>
            Title: {project.title}
          </div>
          <div className ="c-6" style={{marginLeft:"10px", marginRight:"10px"}}>
            Type: {project.propertyType}
          </div>
        </div>
        <div>
            Design Style: {project.designStyle1}, {project.designStyle2}
        </div>
        <div>
            No of Bedrooms: {project.noOfBedrooms}
        </div>
    </div>
  )
}



export class DesignerProfile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {designer:this.props.designer,projects:[]};
  }

  async loadGalleryData(){
    const query = `query ($designerUsername:String){
      listGallery (designerUsername:$designerUsername){
        id title designerUsername propertyType designStyle1 designStyle2 noOfBedrooms image
      }
    }`;
    const data = await graphQLFetch(query,{designerUsername:this.props.designer.username});
    this.setState({projects: data.listGallery})
  }

  componentDidMount(){
    this.loadGalleryData();
  }

  render(){
    return(
      <div>
        <div className="row g-0 bg-body-secondary position-relative bg-white align-items-center mx-auto my-auto" style={{position:'relative'}}>
          <i className="bi bi-arrow-left btn btn-primary" onClick={()=>{this.props.selectDesigner()}}>Back</i>
        </div>
        <div className="row g-0 bg-body-secondary position-relative bg-light align-items-center mx-auto my-auto" style={{position:'relative'}}>
          <div className="col-md-4 mb-md-0 p-md-4 align-items-center mx-auto my-auto">
            <img src={this.state.designer.profileImage || "home-design.jpg"} className="w-100" alt={this.state.designer.title}/>
            <h6>Email:{this.state.designer.email}</h6>
            <h6>Mobile:{this.state.designer.mobile}</h6>
          </div>
          <div className="mb-md-0 p-md-4 mx-auto">
            <p>{this.state.designer.description}</p>
          </div>
        </div>
      
        <div className="g-0 bg-body-secondary position-relative bg-white align-items-center mx-auto my-auto" style={{position:'relative'}}>
          <div className="row no-gutters item-align-center p-5">
            <h1 className="">Designer's Work</h1>
          </div>
          <div className="row no-gutters item-align-center p-5">
            {this.state.projects.map((project) => <Display key={project.id} project={project}/>)}
          </div>
          
        </div>
 
      </div>
    )
  }
}