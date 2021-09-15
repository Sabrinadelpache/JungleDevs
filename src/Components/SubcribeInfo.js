import { useState } from 'react';
import { postData} from '../services/services'
// import { useContext, useState } from 'react';
// import NannyContext from '../Context/NannyContext';

function SubscribeInfo() {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');

    const submitInfo = () => {
        console.log("sending info to api");
        postData(name, email);
    }

    const validateEmail = () => {
        const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
        return emailRegex.test(email)
    }

    const validateName = () => {
        const nameRegex = /^[a-z ,.'-]+$/i;
        return nameRegex.test(name)
    }

    const handleChange = ({ target }) => {
        const { name, value } = target;
        if(name === 'email') setEmail(value);
        setName(value)
    }
 

    return(
        <article>
            <h3>Are you a parent without a nanny and looking to share?</h3>
            <p>Leave us your name and email and we’ll update you as soon as a share becomes available in your area!</p>
            <form>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                    onChange={ handleChange }
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder= "Your email"
                    onChange={ handleChange }/>
                <button
                    type="button"
                    disabled={ (!validateEmail() && !validateName()) }
                    onClick={ submitInfo }
                >
                    Send
                </button>
            </form>
        </article>
    )
}

export default SubscribeInfo;