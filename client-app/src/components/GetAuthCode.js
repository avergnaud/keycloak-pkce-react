import { connect } from 'react-redux';
import { React, useEffect } from 'react';
import * as actionTypes from '../store/actions/actions';

function GetAuthCode(props) {

    /* componentDidMount */
    useEffect(() => {
        window.getCallbackPayload = function (payload) {
            console.log("payload " + JSON.stringify(payload))
            props.setAuthorizationCode(payload.authorizationCode);
        }
    }, [props.setAuthorizationCode]);

    const getAuthCode = async (pkceState, codeChallenge) => {
        let authorizationUrl = "http://localhost:8080/auth/realms/master/protocol/openid-connect/auth";
        authorizationUrl += "?client_id=meetup-app-pkce-client";
        authorizationUrl += "&response_type=code";
        authorizationUrl += "&scope=openid profile";
        authorizationUrl += "&redirect_uri=http://localhost:3000/login/callback";
        authorizationUrl += "&state=" + pkceState;
        authorizationUrl += "&code_challenge=" + codeChallenge;
        authorizationUrl += "&code_challenge_method=S256";
        window.open(authorizationUrl, 'authorizationRequestWindow', 'width=800,height=600,left=200,top=200');
    }

    return (
        <div>
            <span className="libelle">
                <button onClick={() => getAuthCode(props.pkceState, props.codeChallenge)}>
                    Get authorization code
                </button>
            </span>
            <span className="val">
                {props.authorizationCode}
            </span>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        pkceState: state.pkceState,
        codeChallenge: state.codeChallenge,
        authorizationCode: state.authorizationCode
    };
};

const mapDispatchToProps = dispatch => ({
    setAuthorizationCode: (authCode) => dispatch({
        type: actionTypes.SET_AUTH_CODE,
        value: authCode
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(GetAuthCode);