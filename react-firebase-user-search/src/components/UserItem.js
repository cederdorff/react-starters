import { useNavigate } from "react-router-dom";

export default function UserItem({ user }) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`users/${user.id}`);
    }

    return (
        <article onClick={handleClick}>
            <img src={user.img} alt={user.name} />
            <h2>{user.name}</h2>
            <p>
                <a href={`mailto:${user.mail}`}>{user.mail}</a>
            </p>
        </article>
    );
}
