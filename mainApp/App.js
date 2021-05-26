import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
} from 'react-native';

import { Styles } from './App.styles';
import { Colors } from '../app/themes/colors';
import RootNavigator from '../app/navigation/rootNavigator/rootNavigator';

class App extends Component {
  constructor(props) {
    super(props);

    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    TextInput.defaultProps = TextInput.defaultProps || {};
    TextInput.defaultProps.allowFontScaling = false;
  }

  render() {
    return (
      <SafeAreaView style={Styles.safeAreaView}>
        <StatusBar
          backgroundColor={Colors.JENIUS_BLUE}
          barStyle="light-content"
        />
        <View style={Styles.container}>
        <RootNavigator />
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
