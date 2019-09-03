import React from 'react';
import { connect } from 'react-redux';

import TextInput from './TextInput';
import { postUser } from './actions';

/**
 * extends TextInput component and represents work with users list (adding new one)
 */
class UserInput extends React.Component {
    render() {
        return <TextInput
            onChange={ (name) => this.props.postUser({name}) }
        />
    }
}

export default connect(
    state => ({users: state.users}),
    (dispatch) => ({ postUser: (data) => dispatch(postUser(data)) })
)
(UserInput);