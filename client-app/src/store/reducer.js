import { generateState, generateCodeVerifier } from '../utils/pkce';
import * as actionTypes from './actions/actions';

const initialState = {
    pkceState: "",
    returnedPkceState: "",
    codeVerifier: "",
    codeChallenge: "",
    authorizationCode: "",
    accessToken: "",
    resource: ""
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
        case actionTypes.SET_RETURNED_STATE:
            return {
                ...state,
                returnedState: action.value
            }
        case actionTypes.SET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.value
            }
        case actionTypes.SET_RESOURCE:
            return {
                ...state,
                resource: action.value
            }
        default:
            return state
    }
};

export default reducer;