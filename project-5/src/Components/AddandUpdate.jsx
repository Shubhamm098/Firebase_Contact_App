import React from 'react';
import Model from './Model'; // Corrected the typo from Modal to Model
import { Field, Form, Formik } from 'formik';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../Config/firebase';

const AddandUpdate = ({ isOpen, onClose, isUpdate }) => {

   const addContact = async (contact) => {
    try {
        const contactRef = collection(db, "contacts")
        await addDoc(contactRef, contact);

    } catch (error) {
        console.log(error);
    }
   }

  return (
    <div>
      <Model isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{
            name: '',
            email: '',
          }}
          onSubmit={(values) => {
            addContact(values);
          }}
        >
          {({ handleSubmit }) => (
            <Form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <div className='flex flex-col gap-1'>
                <label htmlFor='name'>Name</label>
                <Field
                  name='name'
                  type='text'
                  className='border h-10'
                />
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor='email'>Email</label>
                <Field
                  name='email'
                  type='email'
                  className='border h-10'
                />
              </div>

              <button
                type='submit'
                className='border px-3 py-1 w-36 mx-auto bg-gray text-white'
              >
                {isUpdate ? "Update" : "Add"} contact
              </button>
            </Form>
          )}
        </Formik>
      </Model>
    </div>
  );
};

export default AddandUpdate;
