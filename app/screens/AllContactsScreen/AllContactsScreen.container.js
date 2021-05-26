import { connect } from 'react-redux';

import AllContactsScreen from './AllContactsScreen.component';
import { requestGetAllContacts } from '../../redux/actions/contacts/contactsActions';

const mapStateToProps = (state) => ({
  contacts: state.contacts.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  requestGetAllContacts: () => dispatch(requestGetAllContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllContactsScreen);
