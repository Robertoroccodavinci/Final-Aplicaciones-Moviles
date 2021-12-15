import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image, ScrollView } from 'react-native';
import {Card} from 'react-native-paper';

export default function Pais({ route, navigation }) {
    
  const[pais,setPais]= React.useState(route.params.pais);
  
  React.useEffect(() => {
  
  }, []);

  return (
   
    <View style = {styles.container}>
        <ScrollView>
            <View>
            
                        <Text style = {styles.titulo}> {pais.translations.spa.common} </Text>
                        
                        <Image style = {styles.imagen} resizeMode={'contain'}  
                                source={{uri: pais.flags.png}}/>
                        <Image style = {styles.escudo} resizeMode={'contain'} 
                                source={{uri: pais.coatOfArms.png}}/> 
                                
                            <Card  style={{borderWidth:1, marginVertical:20, marginHorizontal: 30, borderRadius: 20}} >
                                <Card.Content style = {styles.info2}>                         
                                    <Text style = {styles.descripcion}> Region:</Text>
                                    <Text style = {styles.texto}> {pais.region} </Text>
                                </Card.Content>
                                    <Card.Content style = {styles.info2}> 
                                    <Text style = {styles.descripcion}> Sub-Region:</Text>
                                    <Text style = {styles.descripcion}> {pais.subregion} </Text>
                                </Card.Content>
                                <Card.Content style = {styles.info2}> 
                                    <Text style = {styles.descripcion}> Continente:</Text>
                                    <Text style = {styles.descripcion}> {pais.continents} </Text>
                                </Card.Content>                        
                                <Card.Content style = {styles.info2}> 
                                    <Text style = {styles.descripcion}> Capital:</Text>
                                    <Text style = {styles.descripcion}> {pais.capital} </Text>
                                </Card.Content>
                                <Card.Content style = {styles.info2}> 
                                    <Text style = {styles.descripcion}> Moneda:</Text>
                                    <Text style = {styles.descripcion}> {pais.currencies[0]} </Text>
                                </Card.Content>
                                <Card.Content style = {styles.info2}> 
                                    <Text style = {styles.descripcion}> Idioma:</Text>
                                    <Text style = {styles.descripcion}> {pais.languages[0]} </Text>                  
                                </Card.Content>
                                <Card.Content style = {styles.info2}> 
                                    <Text style = {styles.descripcion}> Latitud / Longitud(latlng):</Text>
                                    <Text style = {styles.descripcion}> {pais.latlng[0]+" / "+pais.latlng[1]} </Text>                  
                                </Card.Content>
                                <Card.Content style = {styles.info2}> 
                                    <Text style = {styles.descripcion}> Población:</Text>
                                    <Text style = {styles.descripcion}> {pais.population} </Text>                 
                                </Card.Content>
                                <Card.Content style = {styles.info2}> 
                                    <Text style = {styles.descripcion}> Zona Horaria:</Text>
                                    <Text style = {styles.descripcion}> {pais.timezones.map(element => {return element+", "})} </Text>                  
                                </Card.Content>                                                                        
                            </Card>                        
        {/* 
                        <Text style = {styles.texto}> {pais.translations.spa.official} </Text>
                        <Text style = {styles.texto}> Capital:  {pais.capital} </Text>
                        <Text style = {styles.texto}> Region:  {pais.region} </Text>
                        <Text style = {styles.texto}> Subregion:  {pais.subregion} </Text>
                        <Text style = {styles.texto}> Continente:  {pais.continents} </Text>
                        <Text style = {styles.texto}> Moneda:  {pais.currencies[0]} </Text>
                        
                        <Text style = {styles.texto}> Idioma:  {pais.languages[0]} </Text>
                        
                        <Text style = {styles.texto}> Latitud Longitud(latlng):  {pais.latlng[0]+", "+pais.latlng[1]} </Text>
                        <Text style = {styles.texto}> Poblacion:  {pais.population} </Text>
                        <Text style = {styles.texto}> Zona Horaria:  {pais.timezones.map(element => {return element+", "})} </Text>
                    
                        <Image resizeMode={'contain'} style = {{ width:200, height:150, marginBottom:6}} 
        source={{uri: pais.coatOfArms.png}}/>  */}
                        
                    <TouchableOpacity style={ styles.btns } onPress = { () => {navigation.navigate("Home")} }>
                    <Text  style={ styles.btnsTxt }>Volver al Inicio</Text>
                    </TouchableOpacity> 
            </View>
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
    marginVertical: 20
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
  descripcion: {
    fontSize: 14,
    textAlign: "left",
    paddingVertical:2 
  },
  imagen: {
    width:200, 
    height:150, 
    marginBottom:6,
    marginHorizontal: '25%',
  },
  escudo: {
    width:200, 
    height:150, 
    marginBottom:6,
    marginHorizontal: '25%',
  },
});



/* 
{
        "name": {
            "common": "San Marino",
            "official": "Republic of San Marino",
            "nativeName": {
                "ita": {
                    "official": "Repubblica di San Marino",
                    "common": "San Marino"
                }
            }
        },
        "tld": [
            ".sm"
        ],
        "cca2": "SM",
        "ccn3": "674",
        "cca3": "SMR",
        "cioc": "SMR",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "idd": {
            "root": "+3",
            "suffixes": [
                "78"
            ]
        },
        ##########################################################################################################
        "capital": [
            "City of San Marino"
        ],
        "altSpellings": [
            "SM",
            "Republic of San Marino",
            "Repubblica di San Marino"
        ],
         ##########################################################################################################
        "region": "Europe",
        "subregion": "Southern Europe",
         ##########################################################################################################
        "languages": {
            "ita": "Italian"
        },
        ##########################################################################################################
        "translations": {
            "ara": {
                "official": "جمهورية سان مارينو",
                "common": "سان مارينو"
            },
            "ces": {
                "official": "Republika San Marino",
                "common": "San Marino"
            },
            "cym": {
                "official": "Republic of San Marino",
                "common": "San Marino"
            },
            "deu": {
                "official": "Republik San Marino",
                "common": "San Marino"
            },
            "est": {
                "official": "San Marino Vabariik",
                "common": "San Marino"
            },
            "fin": {
                "official": "San Marinon seesteinen tasavalta",
                "common": "San Marino"
            },
            "fra": {
                "official": "République de Saint-Marin",
                "common": "Saint-Marin"
            },
            "hrv": {
                "official": "Većina Serene Republika San Marino",
                "common": "San Marino"
            },
            "hun": {
                "official": "San Marino Köztársaság",
                "common": "San Marino"
            },
            "ita": {
                "official": "Serenissima Repubblica di San Marino",
                "common": "San Marino"
            },
            "jpn": {
                "official": "サンマリノのほとんどセリーヌ共和国",
                "common": "サンマリノ"
            },
            "kor": {
                "official": "산마리노 공화국",
                "common": "산마리노"
            },
            "nld": {
                "official": "Meest Serene Republiek San Marino",
                "common": "San Marino"
            },
            "per": {
                "official": "جمهوری سان مارینو",
                "common": "سان مارینو"
            },
            "pol": {
                "official": "Republika San Marino",
                "common": "San Marino"
            },
            "por": {
                "official": "Sereníssima República de San Marino",
                "common": "San Marino"
            },
            "rus": {
                "official": "Большинство Serene Республика Сан-Марино",
                "common": "Сан-Марино"
            },
            "slk": {
                "official": "Sanmarínska republika",
                "common": "San Maríno"
            },
            "spa": {
                "official": "Serenísima República de San Marino",
                "common": "San Marino"
            },
            "swe": {
                "official": "Republiken San Marino",
                "common": "San Marino"
            },
            "urd": {
                "official": "جمہوریہ سان مارینو",
                "common": "سان مارینو"
            },
            "zho": {
                "official": "圣马力诺共和国",
                "common": "圣马力诺"
            }
        },
        "latlng": [
            43.76666666,
            12.41666666
        ],
        "landlocked": true,
        "borders": [
            "ITA"
        ],
        "area": 61.0,
        "demonyms": {
            "eng": {
                "f": "Sammarinese",
                "m": "Sammarinese"
            },
            "fra": {
                "f": "Saint-Marinaise",
                "m": "Saint-Marinais"
            }
        },
        "flag": "🇸🇲",
        "maps": {
            "googleMaps": "https://goo.gl/maps/rxCVJjm8dVY93RPY8",
            "openStreetMaps": "https://www.openstreetmap.org/relation/54624"
        },
        "population": 33938,
        "timezones": [
            "UTC+01:00"
        ],
        "continents": [
            "Europe"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/sm.png",
            "svg": "https://flagcdn.com/sm.svg"
        },
        "coatOfArms": {
            "png": "https://mainfacts.com/media/images/coats_of_arms/sm.png",
            "svg": "https://mainfacts.com/media/images/coats_of_arms/sm.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                43.94,
                12.45
            ]
        },
        "postalCode": {
            "format": "4789#",
            "regex": "^(4789\\d)$"
        }
    },

*/