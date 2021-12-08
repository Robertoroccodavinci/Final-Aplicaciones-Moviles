import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {

  return (
   
    <View>

        <Text> 
            Bienvenido a la APP, Home
        </Text>
        <Text> 
            Busca el Pais, Ciudad, o latitud y longitud del lugar donde quieras saber el clima.
        </Text>
        
        <TouchableOpacity 
                          onPress={() => navigation.navigate("Home")}>
              <Text  >Iniciar Sessión</Text>
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
});