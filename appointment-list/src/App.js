import React, { useState, useEffect } from "react";
import "./App.css";
import Layout from "./Components/Layout";
import Table from "./Components/Table";
function App() {
  return (
    <div className="container mx-auto p-4">
      <Layout>
        <Table />
      </Layout>
    </div>
  );
}

export default App;
