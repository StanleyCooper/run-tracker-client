import React, { useState, useEffect } from "react";
import RunEntry from "./RunEntry";

function RunLog() {

    const [runs, setRuns] = useState([]);

    useEffect(() => {
        console.log("useEffect");
        async function loadRuns() {
            const response = await fetch(
                'http://localhost:5000/runs'
            );
            const runsFromAPI = await response.json();
            console.log("setRuns", runsFromAPI);
            setRuns(runsFromAPI.data);
        }
        loadRuns();
    }, []);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Distance
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Avg. Pace
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Best Pace
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Avg Heart Rate
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Calories
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Rating
                        </th>
                    </tr>
                </thead>
                <RunEntry runs={runs}/>
            </table>
        </div>
    )
}

export default RunLog;