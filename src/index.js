import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import App from './App';
import * as serviceWorker from './serviceWorker';
library.add(fab)


const root = createRoot(document.getElementById("root"));
root.render(<App />);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

