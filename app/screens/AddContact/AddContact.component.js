import React, { Component } from 'react';
import {
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import { Styles } from './AddContact.styles';
import { Fonts } from '../../themes/fonts';
import { Colors } from '../../themes/colors';
import { returnNumberOnly } from '../../utils/helpers';
import Button from '../../components/Button/Button.component';
import StackHeader from '../../components/StackHeader/StackHeader.component';
import NormalTextInput from '../../components/NormalTextInput/NormalTextInput.component';

class AddContact extends Component {
  static navigationOptions = ({ navigation }) => {
    const goBack = () => navigation.goBack();

    return {
      header: (
        <StackHeader
          title={'Add Contact'}
          onPressLeft={goBack}
        />
      ),
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      photo: '',
      age: '',
    };
  }

  dismissKeyboard = () => {
    Keyboard.dismiss();
  }

  onChangeText = (type) => (data) => {
    if (type === 'age') {
      const numberOnly = returnNumberOnly(data);
      this.setState({
        age: numberOnly,
      });
    } else {
      this.setState({
        [type]: data,
      });
    }
  }

  onPressSave = () => {
    console.log(this.state, '<== heehhe')
  }

  ageValue = () => {
    const { age } = this.state;
    return returnNumberOnly(age);
  }

  renderNormalTextInput = (type) => {
    const { firstName, lastName, photo } = this.state;

    let title;
    let placeHolder;
    let value;
    let keyboardType = 'default';
    switch (type) {
      case 'firstName':
        title = 'First Name';
        placeHolder = 'Reyhan';
        value = firstName;
        break;
      case 'lastName':
        title = 'Last Name';
        placeHolder = 'Huditama';
        value = lastName;
        break;
      case 'photo':
        title = 'Photo';
        placeHolder = 'Add link to photo here';
        value = photo;
        break;
      case 'age':
        title = 'Age';
        placeHolder = '47';
        value = this.ageValue();
        keyboardType = 'number-pad';
        break;
      default:
        break;
    };

    return (
      <View style={Styles.inputContainer}>
        <Text style={Styles.title}>
          {title}
        </Text>

        <NormalTextInput
          fontFamily={Fonts.LatoRegular}
          fontSize={14}
          color={Colors.BLACK}
          textAlign="left"
          placeholder={placeHolder}
          placeHolderColor={Colors.VERY_LIGHT_GREY}
          onChangeText={this.onChangeText(type)}
          value={value}
          keyboardType={keyboardType}
          renderUnderline
          maxLength={50}
          autoCapitalize='none'
        />
      </View>
    );
  }

  renderSpacer = () => {
    return (
      <View style={Styles.spacer} />
    );
  }

  renderButton = () => {
    const { firstName, lastName, photo, age } = this.state;
    let disabled = true;

    if (firstName && lastName && photo && age) {
      disabled = false;
    }

    return (
      <View style={Styles.buttonContainer}>
        <Button
          height={40}
          width={'100%'}
          text='SAVE'
          onPress={this.onPressSave}
          disabled={disabled}
        />
      </View>
    );
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.dismissKeyboard}>
        <View style={Styles.container}>
          {this.renderNormalTextInput('firstName')}
          {this.renderNormalTextInput('lastName')}
          {this.renderNormalTextInput('photo')}
          {this.renderNormalTextInput('age')}
          {this.renderSpacer()}
          {this.renderButton()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default AddContact;
