# react-native-web-maps-api
> React Native for Web implementation of react-native-maps

This is based on react-native-web-community/react-native-web-maps
It was created because that repository provides an react native interface to google maps through
tomchentw.github.io/react-google-maps, is not actively maintained, however a successor
JustFly1984/react-google-maps-api or @react-google-maps/api is more actively maintained.

This uses @react-google-maps/api

It ia a work in progress

## Getting started
`$ npm install react-native-web-maps --save`

To implement `react-native-web-maps-api` we're using the `@react-google-maps/api` package:

`$ npm install @react-google-maps/api --save`

Alias the package in your webpack config:

```
resolve: {
    alias: {
        'react-native': 'react-native-web',
        ...
        'react-native-maps': 'react-native-web-maps',
    }
}
```

You need to have a Google Maps Javascript API key to use the map, you can get one [here](https://developers.google.com/maps/documentation/javascript/get-api-key).

Then, you should add this script to your index.html:
``` html
<MapView googleMapsApiKey = {"MAPAPIKEY"}>
</MapView>
```

## Usage

``` javascript
import MapView from 'react-native-maps';
```
See the original [documentation](https://github.com/airbnb/react-native-maps).

The supported components are:

* `MapView`
* `Marker`
* `Polyline`
* `Circle`
* `InfoWindow`
* `OverlayView`

This is a 'react wrapper' around react-google-maps-api

## Examples
See the [storybook](https://react-native-web-community.github.io/react-native-web-maps/storybook/index.html).

## Contributing
PRs are welcome!
