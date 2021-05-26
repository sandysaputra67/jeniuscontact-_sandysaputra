import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

import { Styles } from './ContactCard.styles';

const ContactCard = ({
  firstName,
  lastName,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress} style={Styles.container}>
    <Text style={Styles.contactName}>
      {`${firstName} ${lastName}`}
    </Text>
  </TouchableOpacity>
);

export default ContactCard;
