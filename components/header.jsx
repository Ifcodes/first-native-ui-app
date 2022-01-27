import React from 'react';
import { StyleSheet,View, Image } from 'react-native';

export default function Header() {
  return (
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <Image source={require('../vectors/icons/icons8-grip-lines-24.png')} style={styles.iconImg}/>
        </View>
        <View style={styles.iconWrapper}>
          <Image source={require('../vectors/icons/icons8-bell-24.png')} style={styles.iconImg}/>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  iconWrapper: {
    borderWidth: 1,
    borderColor: 'grey',
    width: 32,
    height: 32,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImg: {
    width: 10,
    height: 16,
  }
});