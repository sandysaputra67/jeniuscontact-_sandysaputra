import axios from 'axios';
import { get } from 'lodash';

import {
  GET_ALL_CONTACTS,
  GET_ALL_CONTACTS_FAILED,
  GET_ALL_CONTACTS_SUCCESS,
} from './contactsActionsConstants';
import { getAllContacts as getAllContactsEndpoint } from '../../../api/contacts/contactsEndpoints';

const getAllContacts = () => ({
  type: GET_ALL_CONTACTS,
});

const getAllContactsFailed = (error) => ({
  type: GET_ALL_CONTACTS_FAILED,
  error,
});

const getAllContactsSuccess = (data) => ({
  type: GET_ALL_CONTACTS_SUCCESS,
  data,
});

const requestGetAllContacts = () => async (dispatch) => {
  dispatch(getAllContacts());

  try {
    const result = await axios.get(getAllContactsEndpoint);
    const data = get(result, 'data.data', []);

    dispatch(getAllContactsSuccess(data));
  } catch (error) {
    dispatch(getAllContactsFailed(error.response));
  }
};

export {
  requestGetAllContacts,
};
