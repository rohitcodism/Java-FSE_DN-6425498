import React from 'react';
import './App.css';

function App() {
  const office = {
    name: "TechHub Office Space",
    rent: 75000,
    address: "123 Business District, Mumbai, Maharashtra"
  };

  const officeSpaces = [
    {
      id: 1,
      name: "TechHub Office Space",
      rent: 75000,
      address: "123 Business District, Mumbai, Maharashtra",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      name: "Creative Workspace",
      rent: 45000,
      address: "456 Innovation Street, Bangalore, Karnataka",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      name: "Executive Business Center",
      rent: 95000,
      address: "789 Corporate Avenue, Delhi, NCR",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      name: "Modern Co-working Space",
      rent: 35000,
      address: "321 Startup Hub, Pune, Maharashtra",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      name: "Budget Friendly Office",
      rent: 25000,
      address: "987 Small Business Lane, Chennai, Tamil Nadu",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 7,
      name: "Premium Business Suite",
      rent: 120000,
      address: "555 Elite Towers, Hyderabad, Telangana",
      image: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="App">
      <h1 style={{
        textAlign: 'center',
        color: '#2c3e50',
        fontSize: '2.5rem',
        marginBottom: '20px',
        padding: '20px',
        backgroundColor: '#ecf0f1',
        borderRadius: '10px'
      }}>
        Office Space Rental Platform
      </h1>

      <div style={{
        maxWidth: '800px',
        margin: '20px auto',
        padding: '20px',
        border: '2px solid #3498db',
        borderRadius: '10px',
        backgroundColor: '#f8f9fa'
      }}>
        <h2 style={{ color: '#34495e', marginBottom: '15px' }}>Featured Office Space</h2>
        <img 
          src={officeSpaces[0].image}
          alt="Office Space"
          style={{
            width: '100%',
            height: '300px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: '15px'
          }}
        />
        <h3 style={{ color: '#2c3e50', margin: '10px 0' }}>{office.name}</h3>
        <p style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold',
          color: office.rent > 60000 ? 'green' : 'red',
          margin: '10px 0'
        }}>
          Rent: ₹{office.rent.toLocaleString()}
        </p>
        <p style={{ color: '#7f8c8d', fontSize: '1.1rem' }}>{office.address}</p>
      </div>

      <div style={{ padding: '20px' }}>
        <h2 style={{ 
          textAlign: 'center', 
          color: '#2c3e50', 
          marginBottom: '30px',
          fontSize: '2rem'
        }}>
          Available Office Spaces
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {officeSpaces.map((space) => (
            <div 
              key={space.id}
              style={{
                border: '2px solid #bdc3c7',
                borderRadius: '10px',
                padding: '20px',
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease'
              }}
            >
              <img 
                src={space.image}
                alt={space.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{ 
                color: '#2c3e50', 
                margin: '0 0 10px 0',
                fontSize: '1.3rem'
              }}>
                {space.name}
              </h3>
              <p style={{ 
                fontSize: '1.3rem', 
                fontWeight: 'bold',
                color: space.rent > 60000 ? 'green' : 'red',
                margin: '10px 0'
              }}>
                Rent: ₹{space.rent.toLocaleString()}
              </p>
              <p style={{ 
                color: '#7f8c8d', 
                fontSize: '1rem',
                lineHeight: '1.4',
                margin: '10px 0 0 0'
              }}>
                {space.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
