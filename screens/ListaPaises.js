import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, ScrollView,Image } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export default function ListaPaises({ route, navigation }) {
  
  const[paises,setPaises]= React.useState(route.params.lista);

  var count = 0;
  const[maxCount,setMaxCount] = React.useState(10);

  return (
   
    <View>
<ScrollView>
<View style={[styles.parent]}>
      {paises.map( element => {
          
          if(count!== maxCount&& element.capital){
            return(count++,
              <View key={count} style={[styles.child]}>
                <TouchableOpacity   onPress={() => navigation.navigate("TabPais",{pais: element})}>


                  <Image resizeMode={'contain'} 
                         style = {{ alignSelf:'center', width:150, height:100,marginTop:5, marginBottom:2,borderColor:'white',
                         borderWidth:1}} 
                         
                         source={{uri: element.flags.png}}/>  

                      <Text style={ styles.texto }> {element.translations.spa.common}</Text>
                      <Text style={ styles.texto }> ({element.capital})</Text>
                      <Text style={ styles.texto }> [{element.continents}]</Text>

                </TouchableOpacity>
              </View>    
            )
          
          }
            
        })}    

  <TouchableOpacity style={ styles.btns } onPress={() => { setMaxCount(maxCount+10) } }>
              <Text  style={ styles.btnsTxt }>Mostrar más</Text>
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
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    alignSelf:'center'
  },
  texto: {
    fontSize: 15,
    fontWeight:'bold',
    color:'black',
    textAlign: "center",
    marginVertical:2

  },
  btns: {
    justifyContent: "center",
    backgroundColor: "#ffcd00",
    borderRadius: 6,
    width: "60%",
    marginHorizontal: "20%",
    marginVertical:10,
    padding:10,
    elevation:5
  },
  btnsTxt: {
    textAlign: "center",
    color: "black",
    fontSize: 15,
    fontWeight: 'bold',        
  },
  parent: {
    width: '100%', 
    flexDirection: 'row', 
    flexWrap: 'wrap',
    backgroundColor:'#becfd7'
  },
  child: {
    width: '45%', 
    margin: '2%', 
    aspectRatio: 1,
  },    
    

});

