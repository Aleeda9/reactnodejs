import * as types from './actionTypes'

// reducers

const initialState = {
    users: [
        {
            id: 1,
            name: 'User1'
        },{
            id: 2,
            name: 'User2'
        },{
            id: 3,
            name: 'User3',
        }
    ]
};

function usersApi(state = initialState, action) {
    var {users, ...rest} = state;
    switch(action.type) {
        case types.ADD_USER:
            return {
                users: users.concat([{...action.data, id: generateId(state.users)}]),
                ...rest
            };

        case types.UPDATE_USER:
            return {
                users: users.map(item => {
                    if(item.id == action.id)
                        return Object.assign({}, {id: item.id}, action.data);
                }),
                ...rest
            };

        case types.DELETE_USER:
            return {
                users: users.filter(item => item.id != action.id ),
                ...rest
            }
        default:
            return state;
    }
}

export function usersApp(state, action) {
    return usersApi(state, action);
}

function generateId(users){
    var maxId = 0;
    for(var i in users)
        if(users[i].id > maxId)
            maxId = users[i].id;

    return ++maxId;
}