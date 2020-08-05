import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import MapView, { Marker, Polyline } from 'react-native-maps';
import axios from 'axios';

const PossibleRoutes = (props) => {
  const [loading, setLoading] = useState(true);
  const [route_coordinates, setRouteCoordinationCar] = useState([]);
  const locations = useSelector((state) => state.location);

  const getRoute = async (mode) => {
    try {
      // we are using parseFloat() because HERE API expects a float
      let from_lat = parseFloat(locations.pickup.latitude);
      let from_long = parseFloat(locations.pickup.longitude);
      let to_lat = parseFloat(locations.destination.latitude);
      let to_long = parseFloat(locations.destination.longitude);
      // we will save all Polyline coordinates in array
      let route_coordinates = [];
      const res = await axios.get(
        `https://route.ls.hereapi.com/routing/7.2/calculateroute.json?apiKey=1KgX9HXsbICB9OiqnMPTq7GPw2HLFiMy_5TZNuZ0yo4&waypoint0=geo!${from_lat},${from_long}&waypoint1=geo!${to_lat},${to_long}&mode=fastest;bicycle;traffic:enabled&legAttributes=shape`
      );
      res.data.response.route[0].leg[0].shape.forEach((m) => {
        let latlong = m.split(',');
        let latitude = parseFloat(latlong[0]);
        let longitude = parseFloat(latlong[1]);
        route_coordinates.push({ latitude: latitude, longitude: longitude });
      });
      // console.log(route_coordinates);

      setRouteCoordinationCar(route_coordinates);
    } catch (er) {
      console.log(er.response.data);
      console.log(er);
    }
  };
  const [text, setText] = useState('');
  const x = [
    'Checking all possible routes...',
    'Finding Best Route for you...',
  ];
  useEffect(() => {
    getRoute();
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 6000);
    let i = 0;
    let j = 0;
    const interval = setInterval(() => {
      if (i > x[j].length - 1) {
        setText('');
        i = 0;
        j++;
      }

      if (j > x.length - 1) {
        clearInterval(interval);
        // setText('Confirming your booking...');
      } else {
        setText((pre) => pre + x[j][i]);
        i++;
      }
    }, 80);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);
  if (!locations.destination) {
    return null;
  }
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            marginVertical: 20,
          }}
        >
          {text}
        </Text>
        <ActivityIndicator color="black" size="large" />
      </View>
    );
  }
  return (
    <MapView
      style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      }}
      region={{
        latitude: locations.pickup.latitude,
        longitude: locations.pickup.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Polyline
        coordinates={route_coordinates}
        strokeWidth={7}
        strokeColor="red"
        geodesic={true}
      />
      <Marker
        coordinate={{
          latitude: locations.pickup.latitude,
          longitude: locations.pickup.longitude,
        }}
        title="Starting location"
      />
      <Marker
        coordinate={{
          latitude: locations.destination.latitude,
          longitude: locations.destination.longitude,
        }}
        title="Finishlocation"
      />
    </MapView>
  );
};

export default PossibleRoutes;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    minHeight: Dimensions.get('window').height,
  },
  imageContainer: {
    width: '100%',
    height: 300,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#55a630',
  },
  sub: {
    fontWeight: '400',
    fontSize: 18,
    marginVertical: 5,
  },
});
