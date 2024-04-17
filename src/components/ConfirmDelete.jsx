import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 3000;

export default function ConfirmDelete({submitAction, cancleAction}) {
    useEffect(() => {
        const timer = setTimeout(() => {
            submitAction();
        }, TIMER);

        return () => {
            clearTimeout(timer);
        };
    }, [submitAction]);

    return (
        <div className="bg-red-200 text-red-900 p-5 space-y-3 poppins-regular">
            <h2 className="text-xl font-bold">Are you sure?</h2>
            <p>Do you really want to remove this place?</p>
            <div className="flex justify-end">
                <button className="text-red-900 rounded-full p-2 px-6 baseline" onClick={cancleAction}>No</button>
                <button className="bg-red-900 text-red-200 rounded-full p-2 px-6 baseline" onClick={submitAction}>Yes</button>
            </div>
            <ProgressBar TIMER={TIMER} />
        </div>
    );
}