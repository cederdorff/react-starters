import { Link } from "react-router-dom";

export default function Page404() {
    return (
        <section className="page">
            <p>There's nothing here!</p>
            <p>
                Go back to <Link to="/">Home</Link>
            </p>
        </section>
    );
}
