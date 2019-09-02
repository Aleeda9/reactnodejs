import React from 'react';

import {connect} from 'react-redux';

import List from './List';
import { updateUser, deleteUser } from './actions';

/**
 * extends List component and represents work with users list (editing and deleting)
 */
class UsersList extends React.Component {
    render() {
        return <List
            items={ this.props.users }
            onDelete={ id => this.props.deleteUser(id) }
            onSave={ (id, name) => this.props.updateUser(id, {name}) }
        />
    }
}

export default connect(
    state => ({users: state.users}),
    { updateUser, deleteUser }
)(UsersList);