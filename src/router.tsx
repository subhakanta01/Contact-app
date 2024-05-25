// src/router.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddContactForm from './components/AddContactForm';
import ContactDetails from './components/ContactDetails';
import ContactList from './components/ContactList';
import LineChart from './components/LineChart';
import MapComponent from './components/MapComponent';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/add-contact" element={<AddContactForm />} />
      <Route path="/contacts/:id" element={<ContactDetails />} />
      <Route path="/contact-list" element={<ContactList />} />
      <Route path="/line-chart" element={<LineChart />} />
      <Route path="/map-component" element={<MapComponent />} />
    </Routes>
  );
};

export default AppRouter;
