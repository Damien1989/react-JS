import { useState } from "react";
import { SayHello } from "./SayHello";
import { Tweet } from "./Tweet";

function App() {

  let [tweets, setTweet] = useState();

  let [username, setUsername] = useState("Damien");

  const addLetter = () => {
    username += "a"
    console.log(username)
  }


  return (
  <div>
    <p>{username}</p>
    <button onClick={addLetter}>Ajoutez une lettre</button>
    <div className="tweet-container">
  <SayHello />
    <Tweet name="Damien" content="Seuls les vrais savent" like={500} />
    <Tweet name="Joe" content="T'es sérieux ?" like={26} />
    <Tweet name="Marvin" content="Super cool" like={75} />
    <Tweet name="Mouloud" content="Génial" like={6} />
    </div>
  </div>
  );
}


export default App;