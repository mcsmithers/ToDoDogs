import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Header from './components/Header'
// import Footer from './components/Footer'
import App from './components/App';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
