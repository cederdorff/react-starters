import { getDocs, query, orderBy, addDoc } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { favsRef, postsRef } from "../firebase-config";

export default function NewFavList() {
    const [posts, setPosts] = useState([]);
    const [selectedPosts, setSelectedPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState({});
    const [name, setName] = useState("");
    const [rating, setRating] = useState(0);
    const [reads, setReads] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        async function getPosts() {
            const q = query(postsRef, orderBy("title"));
            const data = await getDocs(q);
            const postsData = data.docs.map(doc => {
                return { ...doc.data(), id: doc.id }; // changing the data structure so it's all gathered in one object
            });
            setPosts(postsData);
            console.log(postsData);
        }

        getPosts();
    }, []);
    async function handleSubmit(event) {
        event.preventDefault();

        const newFavList = {
            name: name,
            posts: selectedPosts
        };

        await addDoc(favsRef, newFavList);
        navigate("/");
    }

    function handleAddPost() {
        const post = posts.find(post => post.id === selectedPost);
        post.rating = rating;
        post.reads = reads;
        setSelectedPosts(prevSelectedPosts => [...prevSelectedPosts, post]);
    }

    function handleRemove() {
        console.log(selectedPost);
        const filteredData = selectedPosts.filter(post => post.id !== selectedPost);
        setSelectedPosts(filteredData);
    }

    return (
        <section className="page">
            <h1>Add New Fav List</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input type="text" placeholder="Type a name" onChange={e => setName(e.target.value)} />
                </label>

                <label>
                    Posts
                    <section className="selected-posts">
                        {selectedPosts.length === 0 && <p>No posts added yet</p>}
                        {selectedPosts.map(post => (
                            <article key={post.id}>
                                {post.title} (Rating: {post.rating} - Reads: {post.reads})<a onClick={() => handleRemove(post.id)}>X</a>
                            </article>
                        ))}
                    </section>
                </label>
                <section className="add-posts">
                    <label>
                        Add post
                        <select value={selectedPost} onChange={e => setSelectedPost(e.target.value)}>
                            <option>choose post</option>
                            {posts.map(post => (
                                <option value={post.id} key={post.id}>
                                    {post.title}
                                </option>
                            ))}
                        </select>
                    </label>
                    <input type="number" placeholder="Rating" onChange={e => setRating(e.target.value)} />

                    <input type="number" placeholder="Reads" onChange={e => setReads(e.target.value)} />

                    <button type="button" onClick={handleAddPost}>
                        Add post
                    </button>
                </section>

                <button type="submit">Create new list</button>
            </form>
        </section>
    );
}
