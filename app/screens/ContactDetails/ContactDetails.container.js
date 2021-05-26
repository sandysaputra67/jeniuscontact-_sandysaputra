import { connect } from 'react-redux';

import { requestGetContactDetails, requestEditContact } from '../../redux/actions/contacts/contactsActions';

import ContactDetails from './ContactDetails.component';

const mapStateToProps = (state) => ({
  detailsLoading: state.contacts.detailsLoading,
  editLoading: state.contacts.editLoading,
  contactDetails: state.contacts.contactDetails,
  error: state.contacts.error,
});

const mapDispatchToProps = (dispatch) => ({
  requestGetContactDetails: (contactId) => dispatch(requestGetContactDetails(contactId)),
  requestEditContact: (
    contactId,
    firstName,
    lastName,
    photo,
    age,
  ) => dispatch(requestEditContact(contactId, firstName, lastName, photo, age,))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);
