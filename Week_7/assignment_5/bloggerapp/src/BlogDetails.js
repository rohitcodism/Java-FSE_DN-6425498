import React, { useState } from 'react';

const BlogDetails = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const blogs = [
    {
      id: 1,
      title: "React Basics",
      author: "John Doe",
      category: "technology",
      featured: true
    },
    {
      id: 2,
      title: "Health Tips",
      author: "Jane Smith",
      category: "lifestyle",
      featured: false
    },
    {
      id: 3,
      title: "Money Saving",
      author: "Mike Johnson",
      category: "finance",
      featured: true
    }
  ];

  const filteredBlogs = activeCategory === 'all' ? blogs : blogs.filter(blog => blog.category === activeCategory);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Blog Details</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>Filter: </label>
        {['all', 'technology', 'lifestyle', 'finance'].map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            style={{
              margin: '0 5px',
              backgroundColor: activeCategory === category ? 'blue' : 'white',
              color: activeCategory === category ? 'white' : 'black'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div>
        {filteredBlogs.map(blog => (
          <div key={blog.id} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px' }}>
            {/* Short-Circuit Evaluation */}
            {blog.featured && <span style={{ backgroundColor: 'yellow', padding: '2px' }}>Featured</span>}
            
            <h4>{blog.title}</h4>
            <p>By {blog.author}</p>
            
            {/* Ternary in JSX */}
            {isLoggedIn ? <button>View Comments</button> : <span>Login to view comments</span>}
          </div>
        ))}
      </div>

      {/* Multiple Conditions */}
      {filteredBlogs.length === 0 && (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <p>No blogs found</p>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
