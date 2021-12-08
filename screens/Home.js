import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, Text, View,TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {

  return (
   
    <View style = {styles.container}>
        <Text style={ styles.titulo }> 
            Bienvenido a la APi Paises
        </Text>

      <Text style={ styles.texto }> 
        Busca el Pais, Ciudad, o latitud y longitud del lugar donde quieras saber el clima.
      </Text> 
        <TextInput style = {styles.searchBar} placeholder = "Ingrese el Pais" onChangeText = {text => setText(text)}/>
        <TouchableOpacity style={ styles.btns }
                          onPress={() => navigation.navigate("Home")}>
              <Text  style={ styles.btnsTxt }>Buscar</Text>
        </TouchableOpacity>

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
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    textAlign: "center",
  },
  texto: {
    fontSize: 20,
    textAlign: "left",
    marginBottom: 20,
    marginHorizontal: 20
  },
  searchBar: {
    height: 50,
    width: 300,
    fontSize: 15,
    textAlign: "center",
    borderColor: "rgb(40, 162, 219)",
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: 'white',
    marginBottom: 10,
    alignSelf: "center"
  },
  btns: {
    justifyContent: "center",
    backgroundColor: "#ffcd00",
    borderRadius: 6,
    height: "5%",
    width: "60%",
    marginHorizontal: "25%",
  },
  btnsTxt: {
    textAlign: "center",
    color: "black",
    fontSize: 15,
    fontWeight: 'bold',        
  },
});