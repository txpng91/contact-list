import React, { useEffect, useState } from 'react';
import Contact from './Contact.jsx';

// API variable set equal to the url
const API_URL = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`;

function ContactList({ setSelectedContactId }) {
  // Contacts and setContacts variable set equal to useState with array inside
  const [contacts, setContacts] = useState([]);

  // UseEffect used to fetch data and render only once
  useEffect(
    () => {
      const fetchData = async () => {
        // Use try and catch block
        try {
          // Variable set equal to a fetch request
          const res = await fetch(API_URL);
          // Variable set equal to parsed response
          const data = await res.json();
          // Set the second array of useState equal to the parsed response
          setContacts(data);
        } catch (
          error
          // Throw a message if an error occurs
        ) {
          console.error(
            'Oh no! We have an issue with the fetch method.',
            error
          );
        }
      };
      // Call the function to fetch the data
      fetchData();
    },
    // Dependency array use to allow fetch to run only once
    []
  );

  return (
    <table>
      <thead></thead>
      <tbody>
        <tr id='table-label-row'>
          <td>
            <strong>Name</strong>
          </td>
          <td>
            <strong>Email</strong>
          </td>
          <td>
            <strong>Phone</strong>
          </td>
        </tr>
        {/* Gets data from contacts and
         renders each contact inside the table */}
        {contacts.map((contact) => {
          return (
            // Call the contact function with props
            <Contact
              key={contact.id}
              contact={contact}
              setSelectedContactId={setSelectedContactId}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default ContactList;
