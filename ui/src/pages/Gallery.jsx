function Display(props){
  const project = props.project;
  return(
    <div className="col-md-4 m-0 d-flex flex-column align-items-center" style={{paddingTop: "30px", paddingBottom: "30px"}} >
        <div>
          <a href="/home">
            <img className="image-rounded p-2"src="/homey.png"/>
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

export class Gallery extends React.Component {
    constructor() {
      super();
      this.state = {projects:[], filterOff:true}
    }

    componentDidMount(){
      this.loadData()
    }

    async loadData(){
      const query = `query{
        projectList{
          id title propertyType designStyle1 designStyle2 noOfBedrooms
        }
      }`;

      const response = await fetch('http://localhost:3000/graphql',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({query})
      });

      const body = await response.text();
      const result = JSON.parse(body);
      this.setState({projects: result.data.projectList})
    }

    render(){
      const proj = this.state.projects.map((project) => <Display key={project.id} project={project}/>);
      return (
      <div>  
        <div className= "container-fluid background-image p-5" style={{backgroundImage: "url(/home-design3.jpg)", backgroundSize: "cover", backgroundPosition: "center",}}>
          <div className='container align-items-center  p-0' style={{backgroundColor: "rgba(255, 255, 255, 0.0)", width:'100%'}}>
              <div className='row g-0 no-gutters mx-auto justify-content-md-center align-items-center text-center' style={{width:"50%", backgroundColor: "rgba(255, 255, 255, 0.7)"}}>
                <h1 style={{color: "rgb(0,0,0)"}}>View Our Project Gallery</h1>
              </div>
              <div className='row' style={{width:'100%', marginTop: "100px"}}>
                <div className='row g-0 no-gutters mx-auto justify-content-md-center align-items-center text-center p-3 m-3' style={{backgroundColor: "rgba(255, 255, 255, 0.7)"}}>
                  <h2 style={{color: "rgb(0,0,0)"}}>Browse thousands of home interiors to create a space you love!</h2>
                </div>
              </div>
          </div>
        </div>
        <div className = "container-fluid" style={{marginTop: "50px"}}>
          <div className = "row no-gutters m-2">
            <h1>Interior Design Projects</h1>
          </div>
          <div className="row no-gutters" style={{marginTop: "30px"}}>
            <div className="dropdown m-2">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="propertyType" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Property Type
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">HDB</a>
                <a className="dropdown-item" href="#">Condo</a>
                <a className="dropdown-item" href="#">Landed</a>
              </div>
            </div>
            <div className="dropdown m-2">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="designStyle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Design Style
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Artistic</a>
                <a className="dropdown-item" href="#">Industrial</a>
                <a className="dropdown-item" href="#">Luxury</a>
                <a className="dropdown-item" href="#">Minimalist</a>
                <a className="dropdown-item" href="#">Modern</a>
                <a className="dropdown-item" href="#">Others</a>
              </div>
            </div>
            <div className="dropdown m-2">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="noOfBedrooms" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Number of Bedrooms
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">1</a>
                <a className="dropdown-item" href="#">2</a>
                <a className="dropdown-item" href="#">3</a>
                <a className="dropdown-item" href="#">4</a>
                <a className="dropdown-item" href="#">5</a>
                <a className="dropdown-item" href="#">6 or more</a>
              </div>
            </div>
            <input className="btn btn-primary m-2" type="submit" value="Submit"></input>
          </div>
          <div className="row no-gutters" style={{marginTop: "30px", marginLeft:"auto", marginRight:"auto", backgroundColor:"#FAF9F6"}}>
          {this.state.filterOff && proj}
        </div>
        </div>
    </div>);
    }
  };