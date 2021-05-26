import { connect } from 'react-redux';

import { requestGetContactDetails } from '../../redux/actions/contacts/contactsActions';

import ContactDetails from './ContactDetails.component';

const mapStateToProps = (state) => ({
  detailsLoading: state.contacts.detailsLoading,
  contactDetails: state.contacts.contactDetails,
  error: state.contacts.error,
});

const mapDispatchToProps = (dispatch) => ({
  requestGetContactDetails: (contactId) => dispatch(requestGetContactDetails(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);
