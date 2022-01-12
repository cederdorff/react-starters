import Person from "./Person";
import PersonCreate from "./PersonCreate";
import React from "react";

const personData = [
    { name: "Morten", position: "Seinor Lecturer", mail: "moab@eaaa.dk" },
    { name: "Birgitte", position: "Senior Lecturer", mail: "bki@eaaa.dk" },
    { name: "Anne", position: "Head of Programme", mail: "anki@eaaa.dk" },
    { name: "Rasmus", position: "Senior Lecturer", mail: "race@eaaa.dk" }
];

export default function PersonsGrid() {
    const [persons, setPersons] = React.useState(personData);

    function create(user) {
        setPersons([...persons, user]); // add new person
    }

    return (
        <>
            <section className="grid-container">
                {persons.map(person => (
                    <Person key={person.name} person={person} />
                ))}
            </section>
            <PersonCreate onCreate={create} />
        </>
    );
}
