import axios from 'axios';

const REST_API_URL = 'http://localhost:8080/api/activities';

class ActivityService {

    getActivities() {
        return axios.get(REST_API_URL);
    }

}

export default new ActivityService()