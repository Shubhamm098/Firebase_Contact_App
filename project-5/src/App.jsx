import React, { useEffect, useState } from 'react';
import { RiSearchLine } from "react-icons/ri";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs } from 'firebase/firestore';
import { db } from './Config/firebase';
import Navbar from './Components/Navbar'; // Import Navbar component
import { FaTrash } from "react-icons/fa";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import ContactCards from './Components/ContactCards';
import Model from './Components/Model';
import AddandUpdate from './Components/AddandUpdate';
import useDisclouse from './hooks/useDisclouse'; // Keep it as "disclouse"

const App = () => {
  const [contacts, setContacts] = useState([]);

  const { onClose, onOpen, isOpen } = useDisclouse(); // Keep it as "disclouse"

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactSnapshot = await getDocs(contactsRef);

        // Extract data from each document
        const contactsData = contactSnapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          };
        });

        // Update state with fetched contacts
        setContacts(contactsData);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    getContacts();

  }, []);

  return (
    <>
    <div className='max-w-[370px] m-auto'>
      {/* Render Navbar component */}
      <Navbar/>
      <div className="flex">
        <div className='flex-grow items-center flex relative'>
          <RiSearchLine className='text-white text-3xl absolute mx-5 my-1'/>
          <input type="text" className='bg-transparent border rounded border-white h-10 flex-grow mx-3 text-white pl-11'/>
        </div>
        <div><AiFillPlusCircle onClick={onOpen}  className='text-4xl text-white mr-3 cursor-pointer'/></div>
      </div>
      <div className='my-4'>
        {
          contacts.map((contact) => (
            <ContactCards key={contact.id} contact={contact}/>
          ))
        }
      </div>
    </div>
    <AddandUpdate
     onClose={onClose} isOpen={isOpen}
    />
    </>
  );
};

export default App;
