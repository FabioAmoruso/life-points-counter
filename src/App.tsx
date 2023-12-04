import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header />
            <PlayerOne />
            <PlayerTwo />

            {/* <div>
                <a href="https://vitejs.dev" target="_blank">
                </a>
                <a href="https://react.dev" target="_blank">
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p> */}
        </>
    )
}

function Header() {
    return (
        <div className="header">
            <h1>IT'S TIME TO D-D-DUEL!</h1>
            <p>Calculate your life points.</p>
        </div>
    )
}

function PlayerOne() {

    return (
        <div className="card-one">
            <p>Player 1</p>
            <h1>8000</h1>
            <div className="operations">
                <Plus />
                <Minus />
            </div>
        </div>
    );

}

function PlayerTwo() {
    return (
        <div className="card-two">
            <p>Player 2</p>
            <h1>8000</h1>
            <div className="operations">
                <Plus />
                <Minus />
            </div>
        </div>
    );
}

function Plus() {
    return (
        <span><CiCirclePlus /></span>
    );
}

function Minus() {
    return (
        <span><CiCircleMinus /></span>
    );

}

function CoinFlip() {

}

export default App
