import React from "react";

export default function Counter() {
    const [count, setCount] = React.useState(0);

    function add() {
        setCount(oldCount => oldCount + 1);
    }

    function subtract() {
        setCount(oldCount => oldCount - 1);
    }
    console.log("Couter rendered with count: ", count);
    return (
        <div className="counter">
            <button className="counter-minus" onClick={subtract}>
                -
            </button>
            <div className="counter-count">
                <h1>{count}</h1>
            </div>
            <button className="counter-plus" onClick={add}>
                +
            </button>
        </div>
    );
}
