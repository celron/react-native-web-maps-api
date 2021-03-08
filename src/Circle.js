import React, { Component } from 'react';
import { Circle } from '@react-google-maps/api';

class MapViewCircle extends Component {
  render() {
    return <Circle {...this.props} />;
  }
}

export default MapViewCircle;
