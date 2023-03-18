export class Designers extends React.Component {
    constructor() {
    super();
    }
    render(){
    return (
    <div>
      <div className="bg-light" style={{position:'relative'}}>
        <div className="row no-gutters item-align-center p-5">
              <h1 className="">Top Recommendations</h1>
        </div>
        <div className="row justify-content-center px-5 bg-light" >
          <div className="card col-md-4 d-flex justify-content-center justify-content-md-between bg-light" style={{width: "18rem", border:'3px'}}>
            <img src="home-design.jpg" className="card-img-top" alt="Designer1"/>
            <div className="card-body">
              <p className="card-text">designer1</p>
            </div>
          </div>

          <div className="card col-md-4 d-flex justify-content-center justify-content-md-between bg-light" style={{width: "18rem", border:'3px'}}>
            <img src="home-design.jpg" className="card-img-top" alt="Designer2"/>
            <div className="card-body">
              <p className="card-text">designer2</p>
            </div>
          </div>

          <div className="card col-md-4 d-flex justify-content-center justify-content-md-between bg-light" style={{width: "18rem", border:'3px'}}>
            <img src="home-design.jpg" className="card-img-top" alt="Designer3"/>
            <div className="card-body">
              <p className="card-text">designer3</p>
            </div>
          </div>

        </div>
      </div>

      <div style={{position:'relative'}}>
        <div className="row no-gutters item-align-center p-5">
            <h1 className="">Our Designers</h1>
        </div>
        
      </div>

    </div>);
    }
  };

