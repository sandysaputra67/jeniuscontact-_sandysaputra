import { connect } from 'react-redux';

import AddContact from './AddContact.component';
import { requestSaveContact } from '../../redux/actions/contacts/contactsActions';

const mapStateToProps = (state) => ({
  saveLoading: state.contacts.saveLoading,
  saveContactError: state.contacts.saveContactError,
});

const mapDispatchToProps = (dispatch) => ({
  requestSaveContact: (
    firstName,
    lastName,
    photo,
    age
  ) => dispatch(requestSaveContact(firstName, lastName, photo, age)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
