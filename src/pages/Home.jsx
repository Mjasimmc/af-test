import React, { useEffect, useState } from 'react';

const Home = () => {
    const [time, setTime] = useState({
        year: '',
        month: '',
        day: '',
        hours: '',
        minutes: '',
        seconds: '',
        ampm: ''
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            const year = date.getFullYear().toString();
            const month = date.getMonth() + 1;
            const day = date.getDate().toString();
            const hours = date.getHours().toString();
            const minutes = date.getMinutes().toString();
            const seconds = date.getSeconds().toString();
            const ampm = hours >= 12 ? 'pm' : 'am'; // Determine if it's AM or PM
            const formattedHours = hours % 12 || 12; // Convert to 12-hour format

            setTime({
                year: year.length == 1 ? '0' + year : year,
                month: month.toString().length == 1 ? '0' + month : month,
                day: day.length == 1 ? '0' + day : day,
                hours: formattedHours,
                minutes: minutes.length == 1 ? '0' + minutes : minutes,
                seconds: seconds.length == 1 ? '0' + seconds : seconds,
                ampm
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const { year, month, day, hours, minutes, seconds, ampm } = time;

    return (
        <>
            <div className="py-8 w-full  shadow shadow-black rounded-lg px-4 ">
                <p className='font-[600] text-lg uppercase'>current time</p>
                <p className="text-3xl font-bold ">
                    {day} - {month} - {year}
                </p>
                <p>
                    {hours} : {minutes} : {seconds} <span className='text-[.9rem]'>{ampm}</span>
                </p>
            </div>

        </>
    );
}

export default Home;
