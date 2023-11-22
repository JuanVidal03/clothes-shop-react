// import styles
import "./profile.css";
import profileImage from "../../img/profile-img.jpeg"
// import context
import { ProfileCardCon } from "../../context/ProfileCardContext.jsx";
// import react hooks
import { useContext } from "react";

const ProfileCard = () => {

  // usign the context
  const profileContext = useContext(ProfileCardCon);

  return (

      <div className={`propfile-card ${profileContext.handleProfileCard ? 'show' : 'hidden'}`}>
        <figure className="profile-card-img-container">
          <img className="profile-card-img" src={profileImage} alt="" />
        </figure>
        <div className="profile-card-info">
          <h6>Juan Vidal</h6>
          <p>Customer</p>
        </div>
        <div></div>
      </div>

  );
}

export default ProfileCard;