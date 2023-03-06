
  class Homepage extends React.Component {
      constructor() {
      super();
      }
      render(){
      return (
      <div>
          {/*Q2. Placeholder for Homepage code that shows free seats visually.*/}
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
        <div>
          <h1>Homey</h1>
          <div className ="navPane">
            <button
                  onClick={() => this.setSelector(1)}
                  className={this.state.selector === 1 ? "active" : ""}
            >
              Home
            </button>
            <button
              onClick={() => this.setSelector(2)}
              className={this.state.selector === 2 ? "active" : ""}
            >
              Display Travellers
            </button>
            <button
              onClick={() => this.setSelector(3)}
              className={this.state.selector === 3 ? "active" : ""}
            >
              Add Traveller
            </button>
            <button
              onClick={() => this.setSelector(4)}
              className={this.state.selector === 4 ? "active" : ""}
            >
              Delete Traveller
            </button>
        </div>
        <div>
          {this.state.selector === 1 && <Homepage portfolio={this.state.designPortfolio}/>}
          {this.state.selector === 2 && (<Display />)}
          {this.state.selector === 3 && (<Add />)}
          {this.state.selector === 4 && (<Delete />)}
        </div>
        </div>
      );
    }
  }
  
  const element = <Homey />;
  
  ReactDOM.render(element, document.getElementById('contents'));
  