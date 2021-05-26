import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import { Styles } from './AllContactsScreen.styles';

class AllContactsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text>
          All Contacts Screen!
        </Text>
      </View>
    );
  }
}

export default AllContactsScreen;
