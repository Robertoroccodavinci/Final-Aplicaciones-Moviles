import { StatusBar } from 'expo-status-bar';
import React, {component} from 'react';
import {FlatList, StyleSheet, TextInput, Image, Text, View,TouchableOpacity, ScrollView } from 'react-native';
//import { WebView } from 'react-native-webview';


import mapa from "../images/mapa.png";

/* const iframeString = {"<iframe style="width:100%; height:350px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.9965489892207!2d-58.396387782290056!3d-34.60451056844648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaea670d4e67%3A0x2198c954311ad6d9!2sDa%20Vinci!5e0!3m2!1ses!2sar!4v1600835578184!5m2!1ses!2sar"></iframe>"} */

/* https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.9965489892207!2d-58.396387782290056!3d-34.60451056844648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaea670d4e67%3A0x2198c954311ad6d9!2sDa%20Vinci!5e0!3m2!1ses!2sar!4v1600835578184!5m2!1ses!2sar */
export default function Contacto({ navigation }) {

  return (
     
    <View style = {styles.container}>

        <Text style={ styles.titulo }> 
            ¿Quienes Somos?
        </Text>
        <Text style={ styles.texto }> 
            Somos estudiantes en la Escuela Da Vinci de la carrera de Analista en Sistemas
        </Text> 
    <FlatList
    data={[
        {key: '* Jhorky Escalante Quispe'},
        {key: '* Roberto Andrés Rocco'},
      ]}
      renderItem={({item}) => <Text style={styles.item }>{item.key}</Text>}
    />
     
        <Text style={ styles.titulo }> 
            Visitanos
{/*             <WebView
            scalesPageToFit={true}
            bounces={false}
            javaScriptEnabled
            style={{ height: 500, width: 300 }}
            source={{
              html: `
                    <!DOCTYPE html>
                    <html>
                      <head></head> // <--add header styles if needed
                      <body>
                        <div id="baseDiv">${iframeString}</div> //<--- add your iframe here
                      </body>
                    </html>
              `,
            }}
            automaticallyAdjustContentInsets={false}
        />   */}          

        </Text>
        <Image style = {styles.mapa} source = {mapa}/>           
        <Text style={ styles.titulo }> 
            Contactanos
        </Text>    
        
        <TouchableOpacity style={ styles.btns }
                          onPress={() => navigation.navigate("Home")}>
              <Text  style={ styles.btnsTxt }>Enviar</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'


  },
  texto: {
    fontSize: 17,
    textAlign: "left",
    marginBottom: 20,
    marginHorizontal: 20

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
  textBox: {
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
  TextArea: {
    height: 80,
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