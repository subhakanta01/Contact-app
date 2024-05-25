// src/components/ContactDetails.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useParams } from 'react-router-dom';

const ContactDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const contact = useSelector((state: RootState) => state.contacts.contacts.find(c => c.id === id));

  if (!contact) {
    return <p>Contact not found</p>;
  }

  return (
    <div className="p-4">
      <h2>Contact Details</h2>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
    </div>
  );
};

export default ContactDetails;
