import React from 'react';
import ActivityService from '../ActivityService';

class AddActivityComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            description : ""
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
            description: this.state.description
        }

        ActivityService.addActivity(data);
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Add Activity</h1>
                <form onSubmit={this.submitActivity}>
                    <div className="form-group">
                        <label>Activity</label><br></br>
                        <textarea name="description" onChange={this.activityChange}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Duration</label><br></br>
                        <input type="text"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>  
                </form>
            </div>
        )
    }
}

export default AddActivityComponent