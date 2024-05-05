import { useState } from "react";
import { SayHello } from "./SayHello";
import { Tweet } from "./Tweet";
import { useRef } from "react";

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
    const nameRef = useRef();
    const handleSubmit = (event) => {
      event.preventDefault();
          console.log(event);


          const name = nameRef.current.value;
          const content = event.target.content.value;
        
          const newTweet = {
            id: tweets[tweets.length - 1]?.id + 1 ?? 0,
            name,
            content,
            like:0
          };


          addTweet(newTweet);
    };

    const addTweet = (tweet) => {
      setTweet([...tweets, tweet]);
    }

    const onDelete = (tweetId) => {
      setTweet((curr) => curr.filter((tweet) => tweet.id !== tweetId));
    }

    const onLike = (tweetId) => {
      setTweet((curr) => {
        const copyTweet = [...curr];

        const likedTweet = copyTweet.find((tweet) => tweet.id === tweetId);
        likedTweet.like += 1;

        return copyTweet;
      });
    }

      return(
        <div>
          <form onSubmit={handleSubmit} className="tweet-form">
            <h4>Nouveau tweet</h4>
            <input ref={nameRef} placeholder="nom" type="text" name="name" />
            <input placeholder="message..." type="content" name="content" />
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
        onLike={(id) => {
        onLike(id)
        }}  
        />
      );
    })};
    </div>
    </div>
      );
}
export default App;