import React from 'react';
import './He.css';

export default class He extends React.Component{

  render(){
    return (
      <div>
        <button onClick={this.props.plus}>{this.props.content}</button>
      </div>
    )
  }
} 