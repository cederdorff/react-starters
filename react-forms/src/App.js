import FormV1 from "./FormV1";
import FormV2 from "./FormV2";
import FormStateObject from "./FormStateObject";
import FormStateObjectV2 from "./FormStateObjectV2";
import FormStateObjectV3 from "./FormStateObjectV3";
import FormSignUp from "./FormSignUp";

function App() {
    return (
        <div className="App">
            <section>
                <h2>Form v1</h2>
                <FormV1 />
            </section>
            <hr />
            <section>
                <h2>Form v2</h2>
                <FormV2 />
            </section>
            <hr />
            <section>
                <h2>Form State Object</h2>
                <FormStateObject />
            </section>
            <hr />
            <section>
                <h2>Form State Object with Controlled Inputs</h2>
                <FormStateObjectV2 />
            </section>
            <hr />
            <section>
                <h2>Form State Object - more inputs</h2>
                <FormStateObjectV3 />
            </section>{" "}
            <hr />
            <section>
                <h2>Form Sign Up</h2>
                <FormSignUp />
            </section>
        </div>
    );
}

export default App;
