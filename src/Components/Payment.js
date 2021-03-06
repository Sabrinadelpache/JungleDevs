import paymentExample from '../images/paymentExample.svg';

function Payment() {
    return(
        <section>
            <img src={ paymentExample } alt="Detailed info about table of cost"/>
            <h3>Shared payments made simple</h3>
            <p>Sometimes it’s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what.</p>
            <a href='#'><u>Read how Bridget’s share (without Hapu) ended over $15</u></a>
        </section>
    )
}

export default Payment;