import { ActionTypes } from '../actions/contacts';

const initialState = {
  contacts: [],
  fetchContacts: false,
  fetchContactsSuccess: false,
  fetchContactsFailure: false,
  filterEven: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_CONTACTS:
      return {
        ...state,
        fetchContacts: true,
        fetchContactsSuccess: false,
        fetchContactsFailure: false,
      };
    case ActionTypes.FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        fetchContacts: false,
        fetchContactsSuccess: true,
        fetchContactsFailure: false,
        contacts: action.payload.contacts,
      };
    case ActionTypes.FETCH_CONTACTS_FAILURE:
      return {
        ...state,
        fetchContacts: false,
        fetchContactsSuccess: false,
        fetchContactsFailure: true,
      };

    case ActionTypes.RESET_DATA:
      return {
        ...initialState,
      };

    case ActionTypes.FILTER_EVEN:
      return {
        ...state,
        filterEven: action.payload,
      };

    default:
      return state;
  }
};
