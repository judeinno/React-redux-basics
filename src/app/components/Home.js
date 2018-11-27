import React from 'react'; 
import PropTypes from 'prop-types';

export const Home = (props) => {
        return (
            <div>
                <p>In a new component</p>
                <p>Your name is {props.name} and your age is 27</p>
                <hr/>
                <hr/>
                <button onClick={props.username} type="button" className="btn btn-dark">Change Name</button>
                <hr/>

            </div>
        )
    }
 
Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number, 
    greet: PropTypes.func,
    initialLink: PropTypes.func,

};
