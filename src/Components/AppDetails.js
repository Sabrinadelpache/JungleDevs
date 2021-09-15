import billingHistory from '../images/billingHistory.svg';

function AppDetails() {
    return(
        <section>
            <h3>A framework built for the long term</h3>
            <p>Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success. That’s why we’ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation.</p>
            <a href='#'><u>Read how Hapu’s tribal background defines our app </u></a>
            <img src={ billingHistory } alt="Detailed info about table of cost"/>
        </section>
    )
}

export default AppDetails;