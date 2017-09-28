import React, { Component } from 'react';

class Button extends Component {
  render() {
    return ( <button type="button" style={ {backgroundColor: this.props.Color, width: 100, height: 40} }>{ this.props.Text }</button> ) 
  }
}

export default Button; 