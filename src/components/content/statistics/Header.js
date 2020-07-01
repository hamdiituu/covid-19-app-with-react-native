import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleTxt}>Statistics</Text>
      <View style={styles.changeView}>
        <TouchableOpacity style={styles.myCountryBtn}>
          <Text style={styles.myCountryTxt}>My Country</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.globalBtn}>
          <Text style={styles.globalTxt}>Global</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabsTitle}>
        <Text style={styles.tabsTxtactive}>Total</Text>

        <Text style={styles.tabsTxt}>Today</Text>

        <Text style={styles.tabsTxt}>Yesterday</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  titleTxt: {
    position: 'absolute',
    left: 24,
    fontSize: 24,
    color: 'white',
    fontWeight: '700',
    top: 50,
  },
  changeView: {
    position: 'absolute',
    top: 125,
    flexDirection: 'row',
    width: 320,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 50,
    //justifyContent:'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  myCountryBtn: {
    backgroundColor: 'white',
    width: 150,
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    borderRadius: 50,
    marginRight: 20,
  },
  myCountryTxt: {
    fontWeight: '600',
    fontSize: 15,
  },
  globalBtn: {
    // backgroundColor:'white',
    width: 130,
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    borderRadius: 50,
    marginRight: 20,
  },
  globalTxt: {
    fontWeight: '600',
    fontSize: 15,
    color: 'white',
  },
  tabsTitle: {
    flexDirection: 'row',
    position: 'absolute',
    top: 220,
  },
  tabsTxt: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    opacity: 0.5,
    marginHorizontal :10
  },
  tabsTxtactive: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  
    marginHorizontal :10
  },
});

export default Header;
