import buttonSubsBrowse from '../images/buttonSubscribe.svg';

function SubscribeBrowseShare() {
    return(
        <article>
            <h3>Become a nanny share host</h3>
            <p>Takes less than 5 minutes to get started</p>
            <img src={buttonSubsBrowse} alt="Button become a nanny"/>
            <a href='#'><u>Or browse local nanny-shares</u></a>
        </article>
    )
}

export default SubscribeBrowseShare;