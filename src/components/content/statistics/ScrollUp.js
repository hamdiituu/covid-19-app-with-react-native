import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Sroll} from '../../icons';
const ScrollUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>&#8595;</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
      marginTop :45,
      alignItems:'center'
  },
  icon: {
    fontSize: 35,
    color: 'white',
  },
});

export default ScrollUp;
