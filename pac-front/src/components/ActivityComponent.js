import React from 'react';
import ActivityService from '../ActivityService';

class ActivityComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            activities: []
        }
    }

    componentDidMount() {
        ActivityService.getActivities().then((response) => {
            this.setState({activities: response.data})
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Activities List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Activity ID</td>
                            <td>Activity Description</td>
                            <td>Activity Time</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.activities.map(
                            activity =>
                            <tr key={activity.id}>
                                <td>{activity.id}</td>
                                <td>{activity.description}</td>
                                <td>{activity.dateTime}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ActivityComponent