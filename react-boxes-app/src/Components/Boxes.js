import React from "react";
import Box from "./Box";

const data = [
    {
        id: 1,
        on: true
    },
    {
        id: 2,
        on: false
    },
    {
        id: 3,
        on: true
    },
    {
        id: 4,
        on: true
    },
    {
        id: 5,
        on: false
    },
    {
        id: 6,
        on: false
    }
];

export default function Boxes() {
    const [boxes, setBoxes] = React.useState(data);

    function toggleOn(boxId) {
        setBoxes(oldBoxes => {
            return oldBoxes.map(box => (box.id === boxId ? { ...box, on: !box.on } : box));
        });
    }
    return (
        <section>
            {boxes.map(box => (
                <Box key={box.id} box={box} handleToggle={() => toggleOn(box.id)} />
            ))}
        </section>
    );
}
