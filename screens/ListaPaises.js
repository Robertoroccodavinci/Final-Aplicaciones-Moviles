import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export default function ListaPaises({ route,navigation }) {
  
  const[paises,setPaises]= React.useState(route.params.lista);

  var count = 0;
  const[maxCount,setMaxCount] = React.useState(10);

  return (
   
    <View style = {styles.container}>
      
      <ScrollView >
        
        <Text style = {styles.titulo}> Lista de Paises </Text>

        {paises.map( element => {
          
          if(count!== maxCount){
            return(count++,
              
              <Card key={count} style={{borderWidth:1, marginVertical:3}} >

                <Card.Title title={element.translations.spa.common+" "+element.flag} 
                            subtitle={element.translations.spa.official} />
                {/*   <Card.Content>
                  <Title>{element["name"]["common"]}</Title>
                </Card.Content> */}
                {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
                <Card.Actions>
                  <TouchableOpacity onPress={() => navigation.navigate("TabPais",{pais: element})}>
                    <Text>ir a pais</Text>
                  </TouchableOpacity>
                </Card.Actions>
              </Card>
            
            )
          
          }
            
        })}    
      
        <TouchableOpacity style={ styles.btns } onPress={() => { setMaxCount(maxCount+10) } }>
          <Text  style={ styles.btnsTxt }>Mostrar más</Text>
        </TouchableOpacity>

      </ScrollView>

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
});

