import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import He from './He.js'



class App extends React.Component {

  render(){
    let recordN = this.props.n
    return (
      <div className="App">
        <div className="times">你点击了{recordN}次</div>
        <He plus={this.props.add1.bind(this)} content="+1"/>
        <He plus={this.props.add1AfterOneSecond.bind(this)} content="1s后加1"/>
        <He plus={this.props.add1IfOdd.bind(this, recordN)} content="若是单数则+1"/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    n: state.n
  }
}

function mapDispatchToProps(dispatch){
  return {
    add1: ()=> dispatch({type: 'add', payload: 1}),
    add1AfterOneSecond: ()=> {
      setTimeout(function(){
        dispatch({type: 'add', payload: 1})
      }, 1000)
    },
    add1IfOdd: (x)=>{
      if(x%2 === 1){
        dispatch({type: 'add', payload: 1})
      }
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
