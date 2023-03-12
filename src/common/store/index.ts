import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from "react-redux";
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import { configureStore } from "@reduxjs/toolkit";
import itineraryReducer from "./slices/itinerary";
import navigationReducer from "./slices/navigation"

/**
 * Includes all the slices as reducers.
 */
const rootReducer = combineReducers({
  itinerary: itineraryReducer,
  navigation: navigationReducer,
});


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['itinerary'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

// Since we use typescript, lets utilize `useDispatch`
export const useDispatch = () => useDispatchBase<AppDispatch>();

// And utilize `useSelector`
export const useSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected
): TSelected => useSelectorBase<RootState, TSelected>(selector);
