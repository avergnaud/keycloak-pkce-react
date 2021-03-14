import { connect } from 'react-redux';
import { React } from 'react';
import { ROOT_URL, CALLBACK_PATH, OIC_ENDPOINT } from '../constants';
import * as actionTypes from '../store/actions/actions';

function AccessToken(props) {

    return (
        <div>
            <div>
                <span className="libelle">
                    <button onClick={() => props.getAccessToken(props.authorizationCode, props.codeVerifier)}>
                        Get access token
                    </button>
                </span>
                <span className="val">
                    {props.accessToken}
                </span>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        authorizationCode: state.authorizationCode,
        codeVerifier: state.codeVerifier,
        accessToken: state.accessToken
    };
};

const mapDispatchToProps = dispatch => ({
    getAccessToken: (authorizationCode, codeVerifier) => {


        const headers = new Headers();
        headers.append('Content-type','application/x-www-form-urlencoded; charset=UTF-8');
        headers.append('Accept', 'application/json');

        const body = {
            "grant_type": "authorization_code",
            "client_id": "meetup-app-pkce-client",
            "code": authorizationCode,
            "code_verifier": codeVerifier,
            "redirect_uri": ROOT_URL + CALLBACK_PATH
        }
        /* x-www-form-urlencoded : */
        var formBody = [];
        for (var property in body) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(body[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        const init = {
            method: 'POST',
            headers: headers,
            body: formBody,
            mode: 'cors'
        };

        fetch(OIC_ENDPOINT + '/token', init)
            .then(response => response.json())
            .then(json => {
                //console.log(json)
                dispatch({
                    type: actionTypes.SET_ACCESS_TOKEN,
                    value: json['access_token']
                })
            });

    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AccessToken);