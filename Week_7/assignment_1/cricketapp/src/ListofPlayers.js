import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 85 },
    { name: 'Rohit Sharma', score: 92 },
    { name: 'KL Rahul', score: 67 },
    { name: 'Hardik Pandya', score: 78 },
    { name: 'Rishabh Pant', score: 55 },
    { name: 'Ravindra Jadeja', score: 42 },
    { name: 'Mohammed Shami', score: 28 },
    { name: 'Jasprit Bumrah', score: 15 },
    { name: 'Yuzvendra Chahal', score: 35 },
    { name: 'Mohammed Siraj', score: 18 },
    { name: 'Shubman Gill', score: 88 }
  ];

  const playersBelow70 = players.filter(player => player.score < 70);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: '#2c3e50', textAlign: 'center', marginBottom: '30px' }}>
        List of Players
      </h2>
      
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#34495e', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>
          All Players (Using ES6 Map)
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px', marginTop: '20px' }}>
          {players.map((player, index) => (
            <div 
              key={index} 
              style={{
                border: '2px solid #3498db',
                borderRadius: '8px',
                padding: '15px',
                backgroundColor: '#ecf0f1',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>{player.name}</h4>
              <p style={{ 
                margin: '0', 
                fontSize: '18px', 
                fontWeight: 'bold',
                color: player.score >= 70 ? '#27ae60' : '#e74c3c'
              }}>
                Score: {player.score}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ color: '#34495e', borderBottom: '2px solid #e74c3c', paddingBottom: '10px' }}>
          Players with Scores Below 70 (Using ES6 Arrow Functions Filter)
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px', marginTop: '20px' }}>
          {playersBelow70.map((player, index) => (
            <div 
              key={index} 
              style={{
                border: '2px solid #e74c3c',
                borderRadius: '8px',
                padding: '15px',
                backgroundColor: '#fdf2f2',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>{player.name}</h4>
              <p style={{ 
                margin: '0', 
                fontSize: '18px', 
                fontWeight: 'bold',
                color: '#e74c3c'
              }}>
                Score: {player.score}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListofPlayers;
