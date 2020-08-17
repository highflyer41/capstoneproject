import React from 'react';
import ActivityService from '../ActivityService';
import ActivityComponent from './ActivityComponent';

class AddActivityComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name : "",
            duration : 0,
            img: "class"
        }
    }

    activityChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    submitActivity = (event) => {
        event.preventDefault();
        const data = {
            name: this.state.name,
            duration: this.state.duration
        }

        ActivityService.addActivity(data);
    }

    selectImage = (event) => {
        event.preventDefault();
        this.setState({
            img: event.target.value
        })

        setTimeout(() => {
            console.log(this.state.img)
        }, 200);
    }

    render() {
        return (
            <div>
                <ActivityComponent img={this.state.img} />

                <h1 className="text-center">Add Activity</h1>
                <form onSubmit={this.submitActivity}>
                    <div className="form-group">
                        <label>Activity</label><br></br>
                        <textarea name="name" onChange={this.activityChange}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Duration</label><br></br>
                        <input type="text" name="duration" onChange={this.activityChange}></input>
                    </div>
                    <div className="form-group">
                        <div className="dropdown show">
                        <label>Select Image list (select one):</label>
                        <select className="form-control" onChange={this.selectImage}>
                            <option value="brushTeeth">Brush Teeth</option>
                            <option value="carRide">Ride in Car</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>  
                </form>
            </div>
        )
    }
}

export default AddActivityComponent