'use strict';

import React from 'react-native';
const { View, Text, StyleSheet } = React;

class ResultsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          This is the results screen
        </Text>
        <Text style={styles.label}>
          You search for: {this.props.searchPhrase}
        </Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5AC8FA'
  },
  label: {
    fontSize: 24,
    fontWeight: 'normal',
    color: '#fff'
  }
});

export default ResultsScreen;
