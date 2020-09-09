import axios from 'axios';
import _ from 'lodash';

const getLaunchList = (params = {}) => {
    let queryparam = ''

    for (const property in params) {
        if (!_.isNull(params[property])) {
            queryparam = `${queryparam}&${property}=${params[property]}`
        }
    }
    return axios.get('https://api.spaceXdata.com/v3/launches?limit=100'+queryparam)
                .then((response) => {
                    return response.data
                })
                .catch((error) => {
                    return error
                })
}

export {
    getLaunchList
}