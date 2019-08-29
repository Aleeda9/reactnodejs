import React from 'react';
import List from './List';
import TextInput from './TextInput';

import { connect } from 'react-redux';
import { addUser, deleteUser } from './actions';

class App extends React.Component {
    render() {
        console.log('App render');

        return <div>
            <List items={ this.props.users } onDelete={ id => this.props.deleteUser(id) }/>
            <TextInput onChange={v => this.props.addUser({name: v})} />
        </div>;
    }
}

export default connect(
    state => ({'users': state.users ? state.users : []}),
    { addUser, deleteUser } 
)(App);