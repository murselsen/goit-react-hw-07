import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
// Styles
import Css from "./Form.module.css";

import { useDispatch } from "react-redux";

const AForm = () => {
  const nameId = nanoid();
  const telId = nanoid();

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch({ type: "contacts/addContact", payload: values });
    resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters long"),
    phone: Yup.number().required("Phone number is required"),
  });

  return (
    <Formik
      initialValues={{ name: "", phone: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={Css.Form}>
        <div className={Css.FormGroup}>
          <label className={Css.Label} htmlFor={nameId}>
            Name
          </label>
          <Field
            className={Css.Input}
            id={nameId}
            name="name"
            placeholder="Enter name"
          />
          <ErrorMessage name="name" component="span" className={Css.Error} />
        </div>
        <div className={Css.FormGroup}>
          <label className={Css.Label} htmlFor={telId}>
            Phone
          </label>
          <Field
            className={Css.Input}
            id={telId}
            name="phone"
            maxLength="7"
            placeholder="Enter phone number"
          />
          <ErrorMessage name="phone" component="span" className={Css.Error} />
        </div>
        <div className={Css.FormGroup}>
          <button type="reset" className={Css.Button}>
            Reset
          </button>
          <button type="submit" className={Css.Button}>
            Save
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default AForm;
