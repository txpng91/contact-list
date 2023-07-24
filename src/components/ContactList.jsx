import { useEffect, useState } from 'react';
import Contact from './Contact.jsx';

// The dummy data was used for fetch testing
const dummyContacts = [
  { id: 1, name: 'R2-D2', phone: '222-222-2222', email: 'r2d2@droids.com' },
  { id: 2, name: 'C-3PO', phone: '333-333-3333', email: 'c3po@droids.com' },
  { id: 3, name: 'BB-8', phone: '888-888-8888', email: 'bb8@droids.com' },
];

const API_URL = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`;

function ContactList({ setSelectedContactId }) {
  // Contacts and setContacts variable set equal to useState with array inside
  const [contacts, setContacts] = useState([]);

  // UseEffect used to fetch data and render only once
  useEffect(() => {
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
        console.error('Oh no! We have an issue with the fetch method.', error);
      }
    };
    // Call the function to fetch the data
    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr id='table-label-row'>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {/* Gets data from contacts and
         renders each contact inside the table */}
        {contacts.map((contact) => {
          return (
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
