import React from 'react';
import { StyleSheet, View, Dimensions,Text,Pressable,TextInput } from 'react-native';
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import {useMap} from '../components/useMap';
import {mapStyle} from '../components/mapStyle';
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';


var MARKERS_DATA = [];



export default function Map({navigation,route}) {
  let count=1;
  const maxCount=10;
  MARKERS_DATA = [];
  const[search, setSearch] = React.useState("");
  const { mapRef,
          selectedMarker,
          handleNavigateToPoint,
          handelResetInitialPosition,
        } = useMap(); 

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
      
      <ScrollBottomSheet
        componentType="FlatList"
        snapPoints={[100, '50%', Dimensions.get('window').height - 200]}
        style={{backgroundColor:'rgba(52, 52, 52, 0.4)'}}
        initialSnapIndex={1}
        renderHandle={() => (
          <View >
            
              <View style={styles.header}>
                <View style={styles.panelHandle} />
              </View>
              
             <View style={styles.search}>
            
             <TextInput style = {styles.searchBar} placeholder = "Ingrese el Pais" onChangeText={text => setSearch(text)} />
                
                {MARKERS_DATA.map((item) =>{
                 count=0
                 if(count<=maxCount&&search !== ''&& item.name.toLowerCase().includes(search.toLocaleLowerCase())){
                  return(count++,
                    <View style={styles.pais} key={item.id}>
                      <Pressable  item={item} onPress={() => handleNavigateToPoint(item.id, item.latitude, item.longitude, item.data.area)}
                                style={({ pressed }) => [
                                    {
                                      backgroundColor: pressed ? 'rgba(52, 52, 52, 0.3)' : 'rgba(52, 52, 52)',
                                      alignItems:'center'
                                    },
                                    
                                  ]}>
                        <Text style={styles.titulo} >{item.name+" "+item.data.flag}</Text>
                      </Pressable>

                      <Pressable onPress={() => {navigation.navigate("TabPais", {pais: item.data})}}>
                        <Text style={styles.texto} >Ver Detalles</Text>
                      </Pressable>
                    </View>
                    )
                 } else if(count === 0) {
                  <Text style={styles.titulo} >Ingrese el nombre del pais</Text>
                 }
                 
                })}
              
             </View>

              
            
          </View>
        )}
       
        contentContainerStyle={styles.contentContainerStyle}
      />

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
  search: {
    alignItems: 'center',
    backgroundColor:'rgba(52, 52, 52, 0.7)',
    paddingVertical: 7,
    height:Dimensions.get('window').height-20
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
    color:'lightblue',
    alignSelf:'center'

  },
  pais:{
    paddingBottom:10,
    

  },
  searchBar: {
    height: 35,
    width: 300,
    fontSize: 15,
    textAlign: "center",
    borderColor: "#ffcd00",
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: 'white',
    alignSelf: "center",
    elevation:5
  },
});

