import React from "react";
const UserContext=React.createContext();
function userContextProvider({child}){
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
    return(
        <UserContext.Provider value={userData}>
            {child}
        </UserContext.Provider>    
    );
}
export { UserContext, UserContextProvider };