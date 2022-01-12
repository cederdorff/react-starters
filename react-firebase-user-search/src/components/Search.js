export default function Search(props) {
    return (
        <input
            type="search"
            placeholder="Search"
            className="searchBar"
            onInput={event => props.handleKeyUp(event.target.value)}
        />
    );
}
