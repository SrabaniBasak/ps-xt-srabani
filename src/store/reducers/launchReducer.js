const inititalState = {
    lists: [],
    loading: true
}

function launchReducer(state= inititalState, {payload, type}) {
    switch (type) {
        case 'FETCH_LAUNCH_LIST':
            return {...state, lists: payload, loading: false}
        default:
            return {...state};
    }
    
}

export default launchReducer;