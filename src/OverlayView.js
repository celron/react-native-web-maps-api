import React, { Component } from 'react';
import { OverlayView } from '@react-google-maps/api';

class MapviewOverlayView extends Component {
  render() {
    return (<OverlayView {...this.props}>{this.props.children}</OverlayView>);
  }
}

export default MapviewOverlayView;
