import { connect } from 'react-redux';

import AllContactsScreen from './AllContactsScreen.component';
import { requestGetAllContacts } from '../../redux/actions/contacts/contactsActions';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  requestGetAllContacts: () => dispatch(requestGetAllContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllContactsScreen);
