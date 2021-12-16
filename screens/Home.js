import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, Text, View,TouchableOpacity,ScrollView, Image } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function Home({ route, navigation }) {
  
  const[paises,setPaises] = React.useState(route.params.lista);
  const[search, setSearch] = React.useState("");
  const[results, setResults] = React.useState([]);
  const[datos, setDatos] = React.useState([]);
  
  var count = 0;
  
  const[maxCount,setMaxCount] = React.useState(10);

  
  React.useEffect(() => {
    count = 0;
    setMaxCount(10);
    
  }, [search]);


  return (
   
    <View style = {styles.container}>
      <ScrollView>        
        
        <TextInput style = {styles.searchBar} placeholder = "Ingrese el Pais" onChangeText={text => setSearch(text)} />
        <View style={[styles.parent]}>
        {(search === '')? <Text>Busca el pais que estas buscando</Text>
        :paises.map(element =>{
          
          if(count!== maxCount && element.capital && element.translations.spa.common.toLowerCase().includes(search.toLocaleLowerCase())){

           return( count++ ,
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
            </View> 
        {( search !== '' && paises[count+1] === null)? 
         <Text style={ styles.texto }> No hay mas resultados para su busqueda </Text>
         :  <TouchableOpacity style={ styles.btns } onPress={() => { setMaxCount(maxCount+10) } }>
              <Text  style={ styles.btnsTxt }>Mostrar más</Text>
            </TouchableOpacity> }
        

      </ScrollView>
    </View>
  
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#becfd7',
    alignItems: 'center',
    justifyContent: 'center',   
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: "center",
  },
  
  searchBar: {
    height: 50,
    width: 300,
    fontSize: 15,
    textAlign: "center",
    borderColor: "#ffcd00",
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: 'white',
    marginBottom: 10,
    alignSelf: "center",
    marginVertical:10,
    elevation:5
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