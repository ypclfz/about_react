import React, { Component } from 'react';
import Button from './Button'; // Import a component from another file

class DangerButton extends Component {
  render() {
    return ( <Button Color="red" Text={ this.props.Text }/> );
  }
}

export default DangerButton;