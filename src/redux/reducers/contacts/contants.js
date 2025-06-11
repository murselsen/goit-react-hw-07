export const SLICE_NAME = "contacts";
// Fetch contacts action types
export const FETCH_CONTACTS = `${SLICE_NAME}/fetchContacts`;
export const FETCH_CONTACTS_PENDING = `${FETCH_CONTACTS}/pending`;
export const FETCH_CONTACTS_FULFILLED = `${FETCH_CONTACTS}/fulfilled`;
export const FETCH_CONTACTS_REJECTED = `${FETCH_CONTACTS}/rejected`;

export const GET_CONTACT = `${SLICE_NAME}/getContact`;
export const GET_CONTACT_PENDING = `${GET_CONTACT}/pending`;
export const GET_CONTACT_FULFILLED = `${GET_CONTACT}/fulfilled`;
export const GET_CONTACT_REJECTED = `${GET_CONTACT}/rejected`;

export const ADD_CONTACT = `${SLICE_NAME}/postContact`;
export const ADD_CONTACT_PENDING = `${ADD_CONTACT}/pending`;
export const ADD_CONTACT_FULFILLED = `${ADD_CONTACT}/fulfilled`;
export const ADD_CONTACT_REJECTED = `${ADD_CONTACT}/rejected`;

export const DELETE_CONTACT = `${SLICE_NAME}/deleteContact`;
export const DELETE_CONTACT_PENDING = `${DELETE_CONTACT}/pending`;
export const DELETE_CONTACT_FULFILLED = `${DELETE_CONTACT}/fulfilled`;
export const DELETE_CONTACT_REJECTED = `${DELETE_CONTACT}/rejected`;
