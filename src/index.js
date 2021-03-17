import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
export { default as Marker } from './Marker';
export { default as OverlayView } from './OverlayView';
export { default as Circle } from './Circle';
//import mvMarker from './Marker';
//import mvPolyline from './Polyline';
//import mvOverlayView from './OverlayView';
//import mvCallout from './Callout';

const defaultContainerStyle = {
  width: '100%',
  height: '100%',
};

const defaultCenter = {
  lat: 40.6976637,
  lng: -74.1196737,
};

function MapView(props) {
  // the googleMapsApiKey has to be loaded as a prop
  const { center, containerStyle, zoom, handleMapContext, options } = props;
  const [zoomState, setZoom] = React.useState(zoom === undefined ? 10 : zoom);
  const [map, setMap] = React.useState(null);
  const [centerState, setCenter] = React.useState(center === undefined ? defaultCenter : center);
  const [containerStyleState, setContainerStyle] = React.useState(
    containerStyle === undefined ? defaultContainerStyle : containerStyle
  );
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: props.googleMapsApiKey,
  });

  const onDragEnd = () => {
    console.log('idled end');
    const { onRegionChangeComplete } = props;
    if (map && onRegionChangeComplete) {
      const center = map.getCenter();
      onRegionChangeComplete({
        lat: center.lat(),
        lng: center.lng(),
      });
    }
  };
  const onLoad = React.useCallback(function callback(map) {
    if (handleMapContext !== undefined) handleMapContext(map);
    setMap(map);
    map.setCenter(centerState);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyleState}
      center={centerState}
      zoom={zoomState}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={onClick}
      onIdle={onDragEnd}
      options={options}>
      {props.children /* Child components, such as markers, info windows, etc. */}
    </GoogleMap>
  ) : (
    <div />
  );
}
//MapView.Marker = Marker;
export default React.memo(MapView);
