import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./pages/UserList";
import NoPage from "./pages/NoPage";
import UserProvider from "./userContext";
import "./App.css";
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
