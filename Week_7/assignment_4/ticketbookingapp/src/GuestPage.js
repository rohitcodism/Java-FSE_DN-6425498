import React from 'react';

const GuestPage = () => {
  const flights = [
    {
      id: 1,
      airline: "Air India",
      from: "Delhi",
      to: "Mumbai",
      departure: "08:00 AM",
      arrival: "10:30 AM",
      price: 4500,
      duration: "2h 30m"
    },
    {
      id: 2,
      airline: "IndiGo",
      from: "Bangalore",
      to: "Chennai",
      departure: "02:15 PM",
      arrival: "03:30 PM",
      price: 3200,
      duration: "1h 15m"
    },
    {
      id: 3,
      airline: "SpiceJet",
      from: "Kolkata",
      to: "Delhi",
      departure: "06:45 AM",
      arrival: "09:10 AM",
      price: 5800,
      duration: "2h 25m"
    },
    {
      id: 4,
      airline: "Vistara",
      from: "Mumbai",
      to: "Hyderabad",
      departure: "11:20 AM",
      arrival: "12:45 PM",
      price: 4100,
      duration: "1h 25m"
    },
    {
      id: 5,
      airline: "GoAir",
      from: "Pune",
      to: "Goa",
      departure: "05:30 PM",
      arrival: "06:45 PM",
      price: 2900,
      duration: "1h 15m"
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Flight Details - Guest View</h2>
      <p>Browse available flights. Login to book tickets.</p>
      
      <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
        {flights.map(flight => (
          <div key={flight.id} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            backgroundColor: '#f9f9f9'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ margin: '0 0 5px 0', color: '#333' }}>{flight.airline}</h4>
                <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
                  {flight.from} → {flight.to}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ margin: '0', fontWeight: 'bold', color: '#2196F3' }}>
                  ₹{flight.price}
                </p>
                <p style={{ margin: '0', fontSize: '12px', color: '#666' }}>
                  {flight.duration}
                </p>
              </div>
            </div>
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '14px' }}>Departure: {flight.departure}</span>
              <span style={{ fontSize: '14px' }}>Arrival: {flight.arrival}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestPage;
