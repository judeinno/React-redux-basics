import React from 'react'; 
import PropTypes from 'prop-types';

export const Home = () => {
    
        return (
            <div>
                <h3>Home</h3>
            </div>
        )
    }

 
Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.string, 
    user: PropTypes.object,
    children: PropTypes.element.isRequired  
};
