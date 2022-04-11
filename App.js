import React, {useState, useEffect} from 'react';
import {Button} from 'react-native'
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  const [initialLocation, setInitialLocation] = useState({latitude: -33.399455892461916,
                                                          longitude: -70.5762546898385,
                                                          latitudeDelta: 0.005,
                                                          longitudeDelta: 0.005})

  const [initialMarker,setInitialMarker] = useState({latitude: -33.399455892461916, longitude: -70.5762546898385})
                                                           
  return (
    <View style={styles.container}>
      <Button title = "googleMaps"/>
      <MapView style={styles.map} region={initialLocation}>
        {/* Logic to render a list of markers on the map*/}
        {/*{this.state.markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          />
        ))} */}
        <Marker
            key={"Agrosat"}
            coordinate={initialMarker}
            title={"Agrosat Internacional"}
            description={"Agrosat"}
          />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
