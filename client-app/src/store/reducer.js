import { generateState, generateCodeVerifier } from '../utils/pkce';
import * as actionTypes from './actions/actions';

const initialState = {
    pkceState: "",
    codeVerifier: "",
    codeChallenge: "",
    authorizationCode: "",
    accessToken: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GEN_PKCE_STATE:
            return {
                ...state,
                pkceState: generateState()
            }
        case actionTypes.GEN_CODE_VERIFIER:
            return {
                ...state,
                codeVerifier: generateCodeVerifier()
            }
        case actionTypes.GEN_CODE_CHALLENGE:
            return {
                ...state,
                codeChallenge: action.payload
            }
        case actionTypes.SET_AUTH_CODE:
            return {
                ...state,
                authorizationCode: action.value
            }
        default:
            return state
    }
};

export default reducer;