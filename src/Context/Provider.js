import React, { useState } from 'react';
import NannyContext from './NannyContext';
import PropTypes from 'prop-types';

function Provider({ children }) {
    const info = {
        name: 'sabrina',
        email: ''
    }

const [SubscribeInfo, setSubscribeInfo] = useState(info);

const contextValue = {
    SubscribeInfo,
    setSubscribeInfo
}; 

return (
    <NannyContext.Provider value={ contextValue }>
        {children}
    </NannyContext.Provider>
    )
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Provider;