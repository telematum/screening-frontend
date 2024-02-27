import { createContext, useContext, useState } from "react";
const userContext = createContext();
function UserProvider({ children }) {
  const [users, setUsers] = useState([]);

  return (
    <>
      <userContext.Provider value={{ users, setUsers }}>
        {children}
      </userContext.Provider>
    </>
  );
}
export default UserProvider;
export const useUsers = () => {
  return useContext(userContext);
};
