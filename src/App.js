import { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Details from './Components/Details';
import './App.css';
import Context from './Components/Context/Context';
import FormerEntry from './Components/Entries/FormerEntry';

class App extends Component {
  state = {
    FirstArray: [
      
    ]
  };

  
  componentDidMount() {
    const You = JSON.parse(localStorage.getItem("Info"));
    if (You) {
      this.setState({ FirstArray: You });
    }
  }

 
  


  Happend = (K) => {
    const { FirstArray } = this.state;
    const filteredArray = FirstArray.filter((each) => each.id !== K);
    this.setState({ FirstArray: filteredArray });
    localStorage.setItem("Info", JSON.stringify(filteredArray));
  };
  
  
  

  Update = (J) => {
    this.setState((prevState) => {
      const updatedArray = [...prevState.FirstArray, J];
      localStorage.setItem("Info", JSON.stringify(updatedArray));
      return { FirstArray: updatedArray };
    });
  };
  
  render() {
    const { FirstArray } = this.state;
    return (
      <div className="App">
        <Context.Provider value={{ FinelArray: FirstArray, NewArray: this.Update,FinelRemove:this.Happend }}>  
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Details} />
              <Route exact path="/Entries" component={FormerEntry} />
            </Switch>
          </BrowserRouter>
        </Context.Provider>
      </div>
    );
  }
}

export default App;
