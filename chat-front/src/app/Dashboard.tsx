import React from 'react';
import './Dashboard.css';

const Dashboard = ({ clients, setSelectedClient }) => {
  return (
    <div className="container">
      <h2 className="heading">Chat</h2>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <button id="search-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width={26} height={26} color="#000000" fill="none">
          <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        </button>
      </div>
      <div className="dropdown-dpt">
        <div className="triangle"></div>
        <h4>Departments</h4>
        <div className="dropdown-content">
          <a href="#">#IT<br /></a>
          <a href="#">#HR<br /></a>
          <a href="#">#Finance<br /></a>
        </div>
      </div>
      <div className="dropdown-client">
        <div className="triangle"></div>
        <h4>Messages</h4>
        <div className="dropdown-ct">
          {clients.map(client => (
            <div className={`client ${client.imgClass}`} key={client.id} onClick={() => setSelectedClient(client)}>
              <div className="client-image"></div>
              {client.emergency && <span className={`dot ${client.emergency}`} key={client.id}></span>}
              <span>{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
