import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';

//implementer inicio de sesion con google

export default function Login({ navigation }) {
    
  const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: ''
  });
  
    React.useEffect(() => {
      if (response?.type === 'success') {
          navigation.navigate("Home", {auth: response.authentication})
        }
    }, [response]);


  return (
   
    <View>
        <Text> 
            Bienvenido a la APP, inicie sesion
        </Text>
        <TouchableOpacity style={ styles.btns } 
                          onPress={() => navigation.navigate("Home")}>
              <Text style={ styles.btnsTxt } >Iniciar Sessión</Text>
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