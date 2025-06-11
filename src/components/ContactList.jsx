import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Css from "./ContactList.module.css";
import {
  deleteContact,
  selectContacts,
} from "../redux/reducers/contacts/slice";
import { changeFilter } from "../redux/reducers/filters/slice";
import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";

const ContactList = () => {
  let contacts = useSelector(selectContacts);

  const dispatch = useDispatch();
  const handleDeleteUser = (id) => {
    dispatch(deleteContact({ id: id }));
  };

  const changeFrom = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  const searchId = nanoid();
  return (
    <div className={Css.ContactArea}>
      <h2 className={Css.ContactAreaTitle}>Contacts</h2>
      <Formik onChange={changeFrom}>
        <Form className={Css.ContactForm}>
          <div className={Css.ContactFormGroup}>
            <label className={Css.Label} htmlFor={searchId}>
              Search
            </label>
            <Field
              className={Css.Input}
              name="search"
              id={searchId}
              onChange={changeFrom}
              placeholder="Enter the name you want to search for..."
            />
          </div>
        </Form>
      </Formik>
      <ul className={Css.ContactList}>
        {contacts.map((contact) => (
          <li key={contact.id} className={Css.ContactItem}>
            <span className={Css.ItemBadge}>{contact.name[0]}</span>
            <p className={Css.Title}>{contact.name}</p>

            <p className={Css.subTitle}>{`${contact.phone.slice(
              0,
              3
            )}-${contact.phone.slice(3, 5)}-${contact.phone.slice(5)}`}</p>
            <button
              onClick={() => handleDeleteUser(contact.id)}
              className={Css.Btn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
