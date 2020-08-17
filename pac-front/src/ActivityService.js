import axios from 'axios';

const REST_API_URL = 'http://localhost:8080/api/activities';
const REST_API_IMG_URL = 'http://localhost:8080/api/images'

class ActivityService {

    getActivities() {
        return axios.get(REST_API_URL);
    }
    
    getImage(name) {
        let imgURL = REST_API_IMG_URL + "/" + name;
        return axios.get(imgURL);
    }

    addActivity(data) {
        axios.post(REST_API_URL, data);
        //console.log(data);
    }

    deleteActivity(id) {
        let deleteURL = REST_API_URL + "/" + id;
        axios.delete(deleteURL);
    }

}

export default new ActivityService()