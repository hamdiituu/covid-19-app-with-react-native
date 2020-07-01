import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Call, Message} from '../../icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Covid-19</Text>
      <Text style={styles.descriptionTitle}>Are you feeling sick?</Text>
      <Text style={styles.description}>
        If you feel sick with any of covid-19 symptoms please call or SMS us
        immediately for help.
      </Text>
      <View style={styles.contactView}>
        <TouchableOpacity style={styles.callNowBtn}>
          <Call />
          <Text style={styles.callNowTxt}>Call Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendSmsBtn}>
          <Message />
          <Text style={styles.sendSmsTxt}>Send SMS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#473F97',
    height: 325,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  title: {
    color: 'white',
    fontSize: 26,
    lineHeight: 26,
    fontWeight: '800',
    position: 'absolute',
    top: 80,
    left: 24,
  },
  descriptionTitle: {
    position: 'absolute',
    top: 120,
    left: 24,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    position: 'absolute',
    top: 170,
    left: 24,
    fontSize: 18,
    color: 'white',
    opacity: 0.7,
  },
  contactView: {
    flexDirection: 'row',
    position: 'absolute',
    top: 250,
    left:24,
    
  },
  callNowTxt: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
  callNowBtn: {
    flexDirection: 'row',
    backgroundColor: '#FF4D58',
    width: 155,
    height: 48,
    borderRadius: 50,
    //justifyContent :'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal :14
  },
  sendSmsBtn: {
    flexDirection: 'row',
    backgroundColor: '#4D79FF',
    width: 155,
    height: 48,
    borderRadius: 50,
    //justifyContent :'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal:14
  },
  sendSmsTxt: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default Header;
