import React, { useState } from 'react';

const BookDetails = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [userRole, setUserRole] = useState('guest');

  const books = [
    {
      id: 1,
      title: "JavaScript Book",
      author: "John Doe",
      price: 1200,
      available: true
    },
    {
      id: 2,
      title: "Clean Code",
      author: "Robert Martin",
      price: 1800,
      available: false
    },
    {
      id: 3,
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: 800,
      available: true
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Book Details</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <label>User Role: </label>
        <select value={userRole} onChange={(e) => setUserRole(e.target.value)}>
          <option value="guest">Guest</option>
          <option value="member">Member</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div>
        {books.map(book => (
          <div key={book.id} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px' }}>
            <h4>{book.title}</h4>
            <p>Author: {book.author}</p>
            
            {/* Ternary Operator */}
            <p>{book.available ? 'Available' : 'Out of Stock'}</p>
            
            {/* Logical AND */}
            {userRole !== 'guest' && <p>Price: ₹{book.price}</p>}
            
            <button onClick={() => setSelectedBook(book)}>View Details</button>
          </div>
        ))}
      </div>

      {/* If-Else Block */}
      {selectedBook && (
        <div style={{ marginTop: '20px', padding: '15px', border: '2px solid blue' }}>
          <h3>Selected Book</h3>
          <p>Title: {selectedBook.title}</p>
          <p>Author: {selectedBook.author}</p>
          
          {/* Nested Ternary */}
          <p>
            {userRole === 'admin' ? 
              `Admin Price: ₹${selectedBook.price}` : 
              userRole === 'member' ? 
                `Member Price: ₹${selectedBook.price * 0.9}` : 
                'Please login to see price'
            }
          </p>
          
          <button onClick={() => setSelectedBook(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
