import React from "react";
import jokes from "./jokesData";
import Joke from "./Joke";

function App() {
    return (
        <div>
            {jokes.map(joke => (
                <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
            ))}
        </div>
    );
}

export default App;
