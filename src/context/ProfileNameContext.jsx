// import react hooks
import { createContext, useState } from "react";
// creating a context
export const ProfileNameContext = createContext();

const ProfileNameProvider = ({children}) => {

  // state that get the user name from login form
  const [userName, setUserName] = useState('');

  return (
    <ProfileNameContext.Provider
      value={{
        setUserName,
        userName
      }}>
      {children}
    </ProfileNameContext.Provider>
  );
}

export default ProfileNameProvider;
