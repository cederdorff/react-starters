import React from "react";

export default function Timer() {
    const [count, setCount] = React.useState(0);

    // The useEffect Hook allows you to perform side effects in your components.
    // Some examples of side effects are: fetching data, directly updating the DOM, and timers.
    // useEffect accepts two arguments. The second argument is optional.
    // useEffect(<function>, <dependency>)

    React.useEffect(() => {
        setTimeout(() => setCount(prevCount => prevCount + 1), 1000);
    }); // No dependency

    return <h3>I've rendered {count} times!</h3>;
}
