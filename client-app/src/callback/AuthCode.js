import React, { useEffect } from 'react';

/* 
executes outside of main SPA bundle!
should be a stateless volatile component
*/
function AuthCode(props) {

    /* componentDidMount */
    useEffect(() => {

        const urlParams = new URLSearchParams(window.location.search);

        window.opener.getCallbackPayload({
            authorizationCode: urlParams.get('code'),
            returnedState: urlParams.get('state'),
            error: urlParams.get('error'),
            errorDescription: urlParams.get('error_description')
        });

        setTimeout(() => window.close(), 3000)
    }, []);

    return (
        <div>
            <h1>Callback route !</h1>
        </div>
    );
}

export default AuthCode;