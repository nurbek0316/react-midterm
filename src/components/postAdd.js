import React, { useState } from "react";
import "./postAdd.css";

function App() {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState("");

  async function fetchTweets() {
    const response = await fetch("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=elonmusk&count=10");
    const data = await response.json();
    setTweets(data);
  }

  async function postTweet() {
    const response = await fetch("https://api.twitter.com/1.1/statuses/update.json", {
      method: "POST",
      headers: {
        "Authorization": "Bearer YOUR_API_TOKEN",
      },
      body: JSON.stringify({
        status: newTweet,
      }),
    });

    if (response.status === 200) {

      setTweets([...tweets, {
        text: newTweet,
        user: {
          name: "Your Name",
          profile_image_url: "https://example.com/avatar.png",
        },
      }]);

      setNewTweet("");
    } else {
   
      console.error(response.statusText);
    }
  }

  function renderTweets() {
    return tweets.map((tweet) => (
      <div key={tweet.id} className="tweet">
        <img src={tweet.user.profile_image_url} alt={tweet.user.name} />
        <div className="tweet-content">
          <h3>{tweet.user.name}</h3>
          <p>{tweet.text}</p>
        </div>
      </div>
    ));
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Twitter</h1>
      </div>
      <div className="main">
        <div className="sidebar">
          <button onClick={fetchTweets}>Fetch Tweets</button>
        </div>
        <div className="timeline">
          {renderTweets()}
        </div>
      </div>

      <div className="new-tweet-box">
        <textarea
          value={newTweet}
          onChange={(e) => setNewTweet(e.target.value)}
        />
        <button onClick={postTweet}>Post Tweet</button>
      </div>
    </div>
  );
}

export default App;