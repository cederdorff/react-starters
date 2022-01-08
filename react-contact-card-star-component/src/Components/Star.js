import star from "../images/star.png";
import starFilled from "../images/star-filled.png";

export default function Start(props) {
    const icon = props.isFavorite ? starFilled : star;
    return <img src={icon} className="card-favorite" alt="star fav" onClick={props.handleClick} />;
}
