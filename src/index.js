import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import blogReducer from "./store/reducers/blogReducer";
import thunk from "redux-thunk";
import Auth0Provider from "./components/Auth0/auth0-provider-with-history"

const rootReducer = combineReducers({
  blog: blogReducer,
});
const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth0Provider>
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

// Implement hot reload for faster app refresh rate
if (module.hot) {
  module.hot.accept();
}
