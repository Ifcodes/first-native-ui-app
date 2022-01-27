import { whileStatement } from "@babel/types";
import React from "react";
import {Image, Text, View, StyleSheet, ScrollView} from 'react-native'
import { Entypo, Feather, Ionicons } from '@expo/vector-icons'; 
import Search from "./search";

const Content = () => {
  return(
    <ScrollView style={styles.scrollContainer}>
      <Search />
      <View style={[styles.card, styles.greenCard]}>
        <View style={styles.cardDescription}>
          <View style={styles.cardHeader}>
            <View style={styles.iconWrapper}>
              <Entypo name="drop" size={24} color="#9EDEFC" />
            </View>
            <Text style={styles.cardHeaderText}>Your celery is dehydrated</Text>
          </View>
          <Text style={styles.cardText}>
            It looks like your celery needs more water, lets solve this together.
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>Ok</Text>
        </View>
      </View>

      <View style={[styles.card, styles.productCard]}>
        <View style={styles.productTitleContainer}>
          <Image source={require('../vectors/images/arugulaok.jpeg')} style={styles.productImg}/>
          <Text style={styles.productTitle}> Arugula  </Text>
        </View>
        <View style={styles.productTitleContainer}>
          <Ionicons name="time" size={16} color="#868686" />
          <Text style={styles.time}> 5 days to harvest  </Text>
        </View>
      </View>

      <View style={[styles.card, styles.productCard]}>
        <View style={styles.productTitleContainer}>
          <Image source={require('../vectors/images/spinach.jpeg')} style={styles.productImg}/>
          <Text style={styles.productTitle}> Spinach  </Text>
        </View>
        <View style={styles.productTitleContainer}>
          <Ionicons name="time" size={16} color="#868686" />
          <Text style={styles.time}> 21 days to harvest </Text>
        </View>
      </View>

      <View style={[styles.card, styles.productCard]}>
        <View style={styles.productTitleContainer}>
          <Image source={require('../vectors/images/lettuce.png')} style={styles.productImg}/>
          <Text style={styles.productTitle}> Lettuce  </Text>
        </View>
        <View style={styles.productTitleContainer}>
          <Ionicons name="time" size={16} color="#868686" />
          <Text style={styles.time}> 4 days to harvest </Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Content

const styles = StyleSheet.create({
  scrollContainer:{
    flex: 1,
  },
  card:{
    width: '100%',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 32,
    flexDirection: "row",
    marginTop: 48,
  },
  greenCard: {
    alignItems: "center",
    backgroundColor: '#3ebb68',
  },
   iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: '#55C482',
    justifyContent: "center",
    alignItems: "center",
  },
  buttonWrapper: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: 'white',
    borderColor: '#44B768',
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "500",
    marginLeft: 16,
  },
  cardHeader: {
    width: '65%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  cardDescription: {
    width: '80%',
  },  
  cardText: {
    color: 'white',
    fontSize: 16.6,
    color: '#c7e7d4' 
  },
  buttonText: {
    color: 'black'
  },
  cardHeaderText: {
    marginLeft: 16,
    fontWeight: "bold",
    color: 'white',
    fontSize: 20,
  },
  productCard: {
    backgroundColor: '#F9F9F9',
    justifyContent: 'space-between',
    alignItems: "center",
    marginTop: 24,
  },
  productImg:{
    width: 48,
    height:48,
    borderRadius: 50,
  },
  productTitleContainer:{
    flexDirection: "row",
    alignItems: "center",
  },
  productTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 16,
    color: '#656565',
  },
  time:{
    fontSize: 16,
    color: '#C7C7C7',
    fontWeight: 'bold',
    marginLeft: 8,
  }
})
