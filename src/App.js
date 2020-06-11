import React from 'react';
import './App.css';
import Button from './Button';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      n: 0
    }
  }

  render(){
    return (
      <div className="App">
        <Button write="点我呀"/>
        <Button write="你点我呀"/>
        <Button write="哼"/>
      </div>
    );
  }
}

export default App;
