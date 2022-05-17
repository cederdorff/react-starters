import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { favsRef } from "../firebase-config";
import { onSnapshot } from "@firebase/firestore";

export default function FavoritePage() {
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onSnapshot(favsRef, data => {
            const favData = data.docs.map(doc => {
                // map through all docs (object) from post collection
                return { ...doc.data(), id: doc.id }; // changing the data structure so it's all gathered in one object
            });
            console.log(favData);
            setFavorites(favData);
        });
        return () => unsubscribe(); // tell the post component to unsubscribe from listen on changes from firestore
    }, []);

    function goToNewFavList() {
        navigate("/new-fav");
    }
    return (
        <section className="page fav-page">
            <h1 className="text-center">Fav Page</h1>
            <button onClick={goToNewFavList}>Add new list</button>

            <section className="grid-container">
                {favorites.map(fav => (
                    <article key={fav.id}>
                        <h2>{fav.name}</h2>
                        <ul>
                            {fav.posts.map(post => (
                                <li>
                                    {post.title} (Rating: {post.rating} - Reads: {post.reads})
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </section>
        </section>
    );
}
