import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actions';

function PKCEState(props) {
    return (
        <div>
            <span className="libelle">
                <button onClick={props.generatePkceState}>
                    Generate state
                </button>
            </span>
            <span className="val">
                {props.pkceState}
            </span>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        pkceState: state.pkceState
    };
};

const mapDispatchToProps = dispatch => {
    return {
        generatePkceState: () => dispatch({ type: actionTypes.GEN_PKCE_STATE })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PKCEState);