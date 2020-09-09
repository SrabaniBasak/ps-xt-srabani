import { getLaunchList } from '../../services/launchListService';

const fetchLaunchList = (params = {}) => async(dispatch) => {
    const payload = await getLaunchList(params)
    dispatch({
        type: 'FETCH_LAUNCH_LIST',
        payload
    })
}

export {
    fetchLaunchList
}