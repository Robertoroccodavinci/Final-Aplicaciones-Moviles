import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';

//implementer inicio de sesion con google

export default function Login({ navigation }) {
    
  const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '601630457399-31isnqq8n9g76lhiabu1nt6drrthbkkf.apps.googleusercontent.com'
  });
  
    React.useEffect(() => {
      if (response?.type === 'success') {
          navigation.navigate("DrawerHome", {auth: response.authentication})
        }
    }, [response]);


  return (
   
    <View style = {styles.container}>
        <Text style = {styles.titulo}> 
            Bienvenido a nuestro Proyecto
        </Text>
        <Text style={ styles.texto }> 
          Necesita iniciar session para poder acceder a la App.
        </Text>         
        <TouchableOpacity style={ styles.btns }
                          onPress={() => {promptAsync();}}>
              <Text  style={ styles.btnsTxt }>Iniciar Sessión</Text>
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
    color: 'red'
  },
  texto: {
    fontSize: 20,
    textAlign: "left",
    marginBottom: 20,
    marginHorizontal: 20

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