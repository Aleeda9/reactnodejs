import * as types from './actionTypes';

// action creators

export function addUser(data) {
    return {
        type: types.ADD_USER,
        data
    };
}

export function updateUser(id, data) {
    return {
        type: types.UPDATE_USER,
        id, // id or index - this is the question
        data
    };
}

export function deleteUser(id) {
    return {
        type: types.DELETE_USER,
        id
    };
}