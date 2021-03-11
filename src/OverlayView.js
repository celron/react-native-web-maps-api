import React, { Component } from 'react';
import { OverlayView } from '@react-google-maps/api';

class MapviewOverlayView extends Component {
  render() {
    console.log(this.props);
    return (<OverlayView {...this.props}>
      {this.props.children}
    </OverlayView>);
  }
}

export default MapviewOverlayView;
