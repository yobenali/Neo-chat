import Dashboard from '../Dashboard';
import Chat from '../Chat';
import Details from '../Details';

const HomePage = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'lightgray', opacity: '0.8', borderRadius: '3%', border: '2px solid orange', margin: '1% 1% 1% 1%'}}>
      <div style={{ flex: 1 }}>
        <Dashboard />
      </div>
      <div style={{ flex: 2, backgroundColor: '#ffffff' }}>
        <Chat />
      </div>
      <div style={{ flex: 1 }}>
        <Details />
      </div>
    </div>
  );
};

export default HomePage;
