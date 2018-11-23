import React, { Component } from 'react';

import { Home} from './components/Home'
import { BrowserRouter, Route } from 'react-router-dom';
import { User} from './components/User'
import { Header } from "./components/Header"


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path={"/"} component={Home}/>
                    <Route path={"/user"} component={User}/>
                    
                </div>
           
            </BrowserRouter>
        );
    }   
}

export default App;
