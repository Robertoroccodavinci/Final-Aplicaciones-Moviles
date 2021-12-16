import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image, ScrollView, Linking } from 'react-native';
import { Card } from 'react-native-paper';

import axios from 'axios';

export default function Clima2({ route, navigation }) {
  
  const[pais,setPais] = React.useState(route.params.pais);
  const[clima, setClima] = React.useState([])
  const[datos, setDatos] = React.useState([])
  const estadoClima={
    "Clear" :{ name:"Despejado", icon:'https://www.metaweather.com/static/img/weather/png/64/c.png'},
    "Clouds" : { name: "Nublado", icon:'https://www.metaweather.com/static/img/weather/png/64/hc.png'},
    "Snow" : { name:"Nevando", icon:'https://www.metaweather.com/static/img/weather/png/64/sn.png'},
    "Rain" : { name: "Lloviendo", icon:'https://www.metaweather.com/static/img/weather/png/64/hr.png'},
    "Thunderstorm" : { name: "Tormenta eléctrica", icon:'https://www.metaweather.com/static/img/weather/png/64/t.png'},
    "Drizzle" : { name: "Llovizna", icon:'https://www.metaweather.com/static/img/weather/png/64/lr.png'},
    "Mist" : { name: "Neblina", icon:'https://www.metaweather.com/static/img/weather/png/64/hc.png'},
    "Fog" : { name: "Niebla", icon:'https://www.metaweather.com/static/img/weather/png/64/hc.png'},
    "Smoke" : { name: "Humo", icon:'https://www.metaweather.com/static/img/weather/png/64/hc.png'},
    "Haze" : { name: "Neblina", icon:'https://www.metaweather.com/static/img/weather/png/64/hc.png'},
    "Dust" : { name: "Tormenta de Polvo", icon:'https://www.metaweather.com/static/img/weather/png/64/hc.png'},
    "Sand" : { name: "Tormenta de Arena", icon:'https://www.metaweather.com/static/img/weather/png/64/hc.png'},
    "Ash" : { name: "Cenizas", icon:'https://www.metaweather.com/static/img/weather/png/64/hc.png'},
    "Squall" : { name: "Chubascos", icon: 'https://www.metaweather.com/static/img/weather/png/64/s.png'},
    "Tornado" : { name: "Tornado", icon:'https://www.metaweather.com/static/img/weather/png/64/hc.png'},
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

  const unixToDates = (timestamp) => {
    let date1 =new Date(timestamp*1000)
    let results1 = "";
    
     results1+= date1.getDate()+"/";
    let mes1 = (date1.getMonth()+1 );

    results1+= mes1+"/";
    let anio1 = (date1.getFullYear() ); 

    results1+= anio1+" ";
    let hora1 = (date1.getHours() );

    results1+= hora1+":";
    let minutos1 = ((date1.getMinutes() < 10)? "0"+date1.getMinutes() : date1.getMinutes() );

    results1 += minutos1+":";
    let segundos1 = ((date1.getSeconds() < 10)? "0"+date1.getSeconds() : date1.getSeconds() );



/* 
    results1+= date1.getHours()+":";
    let minutos1 = ((date1.getMinutes() < 10)? "0"+date1.getMinutes() : date1.getMinutes() );

    results1+= date1.getHours()+":";
    let minutos1 = ((date1.getMinutes() < 10)? "0"+date1.getMinutes() : date1.getMinutes() );
    
    results1 += minutos1+":";
    let segundos1 = ((date1.getSeconds() < 10)? "0"+date1.getSeconds() : date1.getSeconds() ); */
    
    results1 += segundos1;
    
    return results1;
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
    
        {/* <Text style = {styles.titulo}> {"Clima en "+pais.capital} </Text> */}
        <Text style = {styles.titulo}>Clima</Text>
{/*         <Text style = {styles.texto}> {pais.translations.spa.common+pais.flag} </Text>
  <Text style = {styles.texto}> Latitud Longitud(latlng):  {pais.latlng[0]+", "+pais.latlng[1]} </Text> */}

        {(clima.weather)? 
            
            <View>
                
                {/* DIA 1 */}
                <Card  style={{borderWidth:1, marginVertical:50, marginHorizontal: 50, borderRadius: 20}} >
{/*                     <Card.Title title={"DIA"} 
        subtitle={"FECHA"} /> */}
                        <Card.Title titleStyle={{fontWeight: 'bold'}} title={pais.capital} subtitleStyle={{fontWeight: 'bold'}}
                        subtitle={unixToDates(clima.dt)} />
                    <Card.Content style = {styles.clima}>

                        <Image resizeMode={'contain'} style = {{ width:50, height:50, marginBottom:6}}  
                                source={{ uri: estadoClima[clima.weather[0].main].icon }} />

                        <Text style = {styles.temp}>{(clima.main.temp-272.15).toFixed()+"°"} </Text>

                    </Card.Content>
                    <Card.Content style = {styles.info2}>
                      <Text style = {styles.descripcion}> Estado:</Text>
                      <Text style = {styles.descripcion}> {estadoClima[clima.weather[0].main].name} </Text>
                    </Card.Content>
                    <Card.Content style = {styles.info2}> 
                        <Text style = {styles.descripcion}> Temperatura Máxima:</Text>
                        <Text style = {styles.descripcion}> {(clima.main.temp_max-272.15).toFixed(1)+"°"} </Text>
                    </Card.Content>
                    <Card.Content style = {styles.info2}> 
                        <Text style = {styles.descripcion}> Temperatura Mínima:</Text>
                        <Text style = {styles.descripcion}> {(clima.main.temp_min-272.15).toFixed(1)+"°"} </Text>
                    </Card.Content>
                    <Card.Content style = {styles.info2}> 
                        <Text style = {styles.descripcion}> Sensación térmica:</Text>
                        <Text style = {styles.descripcion}> {(clima.main.feels_like-272.15).toFixed(1)+"°"} </Text>
                    </Card.Content>
                    <Card.Content style = {styles.info2}>                        
                        <Text style = {styles.descripcion}> Humedad:</Text>
                        <Text style = {styles.descripcion}> {clima.main.humidity+"%"} </Text>
                    </Card.Content>                                                                             
                    <Card.Content style={{marginVertical:3}}>
                      <TouchableOpacity style={ styles.btns } onPress={() => Linking.openURL('https://google.com') }>
                        <Text  style={ styles.btnsTxt }>Más</Text>
                      </TouchableOpacity> 
                    </Card.Content>
                </Card>

                <Card  style={{borderWidth:1, marginBottom:20, marginHorizontal: 30, borderRadius: 20}} >
                    <Card.Content style = {styles.info2}>                         
                        <Text style = {styles.descripcion}> Presion:</Text>
                        <Text style = {styles.descripcion}> {clima.main.pressure+" hPa"} </Text>
                    </Card.Content>
                        <Card.Content style = {styles.info2}> 
                        <Text style = {styles.descripcion}> Salida del Sol:</Text>
                        <Text style = {styles.descripcion}> {unixToDate(clima.sys.sunrise)+" hrs"} </Text>
                    </Card.Content>
                    <Card.Content style = {styles.info2}> 
                        <Text style = {styles.descripcion}> Puesta del Sol:</Text>
                        <Text style = {styles.descripcion}> {unixToDate(clima.sys.sunset)+" hrs"} </Text>
                    </Card.Content>                        
                    <Card.Content style = {styles.info2}> 
                        <Text style = {styles.descripcion}> Visibilidad:</Text>
                        <Text style = {styles.descripcion}> {clima.visibility+" m"} </Text>
                    </Card.Content>
                    <Card.Content style = {styles.info2}> 
                        <Text style = {styles.descripcion}> Dirección del Viento:</Text>
                        <Text style = {styles.descripcion}> {clima.wind.deg+"°"} </Text>
                    </Card.Content>
                    <Card.Content style = {styles.info2}> 
                        <Text style = {styles.descripcion}> Velocidad del Viento:</Text>
                        <Text style = {styles.descripcion}> {clima.wind.speed+" m/s"} </Text>                   
                    </Card.Content>
                    <Card.Content style = {styles.info2}> 
                        <Text style = {styles.descripcion}> Velocidad del Viento:</Text>
                        <Text style = {styles.descripcion}> {"UTC "+(clima.timezone/3600)+":00"} </Text>                   
                    </Card.Content>
                </Card>

           </View>
       
        /* SI NO HAY DATOS */
        : <Text style = {styles.descripcion}>NO HAY DATOS</Text> }   
        
        <TouchableOpacity style={ styles.btns } onPress = { () => {navigation.navigate("Home")} }>
          <Text  style={ styles.btnsTxt }>Volver al Inicio</Text>
        </TouchableOpacity> 

    </ScrollView>
    </View>
 
 );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#becfd7',
    justifyContent:'center',   
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    alignSelf:'center',
    marginTop:20
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
    paddingVertical:2 

  },
  btns: {
    justifyContent: "center",
    backgroundColor: "#ffcd00",
    borderRadius: 6,
    width: "20%",
    marginHorizontal: "38%",
    marginBottom:5,
    elevation:5
  },
  btnsTxt: {
    textAlign: "center",
    color: "black",
    fontSize: 15,
    fontWeight: 'bold',        
  },
  clima:{
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: "center",
    marginLeft: '20%',
  },
  temp: {
    fontSize: 40,
    paddingVertical:1,
    marginRight: '30%',
    fontWeight: 'bold',
  },
  info:{
    fontSize: 15,
    paddingVertical:1,
    justifyContent: 'flex-start'
  },
  info2:{
    width: '100%',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: "center",
    flexWrap: 'wrap',
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