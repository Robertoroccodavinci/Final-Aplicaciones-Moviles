import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export default function ListaPaises({ route,navigation }) {
  
  const[paises,setPaises]= React.useState([])
  
  React.useEffect(() => {
    setPaises(route.params.lista);
  
  },[]);


  return (
   
    <View style = {styles.container}>
      
      <ScrollView >
        
        <Text style = {styles.titulo}> Lista de Paises </Text>

        {paises.map( element => {

          return(
      
              <Card key={element.ccn3} style={{borderWidth:1, marginVertical:3}} >

                <Card.Title title={element.name.common+" "+element.flag} 
                            subtitle={element.name.official} />
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
          
        })}    

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

