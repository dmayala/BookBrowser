'use strict';

import React from 'react-native';
const { AppRegistry, StyleSheet, NavigatorIOS } = React;

import SearchScreen from './SearchScreen';

class BookBrowser extends React.Component {

  render() {
    return (
      <NavigatorIOS
        initialRoute={{ 
          component: SearchScreen,
          title: 'Search'
        }}
        style={styles.navContainer}
      />
    );
  }

}

let styles = StyleSheet.create({
  navContainer: {
    flex: 1
  }
});

AppRegistry.registerComponent('BookBrowser', () => BookBrowser);
