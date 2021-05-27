import React, { Component } from 'react';
import {
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  Image,
} from 'react-native';
import { isEmpty } from 'lodash';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Styles } from './AddContact.styles';
import { Fonts } from '../../themes/fonts';
import { Colors } from '../../themes/colors';
import { Routes } from '../../navigation/screenConfig/routes';
import { Images } from '../../themes/images';
import { returnNumberOnly } from '../../utils/helpers';
import { NavigationActions, StackActions } from 'react-navigation';
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

  onPressSave = async () => {
    const { firstName, lastName, photo, age } = this.state;
    const { requestSaveContact, saveContactError } = this.props;

    await requestSaveContact(
      firstName,
      lastName,
      photo,
      Number(age),
    );

    if (isEmpty(saveContactError)) {
      Alert.alert(
        'Success!',
        'Successfully saved contact',
        [
          { text: 'OK', onPress: this.resetNavigation },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        'Oops!',
        'Something went wrong',
        [
          { text: 'OK' },
        ],
        { cancelable: false }
      );
    }
  }

  renderImage = () => {
    const { photo } = this.state;

    return (
      <View style={Styles.imageContainer}>
        <Image
          key={photo}
          style={Styles.image}
          defaultSource={Images.PERSON}
          source={{ uri: photo }}
          resizeMode="contain"
        />
      </View>
    );
  }

  resetNavigation = () => {
    const { navigation } = this.props;

    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({
        routeName: Routes.AllContactsScreen,
        params: {
          reset: true,
        },
      })],
    });

    navigation.dispatch(resetAction);
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
    let autoCapitalize = 'words'
    let maxLength = 50;
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
        autoCapitalize = 'none';
        maxLength = null;
        break;
      case 'age':
        title = 'Age';
        placeHolder = '47';
        value = this.ageValue();
        keyboardType = 'number-pad';
        maxLength = 2;
        autoCapitalize = 'none'
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
          maxLength={maxLength}
          autoCapitalize={autoCapitalize}
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
    const { saveLoading } = this.props;
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
          loading={saveLoading}
        />
      </View>
    );
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.dismissKeyboard}>
        <KeyboardAwareScrollView
          contentContainerStyle={Styles.container}
          extraHeight={20}
          enableOnAndroid
        >
          {this.renderImage()}
          {this.renderNormalTextInput('firstName')}
          {this.renderNormalTextInput('lastName')}
          {this.renderNormalTextInput('photo')}
          {this.renderNormalTextInput('age')}
          {this.renderSpacer()}
          {this.renderButton()}
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    );
  }
}

export default AddContact;
