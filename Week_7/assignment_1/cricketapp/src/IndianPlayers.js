import React from 'react';

const IndianPlayers = () => {
  const teamPlayers = [
    'Virat Kohli', 'Rohit Sharma', 'KL Rahul', 'Hardik Pandya',
    'Rishabh Pant', 'Ravindra Jadeja', 'Mohammed Shami', 'Jasprit Bumrah',
    'Shubman Gill', 'Axar Patel', 'Suryakumar Yadav'
  ];

  const [oddPlayer1, evenPlayer1, oddPlayer2, evenPlayer2, oddPlayer3, evenPlayer3, oddPlayer4, evenPlayer4, oddPlayer5, evenPlayer5, oddPlayer6] = teamPlayers;
  
  const oddTeamPlayers = [oddPlayer1, oddPlayer2, oddPlayer3, oddPlayer4, oddPlayer5, oddPlayer6];
  const evenTeamPlayers = [evenPlayer1, evenPlayer2, evenPlayer3, evenPlayer4, evenPlayer5];

  const T20players = ['Virat Kohli', 'Rohit Sharma', 'KL Rahul', 'Hardik Pandya', 'Rishabh Pant', 'Suryakumar Yadav'];
  const RanjiTrophyPlayers = ['Prithvi Shaw', 'Mayank Agarwal', 'Sarfaraz Khan', 'Sheldon Jackson', 'Ishan Porel', 'Navdeep Saini'];
  
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: '#2c3e50', textAlign: 'center', marginBottom: '30px' }}>
        Indian Cricket Team Players
      </h2>
      
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#34495e', borderBottom: '2px solid #f39c12', paddingBottom: '10px' }}>
          Odd Position Players (Using ES6 Destructuring)
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginTop: '20px' }}>
          {oddTeamPlayers.map((player, index) => (
            <div 
              key={index} 
              style={{
                border: '2px solid #f39c12',
                borderRadius: '8px',
                padding: '15px',
                backgroundColor: '#fef9e7',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}
            >
              <h4 style={{ margin: '0', color: '#2c3e50', fontSize: '16px' }}>{player}</h4>
              <p style={{ margin: '5px 0 0 0', color: '#f39c12', fontSize: '14px' }}>Position: {(index * 2) + 1}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#34495e', borderBottom: '2px solid #e74c3c', paddingBottom: '10px' }}>
          Even Position Players (Using ES6 Destructuring)
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginTop: '20px' }}>
          {evenTeamPlayers.map((player, index) => (
            <div 
              key={index} 
              style={{
                border: '2px solid #e74c3c',
                borderRadius: '8px',
                padding: '15px',
                backgroundColor: '#fdf2f2',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}
            >
              <h4 style={{ margin: '0', color: '#2c3e50', fontSize: '16px' }}>{player}</h4>
              <p style={{ margin: '5px 0 0 0', color: '#e74c3c', fontSize: '14px' }}>Position: {(index * 2) + 2}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#34495e', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>
          T20 Players
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginTop: '20px' }}>
          {T20players.map((player, index) => (
            <div 
              key={index} 
              style={{
                border: '2px solid #3498db',
                borderRadius: '8px',
                padding: '10px',
                backgroundColor: '#ebf3fd',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}
            >
              <p style={{ margin: '0', color: '#2c3e50', fontSize: '14px', fontWeight: 'bold' }}>{player}</p>
              <p style={{ margin: '2px 0 0 0', color: '#3498db', fontSize: '12px' }}>T20 Format</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#34495e', borderBottom: '2px solid #9b59b6', paddingBottom: '10px' }}>
          Ranji Trophy Players
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginTop: '20px' }}>
          {RanjiTrophyPlayers.map((player, index) => (
            <div 
              key={index} 
              style={{
                border: '2px solid #9b59b6',
                borderRadius: '8px',
                padding: '10px',
                backgroundColor: '#f4ecf7',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}
            >
              <p style={{ margin: '0', color: '#2c3e50', fontSize: '14px', fontWeight: 'bold' }}>{player}</p>
              <p style={{ margin: '2px 0 0 0', color: '#9b59b6', fontSize: '12px' }}>Ranji Trophy</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ color: '#34495e', borderBottom: '2px solid #27ae60', paddingBottom: '10px' }}>
          Merged Players (Using ES6 Spread Operator)
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginTop: '20px' }}>
          {mergedPlayers.map((player, index) => (
            <div 
              key={index} 
              style={{
                border: '2px solid #27ae60',
                borderRadius: '8px',
                padding: '10px',
                backgroundColor: '#eafaf1',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}
            >
              <p style={{ margin: '0', color: '#2c3e50', fontSize: '14px', fontWeight: 'bold' }}>{player}</p>
              <p style={{ margin: '2px 0 0 0', color: '#27ae60', fontSize: '12px' }}>
                {T20players.includes(player) ? 'T20' : 'Ranji Trophy'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndianPlayers;
