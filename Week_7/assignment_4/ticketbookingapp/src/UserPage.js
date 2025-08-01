import React, { useState } from 'react';

const UserPage = () => {
  const [bookedFlights, setBookedFlights] = useState([]);
  
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

  const bookFlight = (flight) => {
    if (!bookedFlights.find(booked => booked.id === flight.id)) {
      setBookedFlights([...bookedFlights, flight]);
      alert(`Flight booked successfully! ${flight.airline} - ${flight.from} to ${flight.to}`);
    } else {
      alert('Flight already booked!');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Flight Booking - User View</h2>
      <p>Welcome! You can now book flights.</p>
      
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
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '14px' }}>Departure: {flight.departure}</span>
                <span style={{ fontSize: '14px', marginLeft: '20px' }}>Arrival: {flight.arrival}</span>
              </div>
              <button 
                onClick={() => bookFlight(flight)}
                style={{
                  backgroundColor: bookedFlights.find(booked => booked.id === flight.id) ? '#4CAF50' : '#2196F3',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                {bookedFlights.find(booked => booked.id === flight.id) ? 'Booked' : 'Book Now'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {bookedFlights.length > 0 && (
        <div style={{ marginTop: '30px' }}>
          <h3>Your Booked Flights</h3>
          <div style={{ display: 'grid', gap: '10px' }}>
            {bookedFlights.map(flight => (
              <div key={flight.id} style={{
                border: '1px solid #4CAF50',
                borderRadius: '8px',
                padding: '10px',
                backgroundColor: '#e8f5e8'
              }}>
                <strong>{flight.airline}</strong> - {flight.from} to {flight.to} - ₹{flight.price}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage;
