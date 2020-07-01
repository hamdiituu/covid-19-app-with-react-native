import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CleanHands, Distance, Facemask} from '../../icons';
const Content = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prevention</Text>

      <View style={styles.containerSub}>
        <View style={styles.iconView}>
          <Distance style={styles.icon} />
          <Text style={styles.description}>Avoid close contact</Text>
        </View>
        <View style={styles.iconView}>
          <CleanHands />
          <Text style={styles.description}>Clean your hands often</Text>
        </View>
        <View style={styles.iconView}>
          <Facemask />
          <Text style={styles.description}>Wear a facemask</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop:20
  },
  containerSub: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  iconView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },

  icon: {},
  description: {
    width: 100,
    fontSize:14,
    fontWeight:'500',
    left:15,
    top:10
  },
  title: {
      color:'#0D1333',
      fontSize:28,
      left:24,
      fontWeight:'700'
  },
});

export default Content;
