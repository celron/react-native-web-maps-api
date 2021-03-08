import React, { Component } from 'react';
import { OverlayView } from '@react-google-maps/api';

class MapviewOverlayView extends Component {
  render() {
    return <OverlayView {...this.props} />;
  }
}

export default MapviewOverlayView;
