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
    this.state = {designer:{title:'',designStyle:[],email:'',mobile:''}, id: 1,projects:[]};
  }

  async loadData(){
    const query = `query selectDesigner($id:Int!) {
      selectDesignerByID(id:$id){
        id,
        title,
        email,
        mobile,
        designStyle,
        propertyCondition,
        feeLevel,
        propertyType,
        description,
      }
    }`;
    const variables = {"id":this.state.id};
    const data = await graphQLFetch(query, variables);
    this.setState({designer: data.selectDesignerByID})
  }

  async loadGalleryData(){
    const query = `query{
      listGallery{
        id title propertyType designStyle1 designStyle2 noOfBedrooms image
      }
    }`;

    const response = await fetch('http://localhost:8000/graphql',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({query})
    });

    const body = await response.text();
    const result = JSON.parse(body);
    console.log(result.data.listGallery);
    this.setState({projects: result.data.listGallery})
  }

  componentDidMount(){
    this.loadData();
    this.loadGalleryData();
  }

  render(){
    return(
      <div>
        <div className="row g-0 bg-body-secondary position-relative bg-light align-items-center mx-auto my-auto" style={{position:'relative'}}>
          <div className="col-md-4 mb-md-0 p-md-4 align-items-center mx-auto my-auto">
            <img src="home-design.jpg" className="w-100" alt={this.state.designer.title}/>
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