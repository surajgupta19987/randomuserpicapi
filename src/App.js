import React,{Component} from 'react';
import axios from 'axios';




class App extends Component {
  constructor(props){
  super(props)
  this.state={
    user:[]
  }
}
componentWillUnmount(){
  axios('https://api.randomuser.me/?nat=us&results=5').than(response=> this.setState({user:response}))
}
  render(){
  return (
    <div className="App">
      <h1>Cubexo</h1>
    </div>
  );
}
}

export default App;
