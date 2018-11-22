import React, { Component } from 'react';
import { Header } from './components/Header'
import { Home} from './components/Home'

class App extends Component {
    constructor() {
        super();
        this.state = {
            homeLink: "Home",
            homeMounted: true
        };
    }
    onChangeHomeMounted= () => {
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }
    onGreet() {
        alert("Hello")
    }

    onChangeLinkName = (newName) => {
        this.setState({
            homeLink: newName
        });
    }

    render() {
        let homeCmp = "";
        if (this.state.homeMounted) {
            homeCmp = (
                <Home 
                    name={"Jude"} 
                    initialAge={100} 
                    greet={this.onGreet}
                    changeLink={this.onChangeLinkName}
                    initialLink={this.state.homeLink}
                />
            )
        }
        return (<div className="container">
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                            <Header homeLink={this.state.homeLink}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                            {homeCmp
                                /* <Home 
                                name={"Jude"} 
                                initialAge={100} 
                                greet={this.onGreet}
                                changeLink={this.onChangeLinkName}
                                initialLink={this.state.homeLink}
                            /> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                            <button onClick={this.onChangeHomeMounted} 
                                type="button" 
                                className="btn btn-dark">(Un)Mount Home cmp
                            </button>
                        </div>
                    </div>
                </div>
        );
    }   
}

export default App;
