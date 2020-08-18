import React from 'react';
import ActivityService from '../ActivityService';

class ActivityComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            activities: [],
            timer: 0,
            name: "",
            timerFunction: 0
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

    startActivity = (event) => {
        this.setState({
            timer: event.target.name,
            name: event.target.value
        })

        setTimeout(() => {
            this.countdown();
        }, 100);
        
    }

    countdown = () => {
        let duration = this.state.timer * 60;
        //let minutes, seconds;
        let temp = setInterval(() => {
            // minutes = parseInt(duration/60);
            // seconds = parseInt(duration%60);

            // minutes = minutes < 10 ? "0" + minutes : minutes;
            // seconds = seconds < 10 ? "0" + seconds : seconds;

            if(duration > 0) {
                duration--;
            } else {
                duration = 0;
                this.closeCountdown();
            }

            this.setState({
                timer: duration
            })
        }, 1000)

        this.setState({
            timerFunction: temp
        })
    
    }

    closeCountdown = () => {
        clearInterval(this.state.timerFunction);
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Activities List</h1>

                <div className="card-deck" onChange={this.updateImage}>
                    {this.state.activities.map(
                        activity =>
                        <div className="card" key={activity.id}>
                            <img className="card-img-top" src={activity.imageUrl} alt="Card image"></img>
                            <div className="card-body">
                                <h4 className="card-title">{activity.duration} minutes</h4>
                                <p className="card-text">{activity.name}</p>
                            </div>
                            <div className="card-footer">
                                <button onClick={this.startActivity} className="btn btn-primary" data-toggle="modal" data-target="#countdown" name={activity.duration} value={activity.name}>Start Activity</button>
                                <button name={activity.id} onClick={this.deleteActivity}>Delete</button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="modal fade" id="countdown" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                    <h5 className ="modal-title" id="exampleModalLabel">{this.state.name}</h5>
                                </div>
                                <div className="modal-body">
                                    {this.state.timer}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.closeCountdown}>Close</button>
                                    <button type="button" className="btn btn-primary" onClick={this.closeCountdown}>Save changes</button>
                                </div>
                            </div>
                        </div>
                </div>
                

            </div>
        )
    }
}

export default ActivityComponent