import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { ToastContainer } from 'react-toastify';
import { store } from "./store/store";

const app = (
    <Provider store={store}>
        <App />
        <ToastContainer limit={1} />
    </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
