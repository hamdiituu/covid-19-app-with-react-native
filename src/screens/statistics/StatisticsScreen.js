import React from 'react';
import {View, Text} from 'react-native';
import {ScrollStatistics, HeaderStatistics} from  '../../components/content'



const StatisticsScreen = () => {
  return (
    <View style={{backgroundColor: '#473F97', flex: 1}}>
     <ScrollStatistics/>
     <HeaderStatistics/>
    </View> 
  );
};

export default StatisticsScreen;

