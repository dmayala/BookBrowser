'use strict';

import React from 'react-native';
import BookDetails from './BookDetails';
const { View, ListView, TouchableHighlight, Text, Image, StyleSheet } = React;

let buildUrl = (q) => {
  return `https:/\/\www.googleapis.com/books/v1/volumes?q=${ encodeURIComponent(q) }&langRestrict=en&maxResults=40`;
};

class ResultsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.renderBook = this.renderBook.bind(this);
    this.state = { 
      isLoading: true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  componentDidMount() {
    this.fetchResults(this.props.searchPhrase);
  }

  fetchResults(searchPhrase) {
    return fetch(buildUrl(searchPhrase))
            .then(response => response.json())
            .then(jsonData => {
              this.setState({ 
                isLoading: false,
                dataSource: this.state.dataSource.cloneWithRows(jsonData.items)
              });
            })
            .catch(err => console.dir(err)); 
  }

  renderLoadingMessage() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          Searching for "{this.props.searchPhrase}".
        </Text>
        <Text style={styles.label}>
          Please wait...
        </Text>
      </View>
    );
  }

  showBookDetails(book) {
    this.props.navigator.push({
      title: book.volumeInfo.title,
      component: BookDetails,
      passProps: { book }
    });
  }

  renderBook(book) {
    return (
      <TouchableHighlight onPress={ this.showBookDetails.bind(this, book) }>
        <View style={styles.row}>
          <Image
            style={styles.thumbnail}
            source={{uri: book.volumeInfo.imageLinks.smallThumbnail}}
            />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>
             {book.volumeInfo.title}
            </Text>
            <Text style={styles.subtitle}>
              {book.volumeInfo.subtitle}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  renderResults() {
    return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderBook}
          style={styles.listView}
          />
    );
  }


  render() {
    return this.state.isLoading ? this.renderLoadingMessage() : this.renderResults();
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
  },
  listView: {
    paddingTop: 65
  },
  rightContainer: {
    flex: 1
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5AC8FA',
    paddingRight: 20,
    marginTop: 1
  },
  thumbnail: {
    width: 70,
    height: 108,
    marginRight: 16
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#fff'
  }
});

export default ResultsScreen;
