import {
  GET_ALL_CONTACTS,
  GET_ALL_CONTACTS_FAILED,
  GET_ALL_CONTACTS_SUCCESS,
} from '../../actions/contacts/contactsActionsConstants';

const initialState = {
  actionStatus: '',
  loading: false,
  contacts: [],
  error: {},
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CONTACTS:
      return {
        ...state,
        actionStatus: GET_ALL_CONTACTS,
        loading: true,
      }
    case GET_ALL_CONTACTS_FAILED:
      return {
        ...state,
        actionStatus: GET_ALL_CONTACTS_FAILED,
        loading: false,
        error: action.error,
      }
    case GET_ALL_CONTACTS_SUCCESS:
      return {
        ...state,
        actionStatus: GET_ALL_CONTACTS_SUCCESS,
        loading: false,
        contacts: action.data,
      }

    default:
      return { ...state };
  }
}

export default contactsReducer;
