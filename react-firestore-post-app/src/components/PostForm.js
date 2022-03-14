import { useState, useEffect } from "react";
import placeholder from "../assets/img/img-placeholder.jpg";

export default function PostForm({ post, handleSubmit }) {
    const [formData, setFormData] = useState({ title: "", body: "", image: "" });
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (post) {
            setFormData(post);
        } else {
            setFormData({ title: "", body: "", image: "" });
        }
    }, [post]);

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

    function submitEvent(event) {
        event.preventDefault();
        const validForm = formData.title && formData.body && formData.image;
        if (validForm) {
            handleSubmit(formData);
        } else {
            setErrorMessage("Please, fill in all fields.");
        }
    }

    return (
        <form onSubmit={submitEvent}>
            <input type="text" value={formData.title} onChange={handleChange} name="title" placeholder="Type title" />
            <input value={formData.body} onChange={handleChange} name="body" placeholder="Type body of your post" />
            <input type="url" value={formData.image} accept="image/*" onChange={handleChange} name="image" placeholder="Paste image url" />
            <img className="image-preview" src={formData.image} alt="Choose" onError={event => (event.target.src = placeholder)} />
            <p className="text-error">{errorMessage}</p>
            <button>Save</button>
        </form>
    );
}
