import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons';

const Book = ({navigation}) => {
  return ( 
    <View style={styles.container}>
      <View style={styles.toolbox}>
        <Text style={styles.title}>
          Lista de Leitura
        </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder='Titulo'
      />
      
      <TextInput
        style={styles.input}
        placeholder='Descrição'
        multiline={true}
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.cameraButton}>
        <Icon name='photo-camera' size={18} color='#fff'/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>
        Cadastrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.cancelButtonText}
        onPress={() =>{
          navigation.goBack();
        }}
        >
        Cancelar
        </Text>
      </TouchableOpacity>
    </View>
  )
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
    fontSize: 18,
    color: '#2980b9',
    fontWeight: 'bold'
  },
  input: {
    padding: 20,
    fontSize: 16,
    borderBottomColor: '#e67e22',
    borderBottomWidth: 1,
   margin: 20    
  },
  cameraButton:{    
    backgroundColor: '#e67e22',
    borderRadius: 50,
    width: 33,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#e67e22',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,    
  },
  cancelButton:{
    alignSelf: 'center',
    borderColor: '#95a5a6',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cancelButtonText:{
    color: '#95a5a6'    
  }
})

export default Book;