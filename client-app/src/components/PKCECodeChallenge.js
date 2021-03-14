import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actions';
import { generateCodeChallenge } from '../utils/pkce';

function PKCECodeChallenge(props) {
    return (
        <div>
            <span className="libelle">
                <button onClick={() => props.generateCodeChallenge(props.codeVerifier)}>
                    Generate code challenge
                </button>
            </span>
            <span className="val">
                {props.codeChallenge}
            </span>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        codeChallenge: state.codeChallenge,
        codeVerifier: state.codeVerifier
    };
};

const mapDispatchToProps = dispatch => ({
    generateCodeChallenge: async (codeVerifier) => {
        let codeChallenge = await generateCodeChallenge(codeVerifier);
        return dispatch({
            type: actionTypes.GEN_CODE_CHALLENGE,
            payload: codeChallenge
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PKCECodeChallenge);