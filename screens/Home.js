import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, Text, View,TouchableOpacity,ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function Home({ route, navigation }) {
  
  const[paises,setPaises] = React.useState(route.params.lista);
  const[search, setSearch] = React.useState("");
  const[results, setResults] = React.useState([]);
  
  var count = 0;
  
  const[maxCount,setMaxCount] = React.useState(10);


  React.useEffect(() => {
    count = 0;
    setMaxCount(10);
    
  }, [search]);


  return (
   
    <View style = {styles.container}>
      <ScrollView>

        <Text style={ styles.titulo }> Bienvenido a la APi Paises </Text>
        
        <TextInput style = {styles.searchBar} placeholder = "Ingrese el Pais" onChangeText={text => setSearch(text)} />

        {(search === '')? <Text>Busca el pais, ciudad que estas buscando</Text>
        :paises.map(element =>{
          
          if(count!== maxCount&&element.translations.spa.common.toLowerCase().includes(search.toLocaleLowerCase())){

           return( count++ ,
            <Card key={count} style={{borderWidth:1, marginVertical:3}} >

              <Card.Title title = { element.translations.spa.common+" "+element.flag } 
                          subtitle = { element.translations.spa.official } />
              
              <Card.Actions>
                <TouchableOpacity onPress={() => navigation.navigate("TabPais",{pais: element})}>
                  <Text>ir a pais</Text>
                </TouchableOpacity>
              </Card.Actions>

            </Card>
           
           )
          }
         

        })}
        {(search !== '')? 
          <TouchableOpacity style={ styles.btns } onPress={() => { setMaxCount(maxCount+10) } }>
            <Text  style={ styles.btnsTxt }>Mostrar más</Text>
          </TouchableOpacity>
        : <Text  style={ styles.btnsTxt }></Text> }
        

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
    color: 'red',
    textAlign: "center",
  },
  texto: {
    fontSize: 20,
    textAlign: "left",
    marginBottom: 20,
    marginHorizontal: 20
  },
  searchBar: {
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