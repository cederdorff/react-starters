import React from "react";
import { onSnapshot } from "firebase/firestore";
import { usersRef } from "../firebase-config";
import UserItem from "./UserItem";
import Loader from "./Loader";

export default function UserList() {
    const [users, setUsers] = React.useState([]);
    const [showLoader, setShowLoader] = React.useState(true);

    React.useEffect(() => {
        const cleanUp = onSnapshot(usersRef, data => {
            const users = data.docs.map(doc => {
                return { ...doc.data(), id: doc.id };
            });
            setUsers(users);
            setShowLoader(false);
        });

        return () => cleanUp();
    }, []);

    return (
        <>
            <section className="grid-container">
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </section>
            <Loader show={showLoader} />
        </>
    );
}
