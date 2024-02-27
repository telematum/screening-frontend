import React from "react";

function Header ({children}) {
    return (
        <header className="text-lg font-bold text-gray-500">{children}</header>
    )
}

export default Header