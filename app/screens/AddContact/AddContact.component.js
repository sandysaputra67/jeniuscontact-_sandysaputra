import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import { Styles } from './AddContact.styles';
import StackHeader from '../../components/StackHeader/StackHeader.component';

class AddContact extends Component {
  static navigationOptions = ({ navigation }) => {
    const goBack = () => navigation.goBack();

    return {
      header: (
        <StackHeader
          title={'Contacts'}
          onPressLeft={goBack}
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
        <Text>
          Add Contact Screen
        </Text>
      </View>
    );
  }
}

export default AddContact;
