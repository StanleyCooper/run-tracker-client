import React, { useState } from "react"
import AddRunForm from "./AddRunForm"

function AddRunButton() {

    const [formStatus, setFormStatus] = useState(false)

    const clickHandler = () => {
        console.log('Add button clicked!')
        setFormStatus(formStatus => !formStatus);
    }

    if (formStatus !== false) {
        return (
            <div className="bg-slate-900 hover:bg-slate-700 text-white font-bold w-20 py-2 px-4 rounded">
                <button OnClick={() => clickHandler()} >Add +</button>
            </div>
        )
    } else {
        return (
        <div>
            <AddRunForm />
            <button onClick={() => clickHandler()}>-</button>
        </div>
        )
    }
}

export default AddRunButton