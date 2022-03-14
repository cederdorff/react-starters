import { NavLink } from "react-router-dom";
function isActive(navLink) {
    return navLink.isActive ? "active" : "";
}

export default function Nav() {
    return (
        <nav>
            <NavLink to="/" className={isActive}>
                Home
            </NavLink>
            <NavLink to="/create" className={isActive}>
                Create
            </NavLink>
        </nav>
    );
}
