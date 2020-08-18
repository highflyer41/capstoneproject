import React from 'react';
import ActivityService from '../ActivityService';
import ActivityComponent from './ActivityComponent';

class AddActivityComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name : "",
            duration : 0,
            imgUrl: ""
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
            duration: this.state.duration,
            imageUrl: this.state.imgUrl
        }

        console.log(data);

        ActivityService.addActivity(data);
    }

    selectImage = (event) => {
        event.preventDefault();
        this.setState({
            imgUrl: event.target.value
        })

        setTimeout(() => {
            console.log(this.state.imgUrl)
        }, 200);
    }

    render() {
        return (
            <div>
                <ActivityComponent />

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
                            <option value="https://i.ibb.co/C19Wfx7/Brush-Teeth.jpg">Brush Teeth</option>
                            <option value="https://i.ibb.co/kJd22WZ/Ride-in-Car.jpg">Ride in Car</option>
                            <option value="https://i.ibb.co/9TjQBdN/Toilet.jpg">Bathroom</option>
                            <option value="https://i.ibb.co/18dWrGf/Classroom.jpg">Classroom</option>
                            <option value="https://i.ibb.co/KWb9GQM/School.jpg">School</option>
                            <option value="https://i.ibb.co/b1Zk9WZ/Science.jpg">Science</option>
                            <option value="https://i.ibb.co/sm7W4dF/Sit.jpg">Sitting</option>
                            <option value="https://i.ibb.co/G5chRnD/Sleep.jpg">Sleeping</option>
                            <option value="https://i.ibb.co/R4z4xxn/Walk.jpg">Walking</option>
                            <option value="https://i.ibb.co/HXSQBNV/Cooking.jpg">Cooking</option>
                            <option value="https://i.ibb.co/WcZd466/Drinking.jpg">Drinking</option>
                            <option value="https://i.ibb.co/2nVrszH/Eat.jpg">Eating</option>
                            <option value="https://i.ibb.co/h82kXcw/Eat-Lunch.jpg">Eating Lunch</option>
                            <option value="https://i.ibb.co/pj9BzTS/Geography.jpg">Geography</option>
                            <option value="https://i.ibb.co/0ZjGbks/History.jpg">History</option>
                            <option value="https://i.ibb.co/m0wVQnf/Lunch.jpg">Lunch</option>
                            <option value="https://i.ibb.co/sK3hSTV/Ready-to-Work.jpg">Ready to Work</option>
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