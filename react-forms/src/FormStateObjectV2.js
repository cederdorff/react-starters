import React from "react";

export default function FormStateObjectV2() {
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

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input type="email" placeholder="Mail" onChange={handleChange} name="mail" value={formData.mail} />

            <p>Form data object: {JSON.stringify(formData)}</p>

            <button>Submit</button>
        </form>
    );
}
