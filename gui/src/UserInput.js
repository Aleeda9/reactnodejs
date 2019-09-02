import React from 'react';
import { connect } from 'react-redux';

import TextInput from './TextInput';
import { addUser } from './actions';

/**
 * extends TextInput component and represents work with users list (adding new one)
 */
class UserInput extends React.Component {
    render() {
        return <TextInput
            onChange={ (name) => this.props.addUser({name}) }
        />
    }
}

export default connect(
    state => ({users: state.users}),
    { addUser }
)
(UserInput);