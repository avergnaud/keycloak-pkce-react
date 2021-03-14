import React from 'react';
import PKCEState from '../components/PKCEState';
import PKCECodeVerifier from '../components/PKCECodeVerifier';
import PKCECodeChallenge from '../components/PKCECodeChallenge';
import GetAuthCode from '../components/GetAuthCode';

function PKCE() {
    return (
        <React.Fragment>
            <PKCEState></PKCEState>
            <PKCECodeVerifier></PKCECodeVerifier>
            <PKCECodeChallenge></PKCECodeChallenge>
            <GetAuthCode></GetAuthCode>
        </React.Fragment>
    );
}

export default PKCE;