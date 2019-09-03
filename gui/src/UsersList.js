import React from 'react';

import {connect} from 'react-redux';

import List from './List';
import { putUser, delUser, fetchUsers } from './actions';

/**
 * extends List component and represents work with users list (editing and deleting)
 */
class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchUsers();
    }

    render() {
        return <List
            items={ this.props.users }
            onDelete={ id => this.props.delUser(id) }
            onSave={ (id, name) => this.props.putUser(id, {name}) }
        />
    }
}

const mapDispatchprops = (dispatch) => {
    return {
        putUser: (id, data) => dispatch(putUser(id, data)),
        delUser: id => dispatch(delUser(id)),
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(
    state => ({users: state.users}),
    mapDispatchprops
)(UsersList);