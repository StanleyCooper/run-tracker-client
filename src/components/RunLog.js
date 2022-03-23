import React from "react";
import RunEntry from "./RunEntry";

function RunLog() {
    return (
        <table class="table-auto">
            <thead>
                <tr>Date</tr>
                <tr>Time</tr>
                <tr>Distance</tr>
                <tr>Average Pace</tr>
                <tr>Best Pace</tr>
                <tr>Avg Heart Rate</tr>
                <tr>Calories</tr>
            </thead>
            <tbody>
                <RunEntry />
            </tbody>
        </table>
    )
}

export default RunLog;