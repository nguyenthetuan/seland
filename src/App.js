import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import RootNavigator from './navigation';
import { persistor, store } from './redux';
import { Toast, i18n } from './utils';

const App = () => (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
        <Toast />
      </PersistGate>
    </Provider>
  </I18nextProvider>
);

export default App;
