import {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    return <div className="container">
        <span>{count}</span>
        <button onClick={increment}>increment</button>
    </div>
}

export default Counter;