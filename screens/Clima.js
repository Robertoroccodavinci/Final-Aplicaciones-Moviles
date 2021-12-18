import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

export default function Clima({ route, navigation }) {

  const[clima, setClima] = React.useState([])
  const[datos, setDatos] = React.useState([])
  const[pais,setPais] = React.useState(route.params.pais);

  const estadoClima={
    "Clear" : "Despejado",
    "Heavy Cloud" : "Nublado",
    "light Cloud" : "Parcialmente nublado",
    "Snow" : "Nevando",
    "Heavy Rain" : "Lloviendo",
    "Light Rain" : "Llovizna",
    "Showers" : "Chubascos",
    "Thunderstorm" : "Tormenta eléctrica",
    "Hail" : "Granizando"
  }
  
  React.useEffect(() => {


    fetch("http://www.metaweather.com/api/location/search/?query="+pais.capital)
    .then( (response) =>  {return response.json()} )
    .then( (data) => { setDatos(data) })
    .catch(error => console.log(error))

  }, [pais]);

  React.useEffect(() => {

    if(datos[0]){
        fetch("http://www.metaweather.com/api/location/"+datos[0].woeid+"/")
        .then(response =>  {return response.json()}  )
        .then(data =>  {setClima(data) })
        .catch(error => console.log(error));
    }

  }, [datos]);


  
  

  return (
   
    <View style = {styles.container}>  
    <ScrollView>  
        <StatusBar hidden/>
    
        <Text style = {styles.titulo}> {"Clima en "+pais.capital} </Text>

        <Text style = {styles.texto}> {pais.translations.spa.common+pais.flag} </Text>
        <Text style = {styles.texto}> Latitud Longitud(latlng):  {pais.latlng[0]+", "+pais.latlng[1]} </Text>

        {/* ICONOS http://openweathermap.org/img/w/02n.png */}

        {(clima.consolidated_weather)? 
            <View>
            {clima.consolidated_weather.map(element => {
                return(

                    <Card key={element.applicable_date}  style={{borderWidth:1, marginVertical:3}} >
                    <Card.Title title={element.applicable_date} 
                                subtitle={element.created} />
                    <Card.Content>
                        <Image resizeMode={'contain'} style = {{ width:50, height:50, marginBottom:6}}  
                                source={{ uri: "https://www.metaweather.com/static/img/weather/png/"+element.weather_state_abbr+".png" }} />
                        <Text style = {styles.descripcion}> Estado:  {estadoClima[element.weather_state_name]} </Text>
                        <Text style = {styles.descripcion}> Posibilidad de precipitaciones:  {element.predictability+"%"} </Text>
                        <Text style = {styles.descripcion}> Humedad:  {element.humidity+"%"} </Text>
                        <Text style = {styles.descripcion}> Presion:  {element.air_pressure+" hPa"} </Text>
                        <Text style = {styles.descripcion}> Temperatura:  {(element.the_temp).toFixed(2)+"°"} </Text>
                        <Text style = {styles.descripcion}> Max Temperatura:  {(element.max_temp).toFixed(2)+"°"} </Text>
                        <Text style = {styles.descripcion}> Min Temperatura:  {(element.min_temp).toFixed(2)+"°"} </Text>
                        <Text style = {styles.descripcion}> Direccion del viento:  {element.wind_direction_compass+", "+(element.wind_direction).toFixed(2)+"°"} </Text>
                        <Text style = {styles.descripcion}> Velocidad del Viento:  {(element.wind_speed*1.60934).toFixed(2)+" kmph"} </Text>
                    </Card.Content>
                    </Card>

                )


            })}
                

                
           </View>

        /* SI NO HAY DATOS */
        : <Text style = {styles.descripcion}>NO HAY DATOS</Text>}        


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
    "consolidated_weather": [
        {
            ###########################################################################################################
            ###########################################################################################################
            
            "id": 5820480029196288,
            "weather_state_name": "Showers",
            "weather_state_abbr": "s",
            "wind_direction_compass": "NNE",
            "created": "2021-12-12T23:09:55.741174Z",
            "applicable_date": "2021-12-12",
            "min_temp": 17.03,
            "max_temp": 24.869999999999997,
            "the_temp": 25.42,
            "wind_speed": 4.027407172767041,
            "wind_direction": 28.70365733717988,
            "air_pressure": 1013.0,
            "humidity": 75,
            "visibility": 12.314955658951721,
            "predictability": 73
        },
        {
            ###########################################################################################################
            ###########################################################################################################

            "id": 5094124957990912,
            "weather_state_name": "Light Rain",
            "weather_state_abbr": "lr",
            "wind_direction_compass": "NNE",
            "created": "2021-12-12T23:09:58.477266Z",
            "applicable_date": "2021-12-13",
            "min_temp": 17.53,
            "max_temp": 24.14,
            "the_temp": 24.965,
            "wind_speed": 3.5593628553302055,
            "wind_direction": 13.857093781634326,
            "air_pressure": 1014.0,
            "humidity": 78,
            "visibility": 9.27862532808399,
            "predictability": 75
        },
        {
            ###########################################################################################################
            ###########################################################################################################

            "id": 4756181026340864,
            "weather_state_name": "Heavy Rain",
            "weather_state_abbr": "hr",
            "wind_direction_compass": "NE",
            "created": "2021-12-12T23:10:01.863243Z",
            "applicable_date": "2021-12-14",
            "min_temp": 18.025,
            "max_temp": 23.325,
            "the_temp": 23.305,
            "wind_speed": 3.433981308041041,
            "wind_direction": 39.13644585492638,
            "air_pressure": 1014.0,
            "humidity": 85,
            "visibility": 7.49777549113179,
            "predictability": 77
        },
        {
            ###########################################################################################################
            ###########################################################################################################

            "id": 4558482675073024,
            "weather_state_name": "Light Rain",
            "weather_state_abbr": "lr",
            "wind_direction_compass": "NE",
            "created": "2021-12-12T23:10:04.552064Z",
            "applicable_date": "2021-12-15",
            "min_temp": 17.985,
            "max_temp": 23.485,
            "the_temp": 24.865000000000002,
            "wind_speed": 4.040530655730534,
            "wind_direction": 54.84385329055433,
            "air_pressure": 1012.5,
            "humidity": 79,
            "visibility": 8.235343096317505,
            "predictability": 75
        },
        {
            ###########################################################################################################
            ###########################################################################################################

            "id": 5130657010286592,
            "weather_state_name": "Light Rain",
            "weather_state_abbr": "lr",
            "wind_direction_compass": "ENE",
            "created": "2021-12-12T23:10:08.382452Z",
            "applicable_date": "2021-12-16",
            "min_temp": 17.759999999999998,
            "max_temp": 24.555,
            "the_temp": 24.73,
            "wind_speed": 3.865125392144543,
            "wind_direction": 71.76123252815815,
            "air_pressure": 1012.5,
            "humidity": 79,
            "visibility": 9.087864372067127,
            "predictability": 75
        },
        {

            ###########################################################################################################
            ###########################################################################################################

            "id": 5646224884498432,
            "weather_state_name": "Light Rain",
            "weather_state_abbr": "lr",
            "wind_direction_compass": "ENE",
            "created": "2021-12-12T23:10:10.743220Z",
            "applicable_date": "2021-12-17",
            "min_temp": 18.055,
            "max_temp": 24.545,
            "the_temp": 24.7,
            "wind_speed": 1.8567078262944403,
            "wind_direction": 63.0,
            "air_pressure": 1014.0,
            "humidity": 82,
            "visibility": 7.244566730295077,
            "predictability": 75
        }
    ],

    ###########################################################################################################
    ###########################################################################################################

    "time": "2021-12-12T18:57:28.275529-04:30",
    "sun_rise": "2021-12-12T06:05:48.785555-04:30",
    "sun_set": "2021-12-12T17:37:07.714937-04:30",
    "timezone_name": "LMT",
    "title": "Caracas",
    "location_type": "City",
    "woeid": 395269,
    "latt_long": "10.496050,-66.898277",
    "timezone": "America/Caracas"
}
*/