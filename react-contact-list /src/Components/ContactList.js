import ContactCard from "./ContactCard";
import userImage from "../images/user.png";

const contacts = [
    {
        id: 1,
        name: "Birgitte Hansen",
        mail: "b@hansen.com",
        phone: "+45 2299 5566",
        image: userImage,
        isFavorite: true
    },
    {
        id: 2,
        name: "Jens Petersen",
        mail: "jens@petersen.com",
        phone: "+45 3344 5566",
        image: userImage,
        isFavorite: true
    },
    {
        id: 2,
        name: "Hanne Hansen",
        mail: "hanne@hansen.com",
        phone: "+45 8844 9966",
        image: userImage,
        isFavorite: false
    }
];

export default function ContactList() {
    return (
        <section className="contact-list">
            {contacts.map(contact => (
                <ContactCard contact={contact} key={contact.id}></ContactCard>
            ))}
        </section>
    );
}
