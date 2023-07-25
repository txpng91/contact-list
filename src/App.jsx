import React, { useState } from 'react';
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';
import './App.css';

// Where React components are imported
function App() {
  // UseState used for contact ids with null by default
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    // Condition for a selectedContactId is null or has value
    <div>
      {/* If selectedContactId has a value: */}
      {selectedContactId ? (
        // SelectedContact function gets called with props
        // In other words, selects a contact
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        // If selectedContactId has no value:
        // ContactList function is called with props
        // In other words, list all the contacts
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </div>
  );
}

export default App;
