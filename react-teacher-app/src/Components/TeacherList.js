import React from "react";
import TearcherCard from "./TeacherCard";
import data from "../data/teachers.json";

export default function TeacherList() {
    const [teachers, setTeachers] = React.useState([]);
    const [filteredResults, setFilteredResults] = React.useState([]);

    React.useEffect(() => {
        setTeachers(data);
        setFilteredResults(data);
    }, []);

    function search(searchValue) {
        const result = teachers.filter(
            teacher => teacher.name.toLowerCase().includes(searchValue.toLowerCase()) || teacher.initials.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredResults(result);
    }

    return (
        <section>
            <input type="search" placeholder="Search" className="searchBar" onKeyUp={event => search(event.target.value)} />
            <section className="grid-container">
                {filteredResults.map(teacher => (
                    <TearcherCard teacher={teacher} key={teacher.id} />
                ))}
            </section>
        </section>
    );
}
