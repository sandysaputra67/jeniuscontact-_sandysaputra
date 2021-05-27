import { connect } from 'react-redux';

import AllContactsScreen from './AllContactsScreen.component';
import { requestGetAllContacts } from '../../redux/actions/contacts/contactsActions';

const mapStateToProps = (state) => ({
  contacts: state.contacts.contacts,
  loading: state.contacts.loading,
  getAllContactsError: state.contacts.getAllContactsError,
});

const mapDispatchToProps = (dispatch) => ({
  requestGetAllContacts: () => dispatch(requestGetAllContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllContactsScreen);
