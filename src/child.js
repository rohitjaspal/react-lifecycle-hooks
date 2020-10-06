import React, { Component } from 'react';
import './App.css';

class Child extends Component {
  state = {name : "peter"};
  constructor(){
    super();
    
    console.log(' child constructor');
   }
  componentWillMount(){
    
    console.log(' child component will mount run');
}
  componentDidMount(){
    console.log(' child component did mount run');
  }

  render(){
    console.log('child render');
    return (
      <div className="App">
        child name : {this.props.name}
      </div>
    );
  }
}

export default Child;
