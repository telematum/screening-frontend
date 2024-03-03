import React from "react";
import ReactDOM from "react-dom/client";

import Page from "./src/components/page";

const AppLayout=()=>{
    return (
        <Page/>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)