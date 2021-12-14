import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

import axios from 'axios';

export default function Clima2({ route, navigation }) {
  
  const[pais,setPais] = React.useState(route.params.pais);
  const[clima, setClima] = React.useState([])
  const[datos, setDatos] = React.useState([])
  const estadoClima={
    "Clear" : "Despejado",
    "Clouds" : "Nublado",
    "Snow" : "Nevando",
    "Rain" : "Lloviendo",
    "Thunderstorm" : "Tormenta eléctrica",
    "Drizzle" : "Llovizna",
    "Mist" : "Neblina",
    "Fog" : "Niebla",
    "Smoke" : "Humo",
    "Haze" : "Neblina",
    "Dust" : "Tormenta de Polvo",
    "Sand" : "Tormenta de Arena",
    "Ash" : "Cenizas",
    "Squall" : "Chubascos",
    "Tornado" : "Tornado"
  }

  const unixToDate = (timestamp) => {
    let date =new Date(timestamp*1000)
    let results = "";
    
    results+= date.getHours()+":";
    let minutos = ((date.getMinutes() < 10)? "0"+date.getMinutes() : date.getMinutes() );
    
    results += minutos+":";
    let segundos = ((date.getSeconds() < 10)? "0"+date.getSeconds() : date.getSeconds() );
    
    results += segundos;
    
    return results;


  }

  React.useEffect(() => {
    /* fetch("http://www.metaweather.com/api/location/search/?query="+pais.capital) */
    fetch("http://api.openweathermap.org/data/2.5/weather?q="+pais.capital+"&appid=70ad8d4347bac947713211b26d9c822f" )
    .then( (response) => { return response.json() } )
    .then( (data) => { setClima(data) })
    .catch(error => console.log(error))
    
  }, []);
  
  

  return (
   
    <View style = {styles.container}>  
    <ScrollView>  
        <StatusBar hidden/>
    
        <Text style = {styles.titulo}> {"Clima en "+pais.capital} </Text>

        <Text style = {styles.texto}> {pais.translations.spa.common+pais.flag} </Text>
        <Text style = {styles.texto}> Latitud Longitud(latlng):  {pais.latlng[0]+", "+pais.latlng[1]} </Text>

        {(clima.weather)? 
            
            <View>
                
                {/* DIA 1 */}
                <Card  style={{borderWidth:1, marginVertical:3}} >
                    <Card.Title title={"DIA"} 
                                subtitle={"FECHA"} />
                    <Card.Content>

                        <Image resizeMode={'contain'} style = {{ width:50, height:50, marginBottom:6}}  
                                source={{ uri: `http://openweathermap.org/img/w/${clima.weather[0].icon}.png` }} />


                        <Text style = {styles.descripcion}> Estado:  {estadoClima[clima.weather[0].main]} </Text>
                        <Text style = {styles.descripcion}> Humedad:  {clima.main.humidity+"%"} </Text>
                        <Text style = {styles.descripcion}> Presion:  {clima.main.pressure+" hPa"} </Text>
                        <Text style = {styles.descripcion}> Temperatura:  {(clima.main.temp-272.15).toFixed(2)+"°"} </Text>
                        <Text style = {styles.descripcion}> Sensación térmica:  {(clima.main.feels_like-272.15).toFixed(2)+"°"} </Text>
                        <Text style = {styles.descripcion}> Max Temperatura:  {(clima.main.temp_max-272.15).toFixed(2)+"°"} </Text>
                        <Text style = {styles.descripcion}> Min Temperatura:  {(clima.main.temp_min-272.15).toFixed(2)+"°"} </Text>
                        <Text style = {styles.descripcion}> ____________________ </Text>
                        <Text style = {styles.descripcion}> Sunrise:  {unixToDate(clima.sys.sunrise)} </Text>
                        <Text style = {styles.descripcion}> Sunset:  {unixToDate(clima.sys.sunset)} </Text>
                        <Text style = {styles.descripcion}> Visibilidad:  {clima.visibility+"m"} </Text>
                        <Text style = {styles.descripcion}> Dirección del Viento:  {clima.wind.deg+"°"} </Text>
                        <Text style = {styles.descripcion}> Velocidad del Viento:  {clima.wind.speed+"m/s"} </Text>
                   
                    </Card.Content>
                </Card>

           </View>
       
        /* SI NO HAY DATOS */
        : <Text style = {styles.descripcion}>NO HAY DATOS</Text> }        


        <TouchableOpacity style={ styles.btns } onPress={() => navigation.navigate("Home") } />

    </ScrollView>
    </View>
 
 );

}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center', 
    paddingVertical:20  
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    alignSelf:'center',
    marginBottom:10
  },
  texto: {
    fontSize: 16,
    textAlign: "left",
    marginBottom: 5,
    marginHorizontal: 2

  },
  descripcion: {
    fontSize: 14,
    textAlign: "left",
    paddingVertical:1
   

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



/*  

{
    "coord": {
        "lon": -66.8792,
        "lat": 10.488
    },
    "weather": [
        {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
        },
        {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 296.31,
        "feels_like": 296.74,
        "temp_min": 292.82,
        "temp_max": 296.31,
        "pressure": 1013,
        "humidity": 79
    },
    "visibility": 10000,
    "wind": {
        "speed": 0.89,
        "deg": 346,
        "gust": 2.24
    },
    "clouds": {
        "all": 40
    },
    "dt": 1639416083,
    "sys": {
        "type": 2,
        "id": 2004667,
        "country": "VE",
        "sunrise": 1639391785,
        "sunset": 1639433246
    },
    "timezone": -14400,
    "id": 3646738,
    "name": "Caracas",
    "cod": 200
}

INFO WEATHER MAIN VALUES
https://openweathermap.org/weather-conditions

*/