
class Designers extends React.Component {
  constructor() {
  super();
  }
  render(){
  return (
  <div>

  </div>);
  }
}

class Gallery extends React.Component {
  constructor() {
  super();
  }
  render(){
  return (
  <div>

  </div>);
  }
}

class Contact extends React.Component {
  constructor() {
  super();
  }
  render(){
  return (
  <div>
      
  </div>);
  }
}

class GetMatched extends React.Component {
  constructor() {
  super();
  }
  render(){
  return (
  <div>
      
  </div>);
  }
}

  class Homey extends React.Component {
    constructor() {
      super();
      this.state = { designPortfolio: [], selector: 1};
    }
  
    setSelector(value)
    {
      this.setState({selector: value});
    }

    componentDidMount() {
      this.loadData();
    }
  
    loadData() {
      setTimeout(() => {
        this.setState({ designPortfolio: [] }); //to be replaced with database
      }, 500);
    }

    render() {
      return (
        <div className = "home">
          <div className = "logo">
            <img id="homeyLogo" src="/homey.png" alt="Homey"/>
          </div>
          <div className ="navPane">
            <a
                  onClick={() => this.setSelector(1)}
                  className={this.state.selector === 1 ? "active" : ""}
            >
              Our Designer
            </a>
            <a
              onClick={() => this.setSelector(2)}
              className={this.state.selector === 2 ? "active" : ""}
            >
              Gallery
            </a>
            <a
              onClick={() => this.setSelector(3)}
              className={this.state.selector === 3 ? "active" : ""}
            >
              Contact
            </a>
          </div>
          <div className = "getMatched">
            <a
                onClick={() => this.setSelector(4)}
                className={this.state.selector === 4 ? "active" : ""}
            >
                Get Matched
            </a>
          </div>
          <div className = "login">
            <a
                onClick={() => this.setSelector(5)}
                className={this.state.selector === 5 ? "active" : ""}
            >
                Login/ Sign Up
            </a>
          </div>
          <div>
            {this.state.selector === 1 && (<Designers portfolio={this.state.designPortfolio}/>)}
            {this.state.selector === 2 && (<Gallery />)}
            {this.state.selector === 3 && (<Contact />)}
            {this.state.selector === 4 && (<GetMatched />)}
          </div>
          <br></br>
          <br></br>
          <div style={{width: "100%"}}><img id="backgroundHome" src="/home-design.jpg" alt="Home"/></div>
        </div>
      );
    }
  }
  
  const element = <Homey />;
  
  ReactDOM.render(element, document.getElementById('contents'));
  