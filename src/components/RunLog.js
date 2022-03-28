import React from "react";
import RunEntry from "./RunEntry";

function RunLog() {
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
                <RunEntry />
            </table>
        </div>
    )
}

export default RunLog;