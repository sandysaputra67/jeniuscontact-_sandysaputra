import React, { Component } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import { Styles } from './AllContactsScreen.styles';
import { Images } from '../../themes/images';
import { Routes } from '../../navigation/screenConfig/routes';
import { keyExtractor } from '../../utils/helpers';
import StackHeader from '../../components/StackHeader/StackHeader.component';
import ContactCard from '../../components/ContactCard/ContactCard.component';

class AllContactsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const goToAddContact = () => navigation.navigate(Routes.AddContact)

    return {
      header: (
        <StackHeader
          title={'Contacts'}
          rightIcon={Images.PLUS}
          onPressRight={goToAddContact}
        />
      ),
    };
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { requestGetAllContacts } = this.props;
    requestGetAllContacts();
  }

  renderItem = ({ item, index }) => {
    return (
      <ContactCard
        firstName={item.firstName}
        lastName={item.lastName}
      />
    );
  }

  renderEmptyComponent = () => {
    return (
      <View style={Styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  renderSeparator = () => {
    return (
      <View style={Styles.separator} />
    );
  }

  renderContactList = () => {
    const { contacts } = this.props;

    return (
      <FlatList
        data={contacts}
        keyExtractor={keyExtractor}
        renderItem={this.renderItem}
        ListEmptyComponent={this.renderEmptyComponent}
        ItemSeparatorComponent={this.renderSeparator}
      />
    );
  }

  render() {
    return (
      <View style={Styles.container}>
        {this.renderContactList()}
      </View>
    );
  }
}

export default AllContactsScreen;
