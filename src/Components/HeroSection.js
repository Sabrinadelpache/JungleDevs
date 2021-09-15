import play from "../images/icons/playIcon.svg"
import detailHeroSection from "../images/detailHeroSection.svg"
import "../styles/Header/heroSection.css"

function HeroSection() {
    return(
        <section className="hero-section">
            <h1>Easily create or join a local nanny share with Hapu</h1>
            <p>Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.</p>
            <div>
                <img src={play} className="heroPlayButton" alt="Play icon" />
                <p>See hapu in action (27 seconds)</p>
            </div>
            <img src={detailHeroSection} className="detail-hero-section" alt="detail-nanny-share" />
        </section>
    )
}

export default HeroSection;