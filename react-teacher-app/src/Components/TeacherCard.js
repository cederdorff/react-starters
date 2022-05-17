export default function TearcherCard(props) {
    return (
        <article>
            <img src={props.teacher.image} alt={props.teacher.name} />
            <h2>{props.teacher.name}</h2>
            <p>{props.teacher.position}</p>
            <a href={"mailto:" + props.teacher.mail}>{props.teacher.mail}</a>
        </article>
    );
}
