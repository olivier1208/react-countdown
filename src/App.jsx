import reactLogo from './assets/react.svg'
import './App.css'
import CountdownTimer from "./components/CountdownTimer";

function App() {
    const LEFT_IN_MS = 1 * 44 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + LEFT_IN_MS;
    return (
        <>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={ reactLogo } className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Nouillage à accomplir</h1>
            <div className="card">
                <CountdownTimer targetDate={ dateTimeAfterThreeDays }/>
            </div>
        </>
    )
}

export default App
