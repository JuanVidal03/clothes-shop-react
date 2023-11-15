// import dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import styles
import "./socialIcons.css";

const SocialIcons = ({fb,insta, twtt}) => {
    return (
        <div className='socialIcons-container'>
            <Link target='_blank' to={fb}>
                <FontAwesomeIcon className="socialIcon" icon={faEnvelope}/>
            </Link>
            <Link target='_blank' to={twtt}>
                <FontAwesomeIcon className="socialIcon" icon={faXTwitter}/>
            </Link>
            <Link target='_blank' to={insta}>
                <FontAwesomeIcon className="socialIcon" icon={faInstagram}/>
            </Link>
        </div>
    );
}

export default SocialIcons;