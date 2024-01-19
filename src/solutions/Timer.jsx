// CHALLENGE 1:
// Task: Create a React component named 'Timer' that displays '30' on the screen.

// Solution:
// import React from 'react';

// const Timer = () => {
//     return <div>30</div>;
// };

// export default Timer;

// -------------------------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------------------------- //

// CHALLENGE 2:
// Task: Modify the Timer component to use the useState hook to manage the time.

// Solution:
// import React, { useState } from 'react';

// const Timer = () => {
//     const [seconds, setSeconds] = useState(30);

//     return <div>{seconds}</div>;
// };

// -------------------------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------------------------- //

// CHALLENGE 3
// Task: Modify the Timer component to count down from 30 seconds using the useEffect hook.

// Solution:
// import React, { useState, useEffect } from 'react';

// const Timer = () => {
//     const [seconds, setSeconds] = useState(30);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setSeconds((prevSeconds) => prevSeconds - 1);
//         }, 1000);

//         return () => clearInterval(interval);
//     }, []);

//     return <div>{seconds}</div>;
// };

// -------------------------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------------------------- //

// CHALLENGE 4
// Task: Modify the Timer component to call 'onTestEnd' when the countdown reaches zero.

// Solution:
// const Timer = ({ testStart, onTestEnd }) => {
//     const [seconds, setSeconds] = useState(30);

//     useEffect(() => {
//         let interval = undefined;

//         if (testStart && seconds > 0) {
//             interval = setInterval(() => {
//                 setSeconds((prev) => prev - 1);
//             }, 1000);
//         } else if (seconds === 0) {
//             onTestEnd();
//         }

//         return () => clearInterval(interval);
//     }, [testStart, seconds, onTestEnd]);

//     return (
//         <div className="timer">
//             <p>Timer</p>
//             <span>{seconds}</span>
//         </div>
//     );
// };
