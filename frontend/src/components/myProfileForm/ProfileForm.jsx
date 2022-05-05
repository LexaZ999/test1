import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MainFields from './MainFields.jsx';

const ProfileForm = () => {
  console.log();
  return (
    <Formik
      initialValues={{ lastname: 'Иванов', firstname: 'Иван' }}
      validationSchema={Yup.object({
        lastname: Yup.string().required('Required'),
        firstname: Yup.string().required('Required'),
      })}
      onSubmit={() => console.log('submit')}
    >
      <Form className="col-12 col-xxl-6 col-lg-7 col-lg-6 mt-3 mx-auto">
        <MainFields />
      </Form>
    </Formik>
  );
};

export default ProfileForm;
