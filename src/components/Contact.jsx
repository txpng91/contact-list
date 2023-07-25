// Contact function with props of id and name object
function Contact({ setSelectedContactId, contact }) {
  return (
    // Clickable row that'll set an id to the object id
    <tr
      className='contact-item'
      key={contact.id}
      onClick={() => {
        setSelectedContactId(contact.id);
      }}
    >
      {/* Set up the props */}
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}

export default Contact;
