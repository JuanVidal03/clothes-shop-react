// import styles
import "./footer.css";
// import components
import SocialIcons from "../socialIcons/SocialIcons.jsx";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="creadits">
                <p>Creado por Juan Vidal</p>
            </div>
            <div className="socialMedia">
                <SocialIcons
                    fb="mailto:juanmvg2003@gmail.com"
                    twtt="https://twitter.com/juanvidal_03"
                    insta="https://www.instagram.com/juanvidal_03/"
                />
            </div>
        </footer>
    );
}

export default Footer;
