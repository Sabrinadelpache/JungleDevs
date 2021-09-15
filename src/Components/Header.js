import HeroSection from './HeroSection' 
import mark from "../images/icons/markPage.svg"
import "../styles/Header/header.css"

function Header() {
    return(
        <header className="container">
            <div className="nav">
                <nav>
                     <img src={mark} className="mark-page" alt="Initial icon" />
                    <span className="right-section">Create Your Nanny Share</span>
                    <span className="right-section">Browse Shares</span>
                    <span className="right-section">Our Story</span>
                    <button>Become a Nanny Share Host</button>
                    <span>Sign in</span>
                </nav>
            </div>
            <HeroSection />
        </header>
    )
}

export default Header;