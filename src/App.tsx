import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./redux/state";


type PropsType = {
    store: StoreType
}

function App(props: PropsType) {
    const state = props.store.getState();
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <Dialogs DialogsPropsItem={state.dialogsPage.dialogs}
                                              MessagePropsItem={state.dialogsPage.messages}
                                              newMessageText={state.dialogsPage.newMessageText}
                                              dispatch={props.store.dispatch.bind(props.store)}
                       />}/>
                <Route path='/profile' render={() => <Profile MyPostsPropsType={state.profilePage.posts}
                                                              newPostText={state.profilePage.newPostText}
                                                              dispatch={props.store.dispatch.bind(props.store)}

                />}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
