import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {SafeAreaView} from 'react-native-safe-area-context';

const AllItemsScreen: NavigationFunctionComponent<{}> = () => (
  <SafeAreaView style={styles.root}>
    <Text>All Items Screen</Text>
  </SafeAreaView>
);

AllItemsScreen.options = {
  topBar: {
    title: {
      text: 'All Items'
    }
  },
  bottomTab: {
    text: 'All Items'
  }
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default AllItemsScreen;
