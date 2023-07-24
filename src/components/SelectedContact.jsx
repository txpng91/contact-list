import React, { useState, useEffect } from 'react';

function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    const getContact = async () => {
      try {
        const res = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const singleContact = await res.json();
        setContact(singleContact);
      } catch (error) {
        console.error(`We have an issue with getting this contact.`, error);
      }
    };
    getContact();
  }, []);
  return (
    <div>
      <h3>{contact?.name}</h3>
      <p>{contact?.email}</p>
      <button
        className='return-button'
        onClick={() => {
          setSelectedContactId(null);
        }}
      >
        Return
      </button>
    </div>
  );
}

export default SelectedContact;
