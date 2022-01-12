import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { usersRef } from "../firebase-config";
import UserForm from "../components/UserForm";
import Loader from "../components/Loader";
import placeholderImg from "../user-placeholder.jpg";

export default function Update() {
    const [user, setUser] = React.useState({ name: "", mail: "", img: placeholderImg });
    const [showLoader, setShowLoader] = React.useState(true);
    const params = useParams();
    const navigate = useNavigate();
    const userId = params.userId;

    React.useEffect(() => {
        const getUser = async () => {
            const docRef = doc(usersRef, userId);
            const docSnap = await getDoc(docRef);
            setUser(docSnap.data());
            setShowLoader(false);
        };
        getUser();
    }, [userId]);

    async function saveUser(userObject) {
        setShowLoader(true);
        const docRef = doc(usersRef, userId);
        await updateDoc(docRef, userObject);
        navigate("/");
    }

    async function deleteUser() {
        setShowLoader(true);
        const userRef = doc(usersRef, userId);
        await deleteDoc(userRef);
        navigate("/");
    }

    return (
        <section className="page">
            <UserForm user={user} handleSubmit={saveUser} />
            <button className="btn-delete" onClick={deleteUser}>
                Delete User
            </button>
            <Loader show={showLoader} />
        </section>
    );
}
