import React, {useEffect} from 'react';
import {View, ScrollView, Dimensions} from 'react-native';
import {DashboardScreen,StatisticsScreen} from './screens'

const App = () => {

    const screenHeight = Math.round(Dimensions.get('window').height);

  return (
    <ScrollView style={{flex: 1}} ref={node => (this.scroll = node)}>
      <View style={{height: screenHeight}}>
      <DashboardScreen/>
      </View>
      <View style={{height: screenHeight}}>
       <StatisticsScreen/>
      </View>
    </ScrollView>
    
  ) 
};

export default App;
