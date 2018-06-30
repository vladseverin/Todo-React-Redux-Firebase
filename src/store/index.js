import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import loggerMiddleWare from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore() {
  if (process.env.NODE_ENV === 'production') {
    return createStore(rootReducer);
  } else {
    return createStore(
      rootReducer,
      applyMiddleware(reduxThunk, loggerMiddleWare)
    )
  }
};