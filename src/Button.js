import React, {Component} from 'react';
import './Button.css';

export default class Button extends Component{
  constructor(props){
    super(props)
    this.state = {
      active: false,
      deltaX: 0,
      deltaY: 0,
      n: 0
    }
    this.myRef = React.createRef()
  }

  dot(e){
    let {x, y} = this.myRef.current.getBoundingClientRect()
    let {clientX, clientY} = e
    let deltaX = clientX - x - 6
    let deltaY = clientY - y - 6

    this.setState({
      active: true,
      n: this.state.n+1,
      deltaX: deltaX,
      deltaY: deltaY
    })
  }

  y(){
    console.log('111')
    this.setState({
      active: false
    })
  }

  render(){
    return (
      <div className="wrapper">
        <button onClick={this.dot.bind(this)} className="btn" ref={this.myRef}>
          <span className="btn-font">{this.props.write}</span>
          <span> - {this.state.n}次</span>
          {
            this.state.active ?
              <span className="dot" style={{left: this.state.deltaX, top: this.state.deltaY}}
                onAnimationEnd={this.y.bind(this)}
              ></span> : ''
          }
        </button>
      </div>
    )
  }
}