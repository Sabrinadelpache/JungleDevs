import SubscribeBrowseNannyShare from "./SubscribeBrowseNannyShare";
import Logo from '../images/icons/logo.svg';
import Facebook from '../images/icons/facebookIcon.svg';
import Instagram from '../images/icons/instagramIcon.svg';
import Twitter from '../images/icons/twitterIcon.svg';

function Footer() {
    return(
        <footer>
            <SubscribeBrowseNannyShare/>
            <img src={Logo} alt="Logo"/>
            <nav>
                <p>Share Your Nanny</p>
                <p>Our Story</p>
                <p>Blog</p>
                <p>Terms & Privacy</p>
            </nav>
            <div className="social-media">
                <a href="https://www.instagram.com/"><img src={Facebook} alt="Facebook logo"/></a>
                <a href="https://twitter.com/?lang=en"><img src={Twitter} alt="Twitter logo"/></a>
                <a href="https://www.facebook.com/"><img src={Instagram} alt="Instagram logo"/></a>
            </div>
            <label>Copyright © 2017 Hapu PTY Limited All rights reserved</label>
        </footer>
    )
}

export default Footer;