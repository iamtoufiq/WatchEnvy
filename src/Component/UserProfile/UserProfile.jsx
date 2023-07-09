import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import "./UserProfileStyle.css";

const UserProfile = () => {
  const { userLogout } = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem("user"));

  // Check if user exists before accessing its properties
  const firstName = user ? user.firstName : "";
  const lastName = user ? user.lastName : "";
  const email = user ? user.email : "";

  return (
    <div className="user-profile-container">
      <div className="user-profile-body">
        <p>
          <span>Name: </span> {firstName + " " + lastName}
        </p>
        <p>
          <span>Email: </span>
          {email}
        </p>
        <button onClick={userLogout}>LogOut</button>
      </div>
    </div>
  );
};

export { UserProfile };
