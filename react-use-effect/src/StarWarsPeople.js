import React from "react";

export default function StarWarsPeople() {
    const [persons, setPersons] = React.useState([]);

    // The useEffect Hook allows you to perform side effects in your components.
    // Some examples of side effects are: fetching data, directly updating the DOM, and timers.
    // useEffect accepts two arguments. The second argument is optional.
    // useEffect(<function>, <dependency>)
    React.useEffect(() => {
        fetch("https://swapi.dev/api/people")
            .then(res => res.json())
            .then(data => setPersons(data.results));
    }, []); // An empty array: Runs only on the first render

    return (
        <ul>
            {persons.map(person => (
                <li key={person.name}>
                    {person.name} (height: {person.height}, hair color: {person.hair_color})
                </li>
            ))}
        </ul>
    );
}
