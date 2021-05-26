import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

import contacts from '../reducers/contacts/contactsReducer';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(reduxLogger);
}

const rootReducer = combineReducers({
  // Add reducers here
  contacts,
});

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

export default store;
