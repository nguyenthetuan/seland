import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import RootNavigator from './navigation';
import {persistor, store} from './redux';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;
