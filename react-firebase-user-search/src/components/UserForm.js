import React from "react";
import placeholderImg from "../user-placeholder.jpg";

export default function UserForm({ user, handleSubmit }) {
    const [formData, setFormData] = React.useState({ name: "", mail: "", img: "" });
    const imageRef = React.useRef();

    React.useEffect(() => {
        if (user) {
            setFormData(user);
        } else {
            setFormData({ name: "", mail: "", img: placeholderImg });
        }
    }, [user]);

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

    function handleImageChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = event => {
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    img: event.target.result
                };
            });
        };
        reader.readAsDataURL(file);
    }

    function submitEvent(event) {
        event.preventDefault();
        handleSubmit(formData);
    }

    return (
        <form onSubmit={submitEvent}>
            <input type="text" value={formData.name} onChange={handleChange} name="name" placeholder="Type name" />
            <input type="email" value={formData.mail} onChange={handleChange} name="mail" placeholder="Type mail" />
            <input
                type="file"
                className="file-input"
                accept="image/*"
                onChange={handleImageChange}
                name="img"
                ref={imageRef}
            />
            <img className="image-preview" src={formData.img} alt="Choose" onClick={() => imageRef.current.click()} />
            <button>Save User</button>
        </form>
    );
}
