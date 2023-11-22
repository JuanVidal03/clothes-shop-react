import { useState, createContext } from 'react';

export const ProfileCardCon = createContext();

const ProfileCardContext = ({children}) => {

  // state that show the profile card
  const [handleProfileCard, setHandleProfileCard] = useState(false);

  // change pfoile state
  const handleHoverProfileCardVisible = () => setHandleProfileCard(true);
  const handleHoverProfileCardHidden = () => setHandleProfileCard(false);

  return (
    <ProfileCardCon.Provider value={{
      handleHoverProfileCardVisible,
      handleHoverProfileCardHidden,
      handleProfileCard
    }}>
        {children}
    </ProfileCardCon.Provider>
  );
}

export default ProfileCardContext;