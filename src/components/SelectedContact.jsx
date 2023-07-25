import React, { useState, useEffect } from 'react';
import '../App.css';

// Single contact function with props of selectedContactid and setSelectedContactId
function SelectedContact({ selectedContactId, setSelectedContactId }) {
  // Contact and setContact set equal to a useState with null as default value
  const [contact, setContact] = useState(null);
  //   UseEffect used to wrap an async function
  useEffect(() => {
    // Async function to set equal to setContact
    const getContact = async () => {
      try {
        // A variable set equal to a fetch response followed by the selectedContactId prop
        const res = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        // Parsed response to an object
        const singleContact = await res.json();
        // Have setContact set equal to the object and pass it to contact
        setContact(singleContact);
      } catch (error) {
        console.error(`We have an issue with getting this contact.`, error);
      }
    };
    // Call the the function in the useEffect
    getContact();
  }, []);
  return (
    // Render single contact data that was passed by setContact with conditions
    <div className='contact-details'>
      <h2>{contact?.name}</h2>
      <div className='contact-basics'>
        <p>
          <strong>Username: </strong>
          {contact?.username}
        </p>
        <p>
          <strong>Email: </strong>
          {contact?.email}
        </p>
        <p>
          <strong>Phone: </strong>
          {contact?.phone}
        </p>
      </div>
      <div className='flex-details'>
        <div className='contact-address'>
          <p>
            <strong>Address: </strong>
          </p>
          <p>
            {contact?.address.street}, {contact?.address.suite}
          </p>
          <p>
            {contact?.address.city}, {contact?.address.zipcode}
          </p>
        </div>
        <a href={contact?.website}></a>
        <div className='contact-company'>
          <p>
            <strong>Company: </strong>
          </p>
          <p>{contact?.company.name}</p>
          <p>{contact?.company.catchPhrase}</p>
          <p>{contact?.company.bs}</p>
        </div>
      </div>

      {/* Button created to have setSelectedContactId set to null.
        In other words, returning to the contact list. */}
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
