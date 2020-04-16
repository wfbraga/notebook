import React from 'react';

import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons';

const Main = ({navigation}) => {

  const data = [
    {
      id: '1',
      title: 'Código Limpo',
      anotation: 'Livro loco de bom!',
      read:false,
      photo: null,
    },
    {
      id: '2',
      title: 'C Completo e Total',
      anotation: 'Livro loco de bom!',
      read:false,
      photo: null,
    },
    {
      id: '3',
      title: 'Biblia do PHP',
      anotation: 'Livro loco de bom!',
      read:false,
      photo: null,
    },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.toolbox}>
        <Text style={styles.title}>
          Lista de Leitura
        </Text>
        <TouchableOpacity style={styles.toolboxButton}
        onPress={() =>{
          navigation.navigate("Book");
          }}
          >
          <Icon name='add' size={16} color="#fff"/>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemButton}>
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>
          )}
        />      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,       
  },
  toolbox: {
    backgroundColor: '#f39c12',
    padding: 5,
    marginBottom: 2,
    flexDirection: "row",
  },
  title: {
    marginTop: 20,
    flex: 1,
    fontSize: 22,
    color: '#2980b9',
    fontWeight: 'bold'
  },
  toolboxButton: {
    marginTop: 20,
    backgroundColor: '#2980b9',
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemButton: {
    marginVertical: 1,
    padding: 5,
    backgroundColor: '#ecf0f1',
    borderBottomColor: '#95a5a6',
    borderBottomWidth: 1
  },
  itemText: {
    fontSize: 16,
  }
})

export default Main;