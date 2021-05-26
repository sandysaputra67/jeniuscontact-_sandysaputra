import { JENIUS_HOST } from 'react-native-dotenv';

const getAllContacts = `${JENIUS_HOST}/contact`;
const saveContact = `${JENIUS_HOST}/contact`;

export {
  getAllContacts,
  saveContact,
};