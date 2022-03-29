import React from "react";

function RunEntry({runs}) {
    const runEntries = runs.map((run) =>
        <tr key={run.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {new Date(run.date).toLocaleDateString()}
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