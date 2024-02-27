import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppointmentList from "./components/appointment/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<AppointmentList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
