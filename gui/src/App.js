import React from 'react';
import UsersList from './UsersList';
import UserInput from './UserInput';

/**
 * main class
 */
export default class App extends React.Component {
    render() {
        return <div>
            <UsersList />
            <UserInput />
        </div>;
    }
}