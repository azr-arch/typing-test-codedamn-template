// CHALLENGE 1:
// Task: Create a React component named 'Timer' that counts down from 30 seconds.

// Solution:
import { useState, useEffect } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(30);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="timer">
            <p>Timer</p>
            <span>{seconds}</span>
        </div>
    );
};

export default Timer;

// -------------------------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------------------------- //

// CHALLENGE 2:
// Task: Modify the Timer component to start counting down only when 'testStart' is true.

// Solution:
// import { useState, useEffect } from "react";

// const Timer = ({ testStart }) => {
//     const [seconds, setSeconds] = useState(30);

//     useEffect(() => {
//         let interval;

//         if (testStart && seconds > 0) {
//             interval = setInterval(() => {
//                 setSeconds((prevSeconds) => prevSeconds - 1);
//             }, 1000);
//         }

//         return () => clearInterval(interval);
//     }, [testStart, seconds]);

//     return <div>{seconds}</div>;
// };

// -------------------------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------------------------- //

// CHALLENGE 3
// Task: Modify the Timer component to call 'onTestEnd' when the countdown reaches zero.

// Solution:
// import { useState, useEffect } from "react";

// const Timer = ({ testStart, onTestEnd }) => {
//     const [seconds, setSeconds] = useState(30);

//     useEffect(() => {
//         let interval;

//         if (testStart && seconds > 0) {
//             interval = setInterval(() => {
//                 setSeconds((prevSeconds) => prevSeconds - 1);
//             }, 1000);
//         } else if (seconds === 0) {
//             onTestEnd();
//         }

//         return () => clearInterval(interval);
//     }, [testStart, seconds, onTestEnd]);

//     return <div>{seconds}</div>;
// };
