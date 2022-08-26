import { useState } from "react";
import Button from "./components/Button";
import Inputs from "./components/Inputs";

function App() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const validate = () => {
        if (name === "") {
            alert("Please enter your name");
            return;
        }
    };

    return (
        <div className="container">
            <h1 className="text-center">Components states and events</h1>
            <Inputs
                name={name}
                setName={setName}
                password={password}
                setPassword={setPassword}
            />
            {password === "252525" ? <Button validate={validate} /> : null}
        </div>
    );
}

export default App;
