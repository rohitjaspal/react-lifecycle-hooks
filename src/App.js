import React, { Component } from 'react';
import './App.css';
import Child from './child';

class App extends Component {
  state = {name : "peter"};
  constructor(){
    super();
    this.state = {
      name:"rohit jaspal"
    }
    console.log('constructor');
   }

   style = {
     color:"teal",
     fontSize:"25px"
   }
  componentWillMount(){
    if(window.innerWidth < 500){
      this.setState({innerWidth : window.innerWidth});
    }
    console.log('component will mount run');
}
  componentDidMount(){
    console.log("component did mount run");
  }
  componentWillReceiveProps(){
    console.log("componentwillreceiveProps run");
  }
  shouldComponentUpdate(nextProps , nextState){
    return true;
  }
  changeState(){
    this.setState({ name : "kaka" })
  }
 
  render(){
    console.log('render');
    return (
      <div className="App">
        {this.state.name}
        innerWidth:{this.state.innerWidth}
        <Child name = {this.state.name}/>
        <button style={this.style} onClick = {this.changeState.bind(this)}>change state</button>
      </div>
    );
  }
}

export default App;
