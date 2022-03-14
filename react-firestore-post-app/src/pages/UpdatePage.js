import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { postsRef } from "../firebase-config";
import { getDoc, updateDoc, doc, deleteDoc } from "@firebase/firestore";
import PostForm from "../components/PostForm";

export default function UpdatePage() {
    const [post, setPost] = useState({ title: "", body: "", image: "" });
    const params = useParams();
    const navigate = useNavigate();
    const postId = params.postId;

    useEffect(() => {
        async function getUser() {
            const docRef = doc(postsRef, postId);

            const docSnap = await getDoc(docRef);
            setPost(docSnap.data());
        }

        getUser();
    }, [postId]);

    async function savePost(postToUpdate) {
        const docRef = doc(postsRef, postId);
        await updateDoc(docRef, postToUpdate);
        navigate("/");
    }

    async function deletePost() {
        const confirmDelete = window.confirm(`Do you want to delete post, ${post.title}?`);
        if (confirmDelete) {
            const docRef = doc(postsRef, postId);
            await deleteDoc(docRef);
            navigate("/");
        }
    }

    return (
        <section className="page">
            <h1>Update Post</h1>
            <PostForm post={post} handleSubmit={savePost} />
            <button className="btn-outline" onClick={deletePost}>
                Delete Post
            </button>
        </section>
    );
}
