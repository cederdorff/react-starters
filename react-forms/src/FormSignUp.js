import React from "react";

export default function FormSignUp() {
    const [formData, setFormData] = React.useState({
        mail: "",
        password: "",
        passwordConfirm: "",
        newsletter: false
    });

    function handleChange(event) {
        const name = event.target.name;
        const type = event.target.type;
        const checked = event.target.checked;
        const value = type === "checkbox" ? checked : event.target.value;

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

        if (formData.password === formData.passwordConfirm) {
            console.log("Successfully signed up");
        } else {
            console.log("Passwords do not match");
        }

        if (formData.newsletter) {
            console.log("Thanks for signing up for our newsletter!");
        }
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email address"
                    className="form-input"
                    name="mail"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="form-input"
                    name="password"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    className="form-input"
                    name="passwordConfirm"
                    onChange={handleChange}
                />

                <div className="form-marketing">
                    <input id="newsletter" type="checkbox" name="newsletter" onChange={handleChange} />
                    <label htmlFor="newsletter">I want to join the newsletter</label>
                </div>
                <button className="form-submit">Sign up</button>
            </form>
        </div>
    );
}
