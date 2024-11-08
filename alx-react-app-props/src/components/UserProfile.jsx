import React, { useContext } from "react";
import { UserContext } from "../../../alx-react-app-pros/src/UserContext";

const UserProfile = () => {
  const userData = useContext(UserContext);
    return (
      <div>
        <h2>{props.name}</h2>
        <p>Age: {userData.age}</p>
        <p>Bio: {userData.bio}</p>
      </div>
    );
  };
export default UserProfile;