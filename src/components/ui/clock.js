import React, {useEffect, useState} from 'react';

function Clock({timezone}) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 60000);

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    // Extract the hours, minutes, and seconds from the current time
    const hours = ('00' + time.getHours()).slice(-2);
    const minutes =('00' +  time.getMinutes()).slice(-2);

    // Format the time as a string
    const timeString = `${hours}:${minutes}`;

    return (
        <div className="text-primary">
            <h3 className="mt-3 font-weight-bold">{timeString}</h3>
        </div>
    );
}


export default Clock;