// src/components/ContactList.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { deleteContact } from '../store/contactSlice';
import { Link } from 'react-router-dom';

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="p-4">
      <h2>Contact List</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} className="border p-2 mb-2">
            <p>Name: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <Link to={`/contacts/${contact.id}`} className="text-blue-500">View Details</Link>
            <button onClick={() => handleDelete(contact.id)} className="text-red-500 ml-4">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
