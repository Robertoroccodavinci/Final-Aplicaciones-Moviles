import React from 'react';
import { StyleSheet, View, Dimensions,Text,Pressable } from 'react-native';
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
        name: element.translations.spa.common,
        data: element
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

  const BottomSheet=({ onPressElement })=> {
    return (
      <ScrollBottomSheet
        componentType="FlatList"
        snapPoints={[100, '50%', Dimensions.get('window').height - 200]}
        style={{backgroundColor:'rgba(52, 52, 52, 0.4)'}}
        initialSnapIndex={1}
        renderHandle={() => (
          <View style={styles.header}>
            <View style={styles.panelHandle} />
          </View>
        )}
        data={MARKERS_DATA}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <Pressable item={item} onPress={() => onPressElement(item.id, item.latitude, item.longitude)}
                     style={({ pressed }) => [
                        {
                          backgroundColor: pressed ? 'rgba(52, 52, 52, 0.1)' : 'rgba(52, 52, 52, 0.4)',
                        },
                        
                      ]}>
            <Text style={styles.titulo} >{item.name+" "+item.data.flag}</Text>
          </Pressable>
          
        )}
        contentContainerStyle={styles.contentContainerStyle}
      />
    );

  }
  

  
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        initialRegion={{
          latitude:  -34,  
          longitude: -64,
          latitudeDelta: 30,
          longitudeDelta: 30,
        }}
        mapType="terrain"
      >
        {MARKERS_DATA.map((marker) => (
          <Marker
            key={marker.id}
            id={marker.id}
            icon={marker.data.flag} /* revisar */
            selectedMarker={selectedMarker}
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
  header: {
    alignItems: 'center',
    backgroundColor:'rgba(52, 52, 52, 0.7)',
    paddingVertical: 7,
  },
  panelHandle: {
    width: 41,
    height: 4,
    backgroundColor: '#E1E1E1',
    borderRadius: 17,
  },
  titulo:{
    fontSize:17,
    fontWeight:'bold',
    color:'white',
    paddingLeft:10
    
  },
  texto:{
    
  }
});

