// src/components/AddContactForm.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../store/contactSlice';
import { v4 as uuidv4 } from 'uuid';

const AddContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addContact({ id: uuidv4(), name, email, phone }));
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="border p-2 w-full"/>
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="border p-2 w-full"/>
      </div>
      <div>
        <label>Phone</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required className="border p-2 w-full"/>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 mt-2">Add Contact</button>
    </form>
  );
};

export default AddContactForm;
