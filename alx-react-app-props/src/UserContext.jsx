import React from "react";

// Create the context
const UserContext = React.createContext();

// Correctly named provider component
function UserContextProvider({ children }) {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      {children}  {/* Children components will have access to `userData` */}
    </UserContext.Provider>
  );
}

// Export both the context and the provider
export { UserContext, UserContextProvider };
