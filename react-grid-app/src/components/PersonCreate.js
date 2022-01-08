import React from "react";

export default function PersonCreate({ persons, setPersons }) {
    const [name, setName] = React.useState("");
    const [position, setPosition] = React.useState("");
    const [mail, setMail] = React.useState("");

    function create() {
        setPersons([...persons, { name: name, position: position, mail: mail }]); // add new person
        setName(""); // reset
        setPosition("");
        setMail("");
    }   

    return (
        <section>
            <h2>Create new User</h2>
            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" placeholder="Position" value={position} onChange={e => setPosition(e.target.value)} />
            <input type="email" placeholder="Email" value={mail} onChange={e => setMail(e.target.value)} />
            <button onClick={create}>Create</button>
        </section>
    );
}
