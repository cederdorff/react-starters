import React from "react";

export default function FormV1() {
    const [firstName, setFirstName] = React.useState("");

    function handleChange(event) {
        console.log(event.target.value);
        setFirstName(event.target.value);
    }

    return (
        <form>
            <input type="text" placeholder="First Name" onChange={handleChange} />
            <p>First name: {firstName}</p>
        </form>
    );
}
