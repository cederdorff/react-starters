import React from "react";

export default function StarWarsAPI() {
    const [starWarsData, setStarWarsData] = React.useState({});

    // The useEffect Hook allows you to perform side effects in your components.
    // Some examples of side effects are: fetching data, directly updating the DOM, and timers.
    // useEffect accepts two arguments. The second argument is optional.
    // useEffect(<function>, <dependency>)
    React.useEffect(() => {
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => setStarWarsData(data));
    }, []); // An empty array: Runs only on the first render

    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    );
}
