import './App.css'
import CountdownTimer from "./components/CountdownTimer";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useCountdown } from "./hooks/useCountdown.jsx";
import Swal from 'sweetalert2'
import { isBefore } from "date-fns";

function App() {

    const [startDate, setStartDate] = useState(new Date());
    const [end, setEnd] = useState(new Date('2024-04-02').setHours(16, 30, 0, 0))

    const LEFT_IN_MS = end - new Date().getTime();
    const NOW_IN_MS = new Date().getTime();

    const targetDate = NOW_IN_MS + LEFT_IN_MS;

    const launchTimer = () => {
        if (!startDate) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please select a date first!',
            })
            return
        }

        if (isBefore(startDate, new Date())) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'The date you selected is already expired!',
            })
            return
        }

        setEnd(startDate.getTime())
    }
    const { isExpired } = useCountdown(targetDate);
    const stopTimer = () => {
        setEnd(new Date('1970-04-02').setHours(16, 30, 0, 0))
    }

    return (
        <>
            <div className="flex justify-center cursor-pointer ">
                <img src="https://lh3.googleusercontent.com/a/ACg8ocKqNBzW6ENzw20FbJ6Y0ILskTsAWjia6XiICTMojzCHMw"
                     className="logo react rounded-full" alt="React logo"/>
            </div>
            <h1>Nouillage à accomplir</h1>

            <div className="card">
                <DatePicker
                    className="border border-gray-300 p-2 rounded-lg w-full mt-4 mb-5"
                    selected={ startDate }
                    onChange={ (date) => setStartDate(date) }
                    showTimeSelect
                    timeFormat="HH:mm"
                    minDate={ new Date() }
                    minTime={ new Date() }
                    maxTime={ new Date().setHours(23, 59, 0, 0) }
                    timeIntervals={ 5 }
                    timeCaption="time"
                    dateFormat="dd/MM/yyyy HH:mm"
                />

                { isExpired ? <div
                    className="mt-5 mb-5 p-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 hover:transition-all"
                    onClick={ launchTimer }>
                    Run it
                </div> : <div
                    className="mt-5 mb-5 p-2 bg-lime-500 text-white rounded-lg cursor-pointer hover:bg-lime-600 hover:transition-all"
                    onClick={ stopTimer }>
                    Stop
                </div> }

                <CountdownTimer targetDate={ targetDate }/>
            </div>
        </>
    )
}

export default App
