import React, { Component } from 'react';
<<<<<<< HEAD
import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  UIManager,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  constructor(props) {
    super();

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if ( expanded ) {
      return (
        <CardSection>
          <Text style={{ flex: 1, paddingLeft: 15 }}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return(
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
=======
import { StyleSheet, Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  render() {
    const { titleStyle } = styles;

    return(
      <CardSection>
        <Text style={titleStyle}>
          {this.props.library.title}
        </Text>
      </CardSection>
>>>>>>> 60a83e9549319f322eaeb70bc810a2c43747c7fc
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

<<<<<<< HEAD
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded }
};

export default connect(mapStateToProps, actions)(ListItem);
=======
export default ListItem;
>>>>>>> 60a83e9549319f322eaeb70bc810a2c43747c7fc
