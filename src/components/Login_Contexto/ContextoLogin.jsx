import React, { createContext, useState } from 'react';

const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

export { AdminContext, AdminProvider };


