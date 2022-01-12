import Meme from "./Meme";
import StarWarsAPI from "./StarWarsAPI";
import StarWarsPeople from "./StarWarsPeople";
import Timer from "./Timer";

function App() {
    return (
        <div className="App">
            <section>
                <h2>Timer</h2>
                <Timer />
            </section>
            <hr />
            <section>
                <h2>Star Wars Data</h2>
                <StarWarsAPI />
            </section>
            <hr />
            <section>
                <h2>Star Wars People</h2>
                <StarWarsPeople />
            </section>
            <hr />
            <section>
                <h2>Meme Generator</h2>
                <Meme />
            </section>
        </div>
    );
}

export default App;
