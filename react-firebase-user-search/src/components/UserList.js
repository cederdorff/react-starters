import React from "react";
import { onSnapshot, orderBy, query } from "firebase/firestore";
import { usersRef } from "../firebase-config";
import UserItem from "./UserItem";
import Loader from "./Loader";
import Search from "./Search";

export default function UserList() {
    const [users, setUsers] = React.useState([]);
    const [showLoader, setShowLoader] = React.useState(true);
    const [filteredUsers, setFilteredUsers] = React.useState([]);

    React.useEffect(() => {
        const q = query(usersRef, orderBy("name"));
        const cleanUp = onSnapshot(q, data => {
            const userList = data.docs.map(doc => {
                return { ...doc.data(), id: doc.id };
            });
            setUsers(userList);
            setFilteredUsers(userList);
            setShowLoader(false);
        });

        return () => cleanUp();
    }, []);

    function searchEvent(searchValue) {
        const result = users.filter(
            user =>
                user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                user.mail.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredUsers(result);
    }

    return (
        <>
            <Search handleKeyUp={searchEvent} />
            <section className="grid-container">
                {filteredUsers.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </section>
            <Loader show={showLoader} />
        </>
    );
}
