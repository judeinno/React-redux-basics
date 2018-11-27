import React, { Component } from 'react';
import { Header } from '../components/Header';
import { connect } from "react-redux";
import { Home } from '../components/Home';
import { setName } from '../actions/userActions'

class App extends Component {
    Greet = () => {
        alert("Hello")
    }

    render() {
        return (<div className="container">
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Header homeLink="Home"              
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    {
                        <Home
                            name={this.props.user.name}
                            initialAge={100}
                            greet={this.onGreet}
                            username={() => this.props.setName("Innocent")}
                            />
                    }
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.userReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        setName: (name) => {
            dispatch(setName(name));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);