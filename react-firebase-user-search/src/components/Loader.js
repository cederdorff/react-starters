export default function Loader(props) {
    return (
        <section className={props.show ? "loader" : "loader hide"}>
            <section className="spinner"></section>
        </section>
    );
}
