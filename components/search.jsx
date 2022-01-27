import React, { useState } from 'react'
import {StyleSheet, View, TextInput} from 'react-native'
import { Feather } from '@expo/vector-icons';

const Search = () =>{
  const [inputValue, setInputValue] = useState('')

  return(
    <View style={styles.searchWrapper}>
      <Feather name="search" size={32} color="black" />
      <TextInput 
        value={inputValue}
        onChangeText={setInputValue}
        placeholder='Search a plant'
        style={styles.input}
      />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  searchWrapper: {
    marginTop: 32,
    borderWidth: 1,
    borderRadius: 50,
    width: '100%',
    paddingVertical: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E9E9E9',
  },
  input: {
    flexGrow: 1,
    fontSize: 20,
    fontWeight: 'normal',
    color: 'black',
    marginLeft: 16,
    borderWidth: 0,
  },
  iconImg: {
    width: 24,
    height: 24,
  }
})