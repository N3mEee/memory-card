import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <div className="card">
                <h1>Memory Card</h1>
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
            </div>
        </div>
    );
}

export default App;
