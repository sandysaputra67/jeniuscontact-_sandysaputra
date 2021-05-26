import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import { Styles } from './AllContactsScreen.styles';
import StackHeader from '../../components/StackHeader/StackHeader.component';

class AllContactsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <StackHeader
          title={'Contacts'}
        />
      ),
    };
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.title}>
          All Contacts Screen!
        </Text>
      </View>
    );
  }
}

export default AllContactsScreen;
