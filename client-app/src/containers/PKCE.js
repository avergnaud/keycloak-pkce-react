import React from 'react';
import PKCEState from '../components/PKCEState';
import PKCECodeVerifier from '../components/PKCECodeVerifier';
import PKCECodeChallenge from '../components/PKCECodeChallenge';
import AuthorizationCode from '../components/AuthorizationCode';
import AccessToken from '../components/AccessToken';
import Resource from '../components/Resource';

function PKCE() {
    return (
        <React.Fragment>
            <PKCEState></PKCEState>
            <PKCECodeVerifier></PKCECodeVerifier>
            <PKCECodeChallenge></PKCECodeChallenge>
            <AuthorizationCode></AuthorizationCode>
            <AccessToken></AccessToken>
            <Resource></Resource>
        </React.Fragment>
    );
}

export default PKCE;