import React from 'react';
import { Field } from 'formik';

const InputField = (props) => {
  const { data } = props;
  const {
    name, id, label, type,
  } = data;
  return (
    <div className="form-floating mb-4">
      <Field
        name={name}
        type={type}
        id={id}
        className="form-control border-black rounded-0"
        placeholder={label}
      />
      <label className="text-secondary" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default InputField;
