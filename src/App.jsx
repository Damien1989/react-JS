import { useState } from "react";
import { SayHello } from "./SayHello";
import { Tweet } from "./Tweet";

    const DEFAULT_TWEET = [
    {
      id:0,
      name:"Damien",
      content:"Magnifique !",
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
      content:"Hey",
      like:0,
    },
  ];

  function App() {

    const [tweets, setTweet] = useState(DEFAULT_TWEET);
    const handleSubmit = (event) => {
      event.preventDefault();
          console.log(event);


          const name = event.target.name;
          const content = event.target.content;
        
          const newTweet = {
            id: tweets[0]?.id + 1 ?? 0,
            name,
            content,
            like:0
          };

          console.log({newTweet});
    };

    const onDelete = (TweetId) => {
    }

      return(
        <div>
          <form onSubmit={handleSubmit} className="tweet-form">
            <h4>New Tweet</h4>
            <input placeholder="name" type="text" name="name" />
            <input placeholder="content" type="content" name="content" />
            <input type="submit" />
          </form>
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