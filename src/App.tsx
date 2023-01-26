import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {addMessage, state, updateNewMessageText, updateNewPostText,} from "./redux/state";
import {addPost} from './redux/state'


function App() {
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
                                              addMessage={addMessage}
                                              updateNewMessageText={updateNewMessageText}
                       />}/>
                <Route path='/profile' render={() => <Profile MyPostsPropsType={state.profilePage.posts}
                                                              addPost={addPost}
                                                              updateNewPostText={updateNewPostText}
                                                              newPostText={state.profilePage.newPostText}

                />}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
