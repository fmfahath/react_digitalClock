import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  const getTime = () => {

    const hr = leadingZero(formatHour(currentTime.getHours()));
    const min = leadingZero(currentTime.getMinutes());
    const sec = leadingZero(currentTime.getSeconds());
    const isAM = currentTime.getHours() < 12 ? " AM" : " PM";
    const time = `${hr}:${min}:${sec} ${isAM}`;
    return time;
  }

  const getDate = () => {
    // const day = currentTime.getDate();
    // const mon = currentTime.getMonth();
    // const year = currentTime.getFullYear();
    // const date = `${day} - ${mon} - ${year}`;
    // return date;

    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    return currentTime.toLocaleDateString(undefined, options);

  }


  const formatHour = (hour) => {
    return hour === 0 ? hour : hour < 12 ? hour : hour - 12;
  }

  const leadingZero = (zero) => {
    return zero < 10 ? "0" + zero : zero;
  }



  return (
    <>
      <div className="container">
        <h1>Digital Clock</h1>
        <div className="time">{getTime()}</div>
        <div className="date">{getDate()}</div>
      </div>
    </>
  )
}

export default App
