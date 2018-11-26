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


import { createStore } from 'redux';
 const intitalState = {
    result: 1,
    lastValues: [],
    username: "jude"
 }

const mathReducer = (state = intitalState, action) => {
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
 const store = createStore(mathReducer);

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

