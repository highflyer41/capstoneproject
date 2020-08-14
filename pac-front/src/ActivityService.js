import axios from 'axios';

const REST_API_URL = 'http://localhost:8080/api/activities';

class ActivityService {

    getActivities() {
        return axios.get(REST_API_URL);
    }

    addActivity(data) {
        axios.post(REST_API_URL, data);
        //console.log(data);
    }

}

export default new ActivityService()