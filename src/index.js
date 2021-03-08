import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
export {default as Marker} from './Marker';
export {default as OverlayView} from './OverlayView';
export {default as Circle} from './Circle';
//import mvMarker from './Marker';
//import mvPolyline from './Polyline';
//import mvOverlayView from './OverlayView';
//import mvCallout from './Callout';

const defaultContainerStyle = {
  width: '500px',
  height: '500px'
};

const defaultCenter = {
  lat: 40.6976637,
  lng: -74.1196737
};

function MapView(props) {
  // the googleMapsApiKey has to be loaded as a prop
  console.log("props:");
  console.log(props);
  const {center, containerStyle, zoom, handleMapContext, options} = props
  console.log(center);
  const [zoomState, setZoom] = React.useState(zoom===undefined?10:zoomValue);
  const [map, setMap] = React.useState(null);
  const [centerState, setCenter] = React.useState(center===undefined?defaultCenter:center);
  const [containerStyleState, setContainerStyle] = React.useState(containerStyle===undefined?defaultContainerStyle:containerStyle)
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: props.googleMapsApiKey
  })
  console.log("CenterState")
  console.log(centerState);

  const getCamera = () => {
    return {
      zoom: zoomState,
      center: centerState,
      heading: map.getHeading(),
    };
  };
  const animateCamera = (camera) => {
    setZoom(camera.zoom);
    setCenter(camera.center);
  }

  const animateToRegion = (coordinates) => {
    setCenter(coordinates)
  }
  const onClick = () => {
    console.log('click')
  }
  const onDragEnd = () => {
    console.log("idled end");
    const { onRegionChangeComplete } = props;
    if (map && onRegionChangeComplete) {
      const center = map.getCenter();
      onRegionChangeComplete({
        latitude: center.lat(),
        longitude: center.lng(),
      });
    }
  };
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    handleMapContext(map)
    setMap(map)
    map.setCenter(centerState)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  console.log("zoom"+zoomState);
  return isLoaded ? (
      <GoogleMap
          mapContainerStyle={containerStyleState}
          center={centerState}
          zoom={zoomState}
          onLoad={onLoad}
          onUnmount={onUnmount}
          onClick={onClick}
          onIdle={onDragEnd}
          options={options}
      >
        {props.children /* Child components, such as markers, info windows, etc. */ }
       </GoogleMap>
  ) : <div></div>
}
//MapView.Marker = Marker;
export default React.memo(MapView)