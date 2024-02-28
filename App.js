import React from "react";
import { Route, Routes } from "react-router-dom";
import TableComponent from "./pages/TableComponent";

function App() {
  return (
    <div className="">
      <Routes>
        <Route
          path="/"
          element={<TableComponent />}
        />
      </Routes>
    </div>
  );
}

export default App;
