import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Animated} from 'react-native';

const ScrollDown = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.txt}> &#8593;</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 35,
    color: '#473F97',
  },
});

export default ScrollDown;
