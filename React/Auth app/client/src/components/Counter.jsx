import { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>Counter App</h1>
            <div className="counter">
                <button onClick={increment} className="btn">+</button>
                <p className="count">{count}</p>
                <button onClick={decrement} className="btn">-</button>
            </div>
        </div>
    )
}

export default Counter