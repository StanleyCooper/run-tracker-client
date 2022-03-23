import React from "react";
import { runs } from "../data/data";

function RunEntry() {

    const runEntries = runs.map((run) =>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {run.date}
            </th>
            <td class="px-6 py-4">
                {run.distance}
            </td>
            <td class="px-6 py-4">
                {run.avgPace}
            </td>
            <td class="px-6 py-4">
                {run.bestPace}
            </td>
            <td class="px-6 py-4">
                {run.avgHeartRate}
            </td>
            <td class="px-6 py-4">
                {run.calories}
            </td>
            <td class="px-6 py-4">
                {run.rating}
            </td>
        </tr>
    );

   return (<tbody>{runEntries}</tbody>);
}

export default RunEntry;