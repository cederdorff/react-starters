import React from "react";
import TearcherCard from "./TeacherCard";
import data from "../data/teachers.json";
import Search from "./Search";

export default function TeacherList() {
    const [teachers, setTeachers] = React.useState([]);
    const [filteredResults, setFilteredResults] = React.useState([]);

    React.useEffect(() => {
        setTeachers(data);
        setFilteredResults(data);
    }, []);

    function searchEvent(searchValue) {
        const result = teachers.filter(
            teacher =>
                teacher.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                teacher.initials.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredResults(result);
    }

    return (
        <section>
            <Search handleKeyUp={searchEvent} />
            <section className="grid">
                {filteredResults.map(teacher => (
                    <TearcherCard teacher={teacher} key={teacher.id} />
                ))}
            </section>
        </section>
    );
}
