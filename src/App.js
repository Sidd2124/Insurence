import { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Details from './Components/Details';
import './App.css';
import Context from './Components/Context/Context';
import FormerEntry from './Components/Entries/FormerEntry';
import Removes from './Components/Removed/RemoveItems'

import Login from './Components/LoginPage/Login'

class App extends Component {
  state = {
    FirstArray: [],RemovedOnes:[],
  };



 
  componentDidMount() {
    const You = localStorage.getItem("Info");
    if (You) {
      this.setState({ FirstArray: JSON.parse(You) });
     
    }

  const Sk = localStorage.getItem("Sidd");

  if(Sk){
    this.setState({RemovedOnes:JSON.parse(Sk)})
  }
   
  }
  


  Happend = (K) => {
    const { FirstArray } = this.state;
    const filteredArray = FirstArray.filter((each) => each.id !== K);
    this.setState({ FirstArray: filteredArray });
    localStorage.setItem("Info", JSON.stringify(filteredArray));
   

  };
  
  Kisan = (N) => {
    this.setState(prevState => {
      const updatedRemovedOnes = [...prevState.RemovedOnes, N];
      localStorage.setItem("Sidd", JSON.stringify(updatedRemovedOnes));
      return { RemovedOnes: updatedRemovedOnes };
    });
  }
  
  

  Update = (J) => {
    this.setState((prevState) => {
      const updatedArray = [...prevState.FirstArray, J];
      localStorage.setItem("Info", JSON.stringify(updatedArray));
      return { FirstArray: updatedArray };
    });
  };
  
  render() {
    const { FirstArray,RemovedOnes} = this.state;
    console.log(FirstArray)
    return (
      <div className="App">
        <Context.Provider value={{ FinelArray: FirstArray, NewArray: this.Update,FinelRemove:this.Happend,RemovedFarmers:RemovedOnes,RemoveingKarshak:this.Kisan }}>  
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Details} />
              <Route exact path="/Entries" component={FormerEntry} />
              <Route exact path="/RemovesFarmers" component={Removes} />
              <Route exact path="/Login" component={Login}/>
            </Switch>
          </BrowserRouter>
        </Context.Provider>
      </div>
    );
  }
}

export default App;
