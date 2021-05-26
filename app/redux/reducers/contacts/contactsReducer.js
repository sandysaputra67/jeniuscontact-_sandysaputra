import {
  GET_ALL_CONTACTS,
  GET_ALL_CONTACTS_FAILED,
  GET_ALL_CONTACTS_SUCCESS,
  SAVE_CONTACT,
  SAVE_CONTACT_FAILED,
  SAVE_CONTACT_SUCCESS,
} from '../../actions/contacts/contactsActionsConstants';

const initialState = {
  actionStatus: '',
  loading: false,
  saveLoading: false,
  contacts: [],
  error: {},
  message: '',
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CONTACTS:
      return {
        ...state,
        actionStatus: GET_ALL_CONTACTS,
        loading: true,
        error: {},
        contacts: [],
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
    case SAVE_CONTACT:
      return {
        ...state,
        actionStatus: SAVE_CONTACT,
        saveLoading: true,
        error: {},
      }
    case SAVE_CONTACT_FAILED:
      return {
        ...state,
        actionStatus: SAVE_CONTACT_FAILED,
        saveLoading: false,
        error: action.error,
      }
    case SAVE_CONTACT_SUCCESS:
      return {
        ...state,
        actionStatus: SAVE_CONTACT_SUCCESS,
        saveLoading: false,
        message: action.data,
      }

    default:
      return { ...state };
  }
}

export default contactsReducer;
