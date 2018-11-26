// import React, { Component } from 'react';
// import { Header } from './components/Header'
// import { Home } from './components/Home'

// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             homeLink: "Home",
//         };
//     }
//     Greet() {
//         alert("Hello")
//     }

//     onChangeLinkName = (newName) => {
//         this.setState({
//             homeLink: newName
//         });
//     }

//     render() {
//         return (<div className="container">
//             <div className="row">
//                 <div className="col-xs-10 col-xs-offset-1">
//                     <Header homeLink={this.state.homeLink} />
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-xs-10 col-xs-offset-1">
//                     {
//                         <Home
//                             name={"Jude"}
//                             initialAge={100}
//                             greet={this.onGreet}
//                             changeLink={this.onChangeLinkName}
//                             initialLink={this.state.homeLink} />
//                     }
//                 </div>
//             </div>
//         </div>
//         );
//     }
// }

// export default App;


import { createStore, combineReducers} from 'redux'; 

const mathReducer = (state = {
    result: 1,
    lastValues: [],
    }, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
    }
    return state;
}

const userReducer = (state = {
    name: "Jude", 
    age: 27,
    }, 
    action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
}

const store = createStore(combineReducers({
    mathReducer,
    userReducer
}));

store.subscribe(() => {
    console.log("store update", store.getState());
});

store.dispatch({
    type: "ADD",
    payload: 10
});

store.dispatch({
    type: "ADD",
    payload: 22
});

store.dispatch({
    type: "SUBTRACT",
    payload: 22
});

store.dispatch({
    type: "SET_AGE",
    payload: 26
});

