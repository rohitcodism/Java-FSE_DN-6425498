import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = useState('books');

  const components = {
    books: <BookDetails />,
    blogs: <BlogDetails />,
    courses: <CourseDetails />
  };

  return (
    <div className="App">
      <header style={{ padding: '20px', borderBottom: '1px solid #ddd' }}>
        <h1>Blogger App</h1>
        <div>
          {Object.keys(components).map(component => (
            <button
              key={component}
              onClick={() => setActiveComponent(component)}
              style={{
                margin: '5px',
                padding: '8px 16px',
                backgroundColor: activeComponent === component ? '#007bff' : '#f8f9fa',
                color: activeComponent === component ? 'white' : 'black',
                border: '1px solid #ddd',
                cursor: 'pointer'
              }}
            >
              {component}
            </button>
          ))}
        </div>
      </header>

      <main style={{ padding: '20px' }}>
        {components[activeComponent]}
      </main>
    </div>
  );
}

export default App;
