export default function Person({ person }) {
    return (
        <article>
            <h2>{person.name}</h2>
            <p>{person.position}</p>
            <p>
                <a href={`mailto:${person.mail}`}>{person.mail}</a>
            </p>
        </article>
    );
}
