import React, { Component } from 'react';
import { Marker } from '@react-google-maps/api';

class MapViewMarker extends Component {
  state = {
    isOpen: false,
  };
  showCallout() {
    this.setState({ isOpen: true });
  }
  hideCallout() {
    this.setState({ isOpen: false });
  }
  render() {
    const { title, position, onClick, ...rest } = this.props;

    const childrenWithProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, { hideCallout: this.hideCallout.bind(this) });
    });
    return (
      <Marker
        {...rest}
        title={title}
        position= {position}
        onClick={onClick}>
        {this.state.isOpen && childrenWithProps}
      </Marker>
    );
  }
}

export default MapViewMarker;
