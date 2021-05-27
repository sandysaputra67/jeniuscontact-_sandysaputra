import {
  GET_ALL_CONTACTS,
  GET_ALL_CONTACTS_FAILED,
  GET_ALL_CONTACTS_SUCCESS,
  SAVE_CONTACT,
  SAVE_CONTACT_FAILED,
  SAVE_CONTACT_SUCCESS,
  GET_CONTACT_DETAILS,
  GET_CONTACT_DETAILS_FAILED,
  GET_CONTACT_DETAILS_SUCCESS,
  EDIT_CONTACT,
  EDIT_CONTACT_FAILED,
  EDIT_CONTACT_SUCCESS,
  DELETE_CONTACT,
  DELETE_CONTACT_FAILED,
  DELETE_CONTACT_SUCCESS,
} from '../../actions/contacts/contactsActionsConstants';

const initialState = {
  actionStatus: '',
  loading: false,
  saveLoading: false,
  detailsLoading: false,
  editLoading: false,
  deleteLoading: false,
  contacts: [],
  contactDetails: {},
  message: '',
  getAllContactsError: {},
  saveContactError: {},
  detailsError: {},
  editError: {},
  deleteError: {},
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CONTACTS:
      return {
        ...state,
        actionStatus: GET_ALL_CONTACTS,
        loading: true,
        getAllContactsError: {},
        contacts: [],
      };
    case GET_ALL_CONTACTS_FAILED:
      return {
        ...state,
        actionStatus: GET_ALL_CONTACTS_FAILED,
        loading: false,
        getAllContactsError: action.error,
      };
    case GET_ALL_CONTACTS_SUCCESS:
      return {
        ...state,
        actionStatus: GET_ALL_CONTACTS_SUCCESS,
        loading: false,
        contacts: action.data,
      };
    case SAVE_CONTACT:
      return {
        ...state,
        actionStatus: SAVE_CONTACT,
        saveLoading: true,
        saveContactError: {},
        message: '',
      };
    case SAVE_CONTACT_FAILED:
      return {
        ...state,
        actionStatus: SAVE_CONTACT_FAILED,
        saveLoading: false,
        saveContactError: action.error,
      };
    case SAVE_CONTACT_SUCCESS:
      return {
        ...state,
        actionStatus: SAVE_CONTACT_SUCCESS,
        saveLoading: false,
        message: action.data,
      };
    case GET_CONTACT_DETAILS:
      return {
        ...state,
        actionStatus: GET_CONTACT_DETAILS,
        detailsLoading: true,
        detailsError: {},
        contactDetails: {},
      };
    case GET_CONTACT_DETAILS_FAILED:
      return {
        ...state,
        actionStatus: GET_CONTACT_DETAILS_FAILED,
        detailsLoading: false,
        detailsError: action.error,
      };
    case GET_CONTACT_DETAILS_SUCCESS:
      return {
        ...state,
        actionStatus: GET_CONTACT_DETAILS_SUCCESS,
        detailsLoading: false,
        contactDetails: action.data,
      };
    case EDIT_CONTACT:
      return {
        ...state,
        actionStatus: EDIT_CONTACT,
        editLoading: true,
        editError: {},
        message: '',
      };
    case EDIT_CONTACT_FAILED:
      return {
        ...state,
        actionStatus: EDIT_CONTACT_FAILED,
        editLoading: false,
        editError: action.error,
      };
    case EDIT_CONTACT_SUCCESS:
      return {
        ...state,
        actionStatus: EDIT_CONTACT_SUCCESS,
        editLoading: false,
        message: action.data,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        actionStatus: DELETE_CONTACT,
        deleteLoading: true,
        deleteError: {},
        message: '',
      };
    case DELETE_CONTACT_FAILED:
      return {
        ...state,
        actionStatus: DELETE_CONTACT_FAILED,
        deleteLoading: false,
        deleteError: action.error,
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        actionStatus: DELETE_CONTACT_SUCCESS,
        deleteLoading: false,
        message: action.data,
      };
    default:
      return { ...state };
  }
}

export default contactsReducer;
