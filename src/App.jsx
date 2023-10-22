import { useState } from "react";
import { SayHello } from "./SayHello";
import { Tweet } from "./Tweet";

    const DEFAULT_TWEET = [
    {
      id:0,
      name:"Damien",
      content:"Seuls les vrais savent",
      like:500,
    },

    {
      id:1,
      name:"Joe",
      content:"Cool",
      like:24,
    },

    {
      id:2,
      name:"Marvin",
      content:"Génial",
      like:36,
    },

    {
      id:3,
      name:"Mouloud",
      content:"Wallah ci li siounist",
      like:0,
    },
  ];

  function App() {

    const [tweets, setTweet] = useState(DEFAULT_TWEET);

    const onDelete = (TweetId) => {
    }

      return(
        <div>
          <SayHello />
          <div className="tweet-container">
            {tweets.map((tweet) => {
              return(
        <Tweet
        key={tweet.id}
        id={tweet.id}
        name={tweet.name}
        content={tweet.content}
        like={tweet.like}
        onDelete={(id) => {
          onDelete(id);
        }}
        
        />
      );
    })};
    </div>
    </div>
      );
}
export default App;