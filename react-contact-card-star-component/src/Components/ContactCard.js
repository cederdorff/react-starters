import React from "react";
import userImage from "../images/user.png";

import Start from "./Star";

export default function ContactCard() {
    const [contact, setContact] = React.useState({
        name: "Jens Petersen",
        mail: "jens@petersen.com",
        phone: "+45 3344 5566",
        image: userImage,
        isFavorite: true
    });

    function toggleFavorite() {
        setContact(oldContact => {
            return { ...oldContact, isFavorite: !oldContact.isFavorite };
        });
    }

    return (
        <article className="card">
            <img src={contact.image} className="card-image" alt={contact.name} />
            <div className="card-info">
                <Start isFavorite={contact.isFavorite} handleClick={toggleFavorite}></Start>
                <h2 className="card-name">{contact.name}</h2>
                <p className="card-contact">{contact.phone}</p>
                <p className="card-contact">{contact.mail}</p>
            </div>
        </article>
    );
}
