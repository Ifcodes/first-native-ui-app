import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

const Title = () =>{
  return(
    <View style={styles.titleWrapper}>
      <Text style={styles.title}>Hello, </Text>
      <Text style={styles.titleBold}>Athena</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  titleWrapper: {
    marginTop: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'normal',
    color: '#B8B8B8',
  },
  titleBold: {
    fontSize: 24,
    fontWeight: 'bold',
  }
})