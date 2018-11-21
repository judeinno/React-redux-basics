import React, { Component } from 'react';
import { Header } from './components/Header'
import { Home} from './components/Home'

class App extends Component {
    render() {
        var user = {
            name: "Inno",
            hobbies: ["Sports", "Fifa"]
        };
        return (<div className="container">
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                            <Header/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                            <Home name={"Jude"} age={"100"} user={user}>
                                <p>This is a paragrath</p>
                            </Home>
                        </div>
                    </div>
                </div>
        );
    }   
}

export default App;
