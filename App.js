// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, Image, SafeAreaView, ScrollView } from 'react-native';
import Header from './components/header';
import Title from './components/title';
import Search from './components/search';
import Content from './components/content';
import BellIcon from './vectors/BellIcon';
import MenuIcon from './vectors/MenuIcons';
import BottomNav from './components/bottomNav';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <Header />
     <Title />
     <Content />
     <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 16,
  },
});
