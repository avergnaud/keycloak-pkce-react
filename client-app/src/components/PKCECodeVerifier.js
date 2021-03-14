import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actions';

function PKCECodeVerifier(props) {
    return (
        <div>
            <span className="libelle">
                <button onClick={props.generateCodeVerifier}>
                    Generate code verifier
                </button>
            </span>
            <span className="val">
                {props.codeVerifier}
            </span>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        codeVerifier: state.codeVerifier
    };
};

const mapDispatchToProps = dispatch => {
    return {
        generateCodeVerifier: () => dispatch({ type: actionTypes.GEN_CODE_VERIFIER })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PKCECodeVerifier);