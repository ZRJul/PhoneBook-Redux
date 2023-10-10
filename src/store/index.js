import {createStore} from 'redux'

export const deleteContact = (contactId) => ({
    type: 'DELETE_CONTACT',
    payload: contactId,
});

export const updateContacts = (updatedContacts) => ({
    type: 'UPDATE_CONTACTS',
    payload: updatedContacts,
});

export const addContact = (contact) => ({
    type: 'ADD_CONTACT',
    payload: contact,
});

export const editContact = (updatedContact) => ({
    type: 'EDIT_CONTACT',
    payload: updatedContact,
});


const initialState = {
    contacts: [],
};



const contactReducer = (state = initialState, action) => {
    if (action.type === 'ADD_CONTACT') {
        return {
            ...state,
            contacts: [...state.contacts, action.payload],
        };
    }

    if (action.type === 'DELETE_CONTACT') {
        const updatedContacts = state.contacts.filter(
            (contact) => contact.id !== action.payload
        );
        return {
            ...state,
            contacts: updatedContacts,
        };
    }

    if (action.type === 'UPDATE_CONTACTS') {
        return {
            ...state,
            contacts: action.payload,
        };
    }

    if (action.type === 'EDIT_CONTACT') {
        const updatedContacts = state.contacts.map((contact) =>
            contact.id === action.payload.id ? action.payload : contact
        );
        return {
            ...state,
            contacts: updatedContacts,
        };
    }

    return state;
};

const store = createStore(contactReducer);

export default store;
