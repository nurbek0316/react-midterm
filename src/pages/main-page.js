import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './main-page.css';

const Main = () => {
    const [postText, setPostText] = useState('');
    const [posts, setPosts] = useState([
        { text: 'Hello world', username: 'Kayo', liked: false },
    ]);

    const handlePostTextChange = (event) => {
        setPostText(event.target.value);
    };

    const handleTweetClick = () => {
        if (postText !== '') {
            const newPost = { text: postText, username: 'You', liked: false };
            posts.unshift(newPost);
            setPosts([...posts]);
            setPostText('');
            return newPost;
        }
    };

    const handleLikeClick = (index) => {
        const newPosts = [...posts];
        newPosts[index].liked = !newPosts[index].liked;
        setPosts(newPosts);
    };

    return (
        <div>
            <div className="tweet-main">
                <textarea placeholder="Say something" value={postText} onChange={handlePostTextChange} />
                <button onClick={handleTweetClick}>Tweet</button>
            </div>
            <div className="tweet-posts">
                {posts.map((post, index) => (
                    <div className="tweets" key={index}>
                        <Link to={{ pathname: `/post${index}`, state: { tweet: post } }}>

                            <div className="user-info">
                                <h3>{post.username}</h3>
                            </div>
                        </Link>
                        <p>{post.text}</p>
                        <div className="tweet-like">
                            <button
                                onClick={() => handleLikeClick(index)}
                                style={{ color: post.liked ? 'red' : 'black' }}
                            >
                                Like
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Main;
