import { connect } from 'react-redux';
import { React } from 'react';
import * as actionTypes from '../store/actions/actions';

function Resource(props) {

    return (
        <div>
            <div>
                <span className="libelle">
                    <button onClick={() => props.getResource(props.accessToken)}>
                        Get resource
                    </button>
                </span>
                <span className="val">
                    {props.resource}
                </span>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        accessToken: state.accessToken,
        resource: state.resource
    };
};

const mapDispatchToProps = dispatch => ({
    getResource: (accessToken) => {

        const headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + accessToken);

        const init = {
            method: 'GET',
            headers: headers,
            mode: 'cors'
        };

        fetch('http://localhost:8090/protected-resources/', init)
            .then(response => response.json())
            .then(json => {
                //console.log(json)
                dispatch({
                    type: actionTypes.SET_RESOURCE,
                    value: json['response']
                })
            });

    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Resource);