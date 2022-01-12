import React from "react";

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false);

    function toggleShown() {
        setIsShown(oldValue => !oldValue);
    }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleShown}>{isShown ? "Hide punchline" : "Show punchline"}</button>
            <hr />
        </div>
    );
}

// const cond1 = false;
// const cond2 = false;
// if (cond1 && console.log("Hello there")) {
//     // this code will NOT run
// }
