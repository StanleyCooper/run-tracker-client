import React from "react";
import { runs } from "../data/data";

function RunEntry() {

    const runEntries = runs.map((run) =>
        <tr>
            <td>{run.date}</td>
            <td>{run.time}</td>
            <td>{run.distance}</td>
            <td>{run.avgPace}</td>
            <td>{run.bestPace}</td>
            <td>{run.avgHeartRate}</td>
            <td>{run.calories}</td>
        </tr>
    );

    return ({runEntries});
}

export default RunEntry;