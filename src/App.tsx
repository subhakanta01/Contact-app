// src/App.tsx
import React from 'react';
import Sidebar from './components/Sidebar';
import AppRouter from './router';

const App: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-6 w-full">
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
