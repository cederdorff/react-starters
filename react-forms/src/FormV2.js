import React from "react";

export default function FormV2() {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");

    return (
        <form>
            <input type="text" placeholder="First Name" onChange={e => setFirstName(e.target.value)} />
            <input type="text" placeholder="Last Name" onChange={e => setLastName(e.target.value)} />
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
        </form>
    );
}
