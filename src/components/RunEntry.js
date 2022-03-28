import React, { useState, useEffect } from "react";

function RunEntry() {

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
            console.log("runs data", runs)        }
        loadRuns();
    }, []);

    const runEntries = runs.map((run) =>
        <tr key={run.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {run.date}
            </th>
            <td className="px-6 py-4">
                {run.distance}
            </td>
            <td className="px-6 py-4">
                {run.avgPace}
            </td>
            <td className="px-6 py-4">
                {run.bestPace}
            </td>
            <td className="px-6 py-4">
                {run.avgHeartRate}
            </td>
            <td className="px-6 py-4">
                {run.calories}
            </td>
            <td className="px-6 py-4">
                {run.rating}
            </td>
        </tr>
    );

   return (<tbody>{runEntries}</tbody>);
}

export default RunEntry;