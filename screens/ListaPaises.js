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
          
          if(count!== maxCount){
            return(count++,
              <View key={count} style={[styles.child]}>
                <TouchableOpacity   onPress={() => navigation.navigate("TabPais",{pais: element})}>
                  <Card  style={{ marginVertical:3, alignItems:'center',elevation:5, backgroundColor:'black'}} >

                  <Image resizeMode={'contain'} 
                         style = {{ alignSelf:'center', width:150, height:100,marginTop:5, marginBottom:2,borderColor:'white',
                         borderWidth:1}} 
                         
                         source={{uri: element.flags.png}}/>  
                    <Card.Content>
                      <Text style={ styles.texto }><Text style={{fontWeight:'bold', color:'red'}}>Pais: </Text> {element.translations.spa.common}</Text>
                      <Text style={ styles.texto }><Text style={{fontWeight:'bold', color:'red'}}>Capital:</Text> {element.capital}</Text>
                      
                    </Card.Content> 
                    {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
                  </Card>
                </TouchableOpacity>
              </View>    
            )
          
          }
            
        })}    
</View>

<View style={[styles.parent]}>
    <TouchableOpacity  onPress={() => { setMaxCount(maxCount+10) } }>
        <Text style={styles.texto}  >Mostrar más</Text>
      </TouchableOpacity>
</View>
</ScrollView>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    color:'white',
    textAlign: "left",
    marginVertical:2

  },
  btns: {
    justifyContent: "center",
    backgroundColor: "#ffcd00",
    borderRadius: 6,
    width: "60%",
    marginHorizontal: "25%",
    marginVertical:5,
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
    backgroundColor:'black'
  },
  child: {
    width: '45%', 
    margin: '2%', 
    aspectRatio: 1,
    borderColor:'white',
    borderWidth:2,
  },    
    

});

