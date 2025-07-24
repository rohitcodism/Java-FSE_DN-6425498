import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
    constructor(props) {
        super(props);
        // Step 5: Initialize component with a list of Post in state
        this.state = {
            posts: []
        };
    }

    // Step 6: loadPosts() method to fetch posts using Fetch API
    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                // Convert data to Post objects
                const posts = data.map(post => new Post(post.userId, post.id, post.title, post.body));
                this.setState({ posts: posts });
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
                alert('Error loading posts: ' + error.message);
            });
    }

    // Step 7: componentDidMount() hook to call loadPosts()
    componentDidMount() {
        this.loadPosts();
    }

    // Step 9: componentDidCatch() method for error handling
    componentDidCatch(error, errorInfo) {
        console.error('Error caught by componentDidCatch:', error, errorInfo);
        alert('An error occurred in the Posts component: ' + error.message);
    }

    // Step 8: render() method to display posts
    render() {
        const { posts } = this.state;

        return (
            <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
                    Blog Posts
                </h1>

                {posts.length === 0 ? (
                    <p style={{ textAlign: 'center', fontSize: '18px' }}>Loading posts...</p>
                ) : (
                    <div>
                        {posts.map(post => (
                            <div
                                key={post.id}
                                style={{
                                    border: '1px solid #ddd',
                                    borderRadius: '8px',
                                    padding: '20px',
                                    marginBottom: '20px',
                                    backgroundColor: '#f9f9f9',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                }}
                            >
                                <h2 style={{
                                    color: '#2c3e50',
                                    marginBottom: '15px',
                                    fontSize: '24px',
                                    textTransform: 'capitalize'
                                }}>
                                    {post.title}
                                </h2>

                                <p style={{
                                    color: '#555',
                                    lineHeight: '1.6',
                                    fontSize: '16px',
                                    textAlign: 'justify'
                                }}>
                                    {post.body}
                                </p>

                                <div style={{
                                    marginTop: '15px',
                                    fontSize: '14px',
                                    color: '#888'
                                }}>
                                    <strong>Post ID:</strong> {post.id} | <strong>User ID:</strong> {post.userId}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default Posts;
