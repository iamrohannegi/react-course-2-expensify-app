import authReducer from '../../reducers/auth';

test('should set uid for login', ()=>{
    const action = {
        type: 'LOGIN',
        uid: 'abcdef'
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('should clear uid for logout', ()=>{
    const action = {
        type: 'LOGOUT',
    };
    const state = authReducer({ uid: 'abcdef' }, action);
    
    expect(state).toEqual({});
});