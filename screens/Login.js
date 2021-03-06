import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';

//implementer inicio de sesion con google

export default function Login({ navigation }) {
  
  /* TRAEMOS LOS DATOS */
  const [paises, setPaises] = React.useState([]);
  const [estado, setEstado] = React.useState(0);


  const fetchLista = () => {
    
   /*  fetch("https://restcountries.com/v3.1/subregion/south america")  */
    fetch("https://restcountries.com/v3.1/all") 
    .then( response =>  response.json() )
    .then( data => { setPaises(data) } )
    
  }

  fetchLista();

  /* INICIO DE SESION */
   const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '601630457399-31isnqq8n9g76lhiabu1nt6drrthbkkf.apps.googleusercontent.com'
  });
  
    React.useEffect(() => {
      if (response?.type === 'success') {
          const { authentication } = response;
          paises.sort( (x, y) => {
            let a = x.translations.spa.common,
                b = y.translations.spa.common;
            return a == b ? 0 : a > b ? 1 : -1;
        })
          navigation.navigate("DrawerHome", {datos: paises, 
                                            auth: response.authentication})
        }
    }, [response]);
     
  return (
   
    <View style = {styles.container}>
      <StatusBar hidden />
        <Text style = {styles.titulo}> 
            Bienvenido a nuestro Proyecto
        </Text>
        <Text style={ styles.texto }> 
          Necesitas iniciar sesión para poder acceder a la App.
        </Text>         
        <TouchableOpacity style={ styles.btns }
                          onPress={() =>  {promptAsync();} 
                          //navigation.navigate("DrawerHome",{datos: paises})
                          }>
              <Text  style={ styles.btnsTxt }>Iniciar Sesión</Text>
        </TouchableOpacity>

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
    fontSize: 20,
    textAlign: "left",
    marginBottom: 20,
    marginHorizontal: 20

  },
  btns: {
    justifyContent: "center",
    backgroundColor: "#ffcd00",
    borderRadius: 6,
    width: "60%",
    marginHorizontal: "20%",
    padding:10,
    elevation:5
  },
  btnsTxt: {
    textAlign: "center",
    color: "black",
    fontSize: 15,
    fontWeight: 'bold',        
  },
});