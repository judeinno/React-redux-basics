import React from 'react'; 
import PropTypes from 'prop-types';

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: "House"
        };
        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 3000);
        console.log("Constactor");
    }

    onMakeOlder = () => {
        this.setState({
            age: this.state.age + 3
        });
    }
    onChangeLink = () => {
        this.props.changeLink(this.state.homeLink);
        console.log(this.state.homeLink);
    }
    onHandleChange = (event) => {
        this.setState({
            homeLink: event.target.value
        });
    }
    render() {
        return (
            <div>
                <p>In a new component</p>
                <p>Your name is {this.props.name} and your age is {this.state.age}</p>
                <hr/>
                <button onClick={this.onMakeOlder} 
                        type="button" 
                        className="btn btn-dark">Make me older!
                </button>
                <hr/>
                <button onClick={this.props.greet} type="button" className="btn btn-dark">Greet</button>
                <hr/>
                <button onClick={this.onChangeLink} type="button" className="btn btn-dark">Change Link Name</button>
            </div>
        )
    }
}
 
Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number, 
    greet: PropTypes.func,
    initialLink: PropTypes.string,

};
