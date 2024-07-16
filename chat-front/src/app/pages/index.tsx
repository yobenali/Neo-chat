"use client";
import React, { useState } from 'react';
import Dashboard from '../Dashboard';
import Chat from '../Chat';
import Details from '../Details';

const HomePage = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  const clients = [
    { id: 1, name: 'John Doe', imgClass: 'client-1', email: 'john.doe@gmail.com' , emergency: 'urgent' },
    { id: 2, name: 'Jane Smith', imgClass: 'client-2', email: 'Janesmith@atos.com', emergency: 'mid' },
    { id: 3, name:  'Tom Brown', imgClass: 'client-3', email: 'Tbrown@1337.ma', emergency: 'notapplicable' },
  ];

  return (
    <div style={{ display: 'flex', height: '98vh', opacity: '0.8', backgroundColor: 'rgba(232, 233, 233, 0.9)', borderRadius: '3%', border: '2px solid rgba(256, 256,256, 0.6)', margin: '0.5% 4% 2% 1%' }}>
      <div style={{ flex: 1, backgroundColor: 'rgba(180, 180, 180, 0.3)'}}>
        <Dashboard clients={clients} setSelectedClient={setSelectedClient} />
      </div>
      <div style={{ flex: 2, backgroundColor: 'rgba(242, 243, 243, 0.2)', opacity: '0.8'}}>
        <Chat />
      </div>
      <div style={{ flex: 1, backgroundColor: 'rgba(180, 180, 180, 0.3)' }}>
        <Details selectedClient={selectedClient} />
      </div>
    </div>
  );
};

export default HomePage;
