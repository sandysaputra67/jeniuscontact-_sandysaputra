import React, { Component } from 'react';
import {
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  ActivityIndicator,
  Image,
} from 'react-native';
import { get, isEmpty, isEqual } from 'lodash';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Styles } from './ContactDetails.styles';
import { Fonts } from '../../themes/fonts';
import { Colors } from '../../themes/colors';
import { Routes } from '../../navigation/screenConfig/routes';
import { Images } from '../../themes/images';
import { returnNumberOnly } from '../../utils/helpers';
import { NavigationActions, StackActions } from 'react-navigation';
import Button from '../../components/Button/Button.component';
import StackHeader from '../../components/StackHeader/StackHeader.component';
import NormalTextInput from '../../components/NormalTextInput/NormalTextInput.component';

class ContactDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    const goBack = () => navigation.goBack();
    const deleteContact = navigation.getParam('deleteContact');

    return {
      header: (
        <StackHeader
          title={'Details'}
          onPressLeft={goBack}
          rightIcon={Images.DELETE}
          onPressRight={deleteContact}
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

  async componentDidMount() {
    const { navigation, requestGetContactDetails } = this.props;
    const contactId = navigation.getParam('id');

    navigation.setParams({
      deleteContact: this.deleteContact(contactId),
    });

    await requestGetContactDetails(contactId);

    const { detailsError } = this.props;
    if (!isEmpty(detailsError)) {
      Alert.alert(
        'Oops!',
        'Something went wrong',
        [
          { text: 'OK', onPress: () => navigation.goBack() },
        ],
        { cancelable: false }
      );
    } else {
      this.autoFillContact();
    }
  }

  autoFillContact = () => {
    const { contactDetails } = this.props;
    const firstName = get(contactDetails, 'firstName', '');
    const lastName = get(contactDetails, 'lastName', '');
    const photo = get(contactDetails, 'photo', '');
    const age = get(contactDetails, 'age', '');

    this.setState({
      firstName,
      lastName,
      photo,
      age: String(age),
    })
  }

  dismissKeyboard = () => {
    Keyboard.dismiss();
  }

  deleteContact = (contactId) => () => {
    Alert.alert(
      'Warning!',
      'Are you sure you want to delete this contact?',
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: 'OK', onPress: this.confirmDelete(contactId) },
      ],
      { cancelable: false }
    );
  }

  confirmDelete = (contactId) => async () => {
    const { requestDeleteContact } = this.props;

    await requestDeleteContact(contactId);
    const { deleteError } = this.props;

    if (!isEmpty(deleteError)) {
      Alert.alert(
        'Oops!',
        'Something went wrong',
        [
          { text: 'OK' },
        ],
        { cancelable: false }
      );
    } else {
      await this.setState({
        firstName: '',
        lastName: '',
        photo: '',
        age: '',
      });

      Alert.alert(
        'Success!',
        'Successfully deleted contact',
        [
          { text: 'OK', onPress: this.resetNavigation },
        ],
        { cancelable: false }
      );
    }
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

  onPressEdit = async () => {
    const { navigation } = this.props;
    const { firstName, lastName, photo, age } = this.state;
    const { requestEditContact, editError } = this.props;
    const contactId = navigation.getParam('id');

    await requestEditContact(
      contactId,
      firstName,
      lastName,
      photo,
      Number(age),
    );

    if (isEmpty(editError)) {
      Alert.alert(
        'Success!',
        'Successfully edited contact',
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
    const { editLoading, contactDetails, navigation } = this.props;
    const { firstName, lastName, photo, age } = this.state;
    const contactId = navigation.getParam('id');
    let disabled = true;

    if (firstName && lastName && photo && age) {
      const editedContact = {
        id: contactId,
        age: Number(age),
        firstName,
        lastName,
        photo,
      }

      if (!isEqual(editedContact, contactDetails)) {
        disabled = false;
      }
    }

    return (
      <View style={Styles.buttonContainer}>
        <Button
          height={40}
          width={'100%'}
          text='EDIT'
          onPress={this.onPressEdit}
          disabled={disabled}
          loading={editLoading}
        />
      </View>
    );
  }

  render() {
    const { detailsLoading, deleteLoading } = this.props;

    if (detailsLoading || deleteLoading) {
      return (
        <View style={Styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

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

export default ContactDetails;
