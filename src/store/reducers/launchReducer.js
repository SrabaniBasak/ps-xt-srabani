const inititalState = {
    lists: []
}

function launchReducer(state= inititalState, {payload, type}) {
    switch (type) {
        case 'FETCH_LAUNCH_LIST':
            return {...state, lists: payload}
        default:
            return {...state};
    }
    
}

export default launchReducer;