import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import EmailForm from "./Components/EmailForm/EmailForm";
import emailImage from './resources/email-image.png';
import appStyles from './App.module.scss';

function App() {
    return (
        <div className="App">
            <div className="container">
                <img
                    className={`data-tilt ${appStyles.emailImage}`}
                    src={emailImage}
                />
                <EmailForm/>
            </div>
        </div>
    );
}

export default App;
