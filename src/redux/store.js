import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import {
  authReducer,
  commonReducer,
  homeReducer,
  paymentReducer,
  postReducer,
  realEstatesReducer,
  userRealEstatesReducer,
  userReducer,
  wareHousesReducer,
} from '../features';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  common: commonReducer,
  home: homeReducer,
  realEstates: realEstatesReducer,
  user: userReducer,
  userRealEstates: userRealEstatesReducer,
  post: postReducer,
  payment: paymentReducer,
  wareHouses: wareHousesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
      },
    }),
});

export const persistor = persistStore(store);
