import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import {useMap} from '../components/useMap';
import {mapStyle} from '../components/mapStyle';
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';

var MARKERS_DATA = [];

export default function Map({navigation,route}) {
  let count=1;
  MARKERS_DATA = [];
  

  if(route.params.lista ){
    route.params.lista.map((element) => {
  
      MARKERS_DATA.push({
        id: count.toString(),
        latitude: element.latlng[0],
        longitude: element.latlng[1],
        name: element.capital,
      })
      count++;
    })
  }
  const {
    mapRef,
    selectedMarker,
    handleNavigateToPoint,
    handelResetInitialPosition,
  } = useMap();

  function BottomSheet({ onPressElement }) {
    return (
      <ScrollBottomSheet
        componentType="FlatList"
        snapPoints={[100, '50%', Dimensions.get('window').height - 200]}
        initialSnapIndex={1}
        renderHandle={() => (
          <View style={styles.header}>
            <View style={styles.panelHandle} />
          </View>
        )}
        data={MARKERS_DATA}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <ListItem item={item} onPressElement={onPressElement} />
        )}
        contentContainerStyle={styles.contentContainerStyle}
      />
    );
  }
  

  
  return (
    <View style={styles.container}>
      <MapView
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        initialRegion={{
          latitude:  -34,  
          longitude: -64,
          latitudeDelta: 30,
          longitudeDelta: 30,
        }}
        mapType="standard"
      >
        {MARKERS_DATA.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
          ></Marker>
        ))}
      </MapView>
      <BottomSheet onPressElement={handleNavigateToPoint} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height-40,
  },
});

