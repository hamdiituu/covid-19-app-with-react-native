import React from 'react';
import {View, Text} from 'react-native';
import {
  HeaderDashboard,
  ContentDashboard,
  FooterDashboard,
  ScrollDashboard,
} from '../../components/content';
const DashboardScreen = () => {
  return (
    <View>
      <HeaderDashboard />
      <ContentDashboard />
      <FooterDashboard />
      <ScrollDashboard/>
    </View>
  );
};

export default DashboardScreen;
