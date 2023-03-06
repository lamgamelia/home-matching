
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
        <div className = "logo"><h1>Homey</h1></div>
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
        <div>
          {this.state.selector === 1 && (<Designers portfolio={this.state.designPortfolio}/>)}
          {this.state.selector === 2 && (<Gallery />)}
          {this.state.selector === 3 && (<Contact />)}
        </div>
        </div>
      );
    }
  }
  
  const element = <Homey />;
  
  ReactDOM.render(element, document.getElementById('contents'));
  