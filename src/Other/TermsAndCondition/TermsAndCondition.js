import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h1>Here is your Conditions</h1>
            <p>Go back to registration: <Link to='/register'> Register</Link></p>
            ;
        </div>
    );
};

export default TermsAndCondition;