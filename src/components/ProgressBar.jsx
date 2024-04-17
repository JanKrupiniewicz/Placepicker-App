import { useState, useEffect } from "react";

export default function ProgressBar({ TIMER }) {
    const [remainingTime, setRemainingTime] = useState(TIMER);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevTime => {
                if (prevTime === 0) {
                    return 0;
                }
                return prevTime - 10;
            });
        }, 10);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <progress className="progress-bar" value={remainingTime} max={TIMER}></progress>
    );
}