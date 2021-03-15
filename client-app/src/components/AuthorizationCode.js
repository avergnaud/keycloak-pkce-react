import { connect } from 'react-redux';
import { React, useEffect } from 'react';
import { ROOT_URL, CALLBACK_PATH, OIC_ENDPOINT } from '../constants';
import * as actionTypes from '../store/actions/actions';

function AuthorizationCode(props) {

    useEffect(() => {
        /* defines the callback js function */
        window.getCallbackPayload = function (payload) {
            props.updateAuthorizationCodeInReduxState(payload.authorizationCode);
            props.updateReturnedStateInReduxState(payload.returnedState);
        }
    }, [props]);

    const getAuthCode = async (pkceState, codeChallenge) => {
        let authorizationUrl = OIC_ENDPOINT + "/auth";
        authorizationUrl += "?client_id=meetup-app-pkce-client";
        authorizationUrl += "&response_type=code";
        authorizationUrl += "&scope=openid profile contacts";
        authorizationUrl += "&redirect_uri=" + ROOT_URL + CALLBACK_PATH;
        authorizationUrl += "&state=" + pkceState;
        authorizationUrl += "&code_challenge=" + codeChallenge;
        authorizationUrl += "&code_challenge_method=S256";
        window.open(authorizationUrl, 'authorizationRequestWindow', 'width=500,height=500,left=50,top=50');
    }

    return (
        <div>
            <div>
                <span className="libelle">
                    <button onClick={() => getAuthCode(props.pkceState, props.codeChallenge)}>
                        Connect with Keycloak
                    </button>
                </span>
                <span className="val">
                    {props.authorizationCode}
                </span>
            </div>
            <div>
                <span className="libelle">
                    Returned State:
                </span>
                <span className="val">
                    {props.returnedState}
                </span>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        pkceState: state.pkceState,
        codeChallenge: state.codeChallenge,
        authorizationCode: state.authorizationCode,
        returnedState: state.returnedState
    };
};

const mapDispatchToProps = dispatch => ({
    updateAuthorizationCodeInReduxState: (authCode) => dispatch({
        type: actionTypes.SET_AUTH_CODE,
        value: authCode
    }),
    updateReturnedStateInReduxState: (returnedState) => dispatch({
        type: actionTypes.SET_RETURNED_STATE,
        value: returnedState
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationCode);