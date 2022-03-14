import { useNavigate } from "react-router-dom";
import { addDoc, serverTimestamp } from "@firebase/firestore";
import { postsRef } from "../firebase-config";
import PostForm from "../components/PostForm";

export default function CreatePage({ showLoader }) {
    const navigate = useNavigate();

    async function createPost(newPost) {
        newPost.uid = "X3X3c44sR2Me4ZgkrIWUy9nWAWF3"; //auth.currentUser.uid;
        newPost.createdAt = serverTimestamp();

        await addDoc(postsRef, newPost);

        navigate("/");
    }
    return (
        <section className="page">
            <h1>Create New Post</h1>
            <PostForm handleSubmit={createPost} />
        </section>
    );
}
