import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';

import App from './app/mainApp/App';
import store from './app/redux/store/store';
import { name as appName } from './app.json'

const mainApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => mainApp);
