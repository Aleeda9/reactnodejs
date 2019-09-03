import fetch from 'cross-fetch';

import * as types from './actionTypes';

// action creators

function addUser(data) {
    return {
        type: types.ADD_USER,
        data
    };
}

function updateUser(id, data) {
    return {
        type: types.UPDATE_USER,
        id, // id or index - this is the question
        data
    };
}

function deleteUser(id) {
    return {
        type: types.DELETE_USER,
        id
    };
}

function getUsers(users) {
    return {
        type: types.GET_USERS,
        data: users
    }
}

export function fetchUsers() {
    console.log('fetchUsers');
    return dispatch => {
        return fetch(`http://127.0.0.1:3050/users`)
            .then(
                response => { return response.json()},
                // Do not use catch, because that will also catch
                // any errors in the dispatch and resulting render,
                // causing a loop of 'Unexpected batch number' errors.
                error => console.log('An error occurred. ', error)
            )
            .then(users =>
                // We can dispatch many times!
                // Here, we update the app state with the results of the API call.
                dispatch(getUsers(users))
            )
    };
}

export function postUser(data) {
    console.log('postUser');
    return dispatch => {
        return fetch(`http://127.0.0.1:3050/users`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...data })
        })
        .then( response => response.json() )
        .then( response => {
            if(response.success === true)
                return dispatch(addUser(data))
        })
    };
}

export function putUser(id, data) {
    console.log('putUser');
    return dispatch => {
        return fetch(`http://127.0.0.1:3050/users/${id}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...data })
        })
        .then( response => response.json() )
        .then( response => {
            if(response.success === true)
                return dispatch(updateUser(id, data))
        })
    };
}

export function delUser(id) {
    console.log('delUser');
    return dispatch => {
        return fetch(`http://127.0.0.1:3050/users/${id}`, {
            method: 'DELETE'
        })
        .then( response => response.json() )
        .then( response => {
            if(response.success === true)
                return dispatch(deleteUser(id))
        })
    };
}