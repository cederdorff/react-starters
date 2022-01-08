export default function Box(props) {
    const classNames = props.box.on ? "box filled" : "box";
    return (
        <article className={classNames} onClick={props.handleToggle}>
            {props.box.id}
        </article>
    );
}
