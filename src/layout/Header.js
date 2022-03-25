import React from "react";

function Header() {
    return (
        <header class="flex items-center px-4 py-2 bg-blue-100">
            <img 
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/running-shoes-2556228-2143941.png" 
                width="50"
                alt="Logo"
            />
            <strong class="mx-auto">Run Tracker</strong>
        </header>
    );
}

export default Header;