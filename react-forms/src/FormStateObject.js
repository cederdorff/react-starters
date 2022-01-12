import React from "react";

export default function FormStateObject() {
    const [formData, setFormData] = React.useState({ firstName: "", lastName: "", mail: "" });

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            };
        });
    }

    return (
        <form>
            <input type="text" placeholder="First Name" onChange={handleChange} name="firstName" />
            <input type="text" placeholder="Last Name" onChange={handleChange} name="lastName" />
            <input type="email" placeholder="Mail" onChange={handleChange} name="mail" />

            <p>Form data object: {JSON.stringify(formData)}</p>
        </form>
    );
}
