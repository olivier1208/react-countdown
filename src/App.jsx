import reactLogo from './assets/react.svg'
import './App.css'
import CountdownTimer from "./components/CountdownTimer";

function App() {
    const end = new Date('2024-04-02').setHours(16, 30, 0, 0)
    const LEFT_IN_MS = end - new Date().getTime();
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
