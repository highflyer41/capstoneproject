import React from 'react';
import ActivityService from '../ActivityService';

class ActivityComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            activities: [],
            image: ""
        }
    }

    componentDidMount() {
        ActivityService.getActivities().then((response) => {
            this.setState({activities: response.data})
        });
    }

    componentDidUpdate() {
        ActivityService.getActivities().then((response) => {
            this.setState({activities: response.data})
        });
    }

    deleteActivity = (event) => {
        event.preventDefault();
        console.log(event.target.name);
        ActivityService.deleteActivity(event.target.name);
    }

    updateImage = () => {
        ActivityService.getImage(this.props.img).then((response) => {
            this.setState({image: response.data.url})
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Activities List</h1>

                <div className="card-deck" onChange={this.updateImage}>
                    {this.state.activities.map(
                        activity =>
                        <div className="card" key={activity.id}>
                            <img className="card-img-top" src={this.state.image} alt="Card image"></img>
                            <div className="card-body">
                                <h4 className="card-title">{activity.duration} minutes</h4>
                                <p className="card-text">{activity.name}</p>
                            </div>
                            <div className="card-footer">
                                <button name={activity.id} onClick={this.deleteActivity}>Delete</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default ActivityComponent