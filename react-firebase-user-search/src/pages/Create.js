import React from "react";
import { useNavigate } from "react-router-dom";

import UserForm from "../components/UserForm";
import { addDoc } from "firebase/firestore";
import { usersRef } from "../firebase-config";
import Loader from "../components/Loader";

export default function Create() {
    const [showLoader, setShowLoader] = React.useState(false);
    const navigate = useNavigate();

    async function createUser(newUser) {
        setShowLoader(true);
        await addDoc(usersRef, newUser);
        navigate("/");
    }

    return (
        <section className="page">
            <UserForm handleSubmit={createUser} />
            <Loader show={showLoader} />
        </section>
    );
}
