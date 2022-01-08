import logo from "./logo.svg";
import "./App.css";
import PersonsGrid from "./components/PersonsGrid";

function App() {
    return (
        <main className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <PersonsGrid />
        </main>
    );
}

export default App;
