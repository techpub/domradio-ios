'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Image,
  TouchableHighlight
} = React;

var RefreshButton = React.createClass({
  render: function() {
    return (<TouchableHighlight underlayColor="transparent">
              <Image style={ styles.backButton } source={ require('image!RefreshButton') }/>
            </TouchableHighlight>);
  }
});

var styles = StyleSheet.create({
  backButton: {
    width: 22,
    height: 22,
    marginLeft: 10,
    marginTop: 3,
    marginRight: 10
  }
});

module.exports = RefreshButton;