'use strict';

import React from 'react-native';
const { View, Text, TextInput, StyleSheet } = React;
import ResultsScreen from './ResultsScreen';

class SearchScreen extends React.Component { 

  gotoResultsScreen(searchPhrase) {
    this.props.navigator.push({
      title: 'Results',
      component: ResultsScreen,
      passProps: { searchPhrase }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>
          BookBrowser
        </Text>
        <Text style={styles.label}>
          Find books containing:
        </Text>
        <TextInput 
          placeholder="e.g. JavaScript or Mobile"
          returnKeyType="search"
          enablesReturnKeyAutomatically={true}
          onEndEditing={ e => this.gotoResultsScreen(e.nativeEvent.text) }
          style={styles.textInput} />
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
  headline: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 28
  }, 
  label: {
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFF',
    marginBottom: 8
  },
  textInput: {
    borderColor: '#8E8E93',
    borderWidth: 0.5,
    backgroundColor: '#FFF',
    height: 40,
    marginLeft: 60,
    marginRight: 60,
    padding: 8
  } 
});

export default SearchScreen;
