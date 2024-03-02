import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { IoMdContact } from 'react-icons/io';
import { RiEditCircleLine } from 'react-icons/ri';
import { db } from '../Config/firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import AddandUpdate from './AddandUpdate';
import useDisclouse from '../hooks/useDisclouse';

const ContactCards = ({ contact }) => {

  const {onClose, onOpen, isOpen} = useDisclouse();


  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, 'contacts', id));
      console.log('Contact deleted successfully!');
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <>
    <div className='bg-yellow flex justify-between mx-3 p-2 rounded-lg my-3 items-center'>
      <div className="flex gap-2 font-medium">
        <IoMdContact className='text-4xl text-orange'/>
        <div>
          <h2>{contact.name}</h2>
          <p>{contact.email}</p>
        </div>
      </div>
      <div className='flex gap-2 text-2xl'>
        <RiEditCircleLine className='text-3xl cursor-pointer'/>
        <FaTrash
          className='cursor-pointer'
          onClick={() => deleteContact(contact.id)}
        />
      </div>
    </div>
    <AddandUpdate isUpdate isOpen={isOpen}  onClose={onClose}/>
    </>
  );
};

export default ContactCards;
