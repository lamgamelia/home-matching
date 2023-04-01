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
      this.state = {projects:[], filterProjects:[], filterOff:true, propertyType:"", designStyle:"", noOfBedrooms:""}
      this.handleFilterGallery = this.handleFilterGallery.bind(this);
      this.resetFilter = this.resetFilter.bind(this);
    }

    componentDidMount(){
      this.loadData()
    }

    async loadData(){
      const query = `query{
        listGallery{
          id title propertyType designStyle1 designStyle2 noOfBedrooms
        }
      }`;

      const response = await fetch('http://localhost:8000/graphql',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({query})
      });

      const body = await response.text();
      const result = JSON.parse(body);
      this.setState({projects: result.data.listGallery})
    }
  
    async handleFilterGallery(e) {
      e.preventDefault();
      var propertyTypef = document.getElementById('propertyType').value;
      var designStylef = document.getElementById('designStyle').value;
      var noOfBedroomsf = document.getElementById('noOfBedrooms').value;
    
      if (propertyTypef == "Property Type"){
        propertyTypef = ""
      }
      if (designStylef == "Design Style"){
        designStylef = ""
      }
      if (noOfBedroomsf == "Number of Bedrooms"){
        noOfBedroomsf = ""
      }
      if (noOfBedroomsf == ">6"){
        noOfBedroomsf = 6
      }

      await this.setState({filterOff:false, propertyType: propertyTypef, designStyle:designStylef, noOfBedrooms:noOfBedroomsf})
      this.loadFilteredData();

    }

    async loadFilteredData(){
      let query = `query{listGallery(`;

      if(this.state.propertyType !== '') {
      query += `propertyType: "${this.state.propertyType}", `;
      }

      if(this.state.designStyle !== '') {
      query += `designStyle: "${this.state.designStyle}", `;
      }

      if(this.state.noOfBedrooms !== '') {
      query += `noOfBedrooms: ${this.state.noOfBedrooms}, `;
      }

      query += `){ id title propertyType designStyle1 designStyle2 noOfBedrooms }}`;
      const response = await fetch('http://localhost:8000/graphql',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({query})
      });

      const body = await response.text();
      const result = JSON.parse(body);
      this.setState({filterProjects: result.data.listGallery})
    }

    async resetFilter(e) {
      e.preventDefault();
      const propertyTypef = document.getElementById('propertyType');
      const designStylef = document.getElementById('designStyle');
      const noOfBedroomsf = document.getElementById('noOfBedrooms');
    
      propertyTypef.value = "Property Type";
      designStylef.value = "Design Style"
      noOfBedroomsf.value = "Number of Bedrooms";

      await this.setState({filterOff:true});
    }
    
  render(){
    const projOnLoad = this.state.projects.map((project) => <Display key={project.id} project={project}/>);
    const projFilter = this.state.filterProjects.map((project) => <Display key={project.id} project={project}/>);
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
          <select className="form-select m-2" id="propertyType" defaultValue="Property Type">
            <option defaultValue>Property Type</option>
            <option value="Hdb">Hdb</option>
            <option value="Condo">Condo</option>
            <option value="Landed">Landed</option>
          </select>
          <select className="form-select m-2" id="designStyle">
            <option defaultValue>Design Style</option>
            <option value="Artistic">Artistic</option>
            <option value="Industrial">Industrial</option>
            <option value="Luxury">Luxury</option>
            <option value="Minimalist">Minimalist</option>
            <option value="Modern">Modern</option>
            <option value="Others">Others</option>
          </select>
          <select className="form-select m-2" id="noOfBedrooms">
            <option defaultValue>Number of Bedrooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value=">6">6 or more</option>
          </select>
          <input className="btn btn-primary m-2" type="submit" value="Submit" onClick={this.handleFilterGallery}></input>
          <input className="btn btn-primary m-2" type="submit" value="Reset Filter" onClick={this.resetFilter}></input>
        </div>
        <div className="row no-gutters" style={{marginTop: "30px", marginLeft:"auto", marginRight:"auto", backgroundColor:"#FAF9F6"}}>
        {this.state.filterOff && projOnLoad}
        {!this.state.filterOff && projFilter}
      </div>
      </div>
  </div>);
  }
};