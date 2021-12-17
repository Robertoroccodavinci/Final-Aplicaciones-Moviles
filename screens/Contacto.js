import { StatusBar } from 'expo-status-bar';
import React, {component} from 'react';
import {FlatList, StyleSheet, TextInput, Image, Text, View,TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import mapStyle from '../components/mapStyle.js';

export default function Contacto({ navigation }) {

  return (
     
    <View style = {styles.container}>

        <Text style={ styles.titulo }> 
            ¿Quienes Somos?
        </Text>
        <Text style={ styles.texto }> 
            Somos estudiantes en la Escuela Da Vinci de la carrera de Analista en Sistemas
        </Text> 
        <Text style={ styles.texto }> 
            * Roberto Rocco
        </Text> 
        <Text style={ styles.texto }> 
            * Jhorky Escalante Quispe
        </Text> 

        <Text style={ styles.titulo }> Visitanos </Text>
        <MapView  customMapStyle={mapStyle}
                  provider={PROVIDER_GOOGLE}
                  style={styles.mapStyle}
                  initialRegion={{
                    latitude:  -34.604339111357305,
                    longitude:  -58.39602025889558,
                    latitudeDelta: 0.009,
                    longitudeDelta: 0.009,
                  }}
                  mapType="standard" > 
                  <Marker 
                  coordinate={{
                    latitude:  -34.604339111357305,
                    longitude:  -58.39602025889558,
                  }}
                ></Marker>
          </MapView>
        
        
    </View>
    
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#becfd7',
    alignItems: 'center',
    justifyContent: 'center',  
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'


  },
  texto: {
    fontSize: 17,
    textAlign: "left",
    marginBottom: 20,
    marginHorizontal: 20,
    color: 'black'

  },
  mapa: {
    width:"90%",
    height:"30%",
    alignSelf: "center"
  },
  item: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "left",
  },
  mapStyle: {
    width: '90%',
    height:'40%',    
  },
});