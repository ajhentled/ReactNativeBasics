import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class EmployeeListItem extends Component{
  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee });
  }

  render() {
    const { name } = this.props.employee;

    return (
      <TouchableHighlight onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </CardSection>
          </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

export default EmployeeListItem;
