import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Woman} from '../../icons';

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.iconView}>
          <Woman />
        </View>

        <View style={styles.textView} >
        <Text style={styles.title}>Do your own test!</Text>
        <Text style={styles.description}>
          Follow the instructions to do your own test.
        </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 75,
    marginHorizontal: 15,
  },

  body: {
    backgroundColor: '#56549E',
    borderRadius: 16,
    height: 110,
    marginHorizontal: 15,
    //opacity:0.8
  },
  textView: {
      position:'absolute',
      right:24,
      top:10
  },
  iconView:{
      position :'absolute',
      bottom:10,
      left:12
  },
  title: {
      color:'white',
      fontSize :20,
      fontWeight:'800',
      marginTop:5
  },
  description:{
      color:'white',
      fontSize:14,
      width:170,
      marginTop:7
      
  }
});

export default Footer;
