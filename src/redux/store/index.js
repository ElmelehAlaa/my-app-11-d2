import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import favoritesReducer from "../reducers/favoritesReducer";
import jobsReducer from "../reducers/jobsReducer";
import queryReducer from "../reducers/queryReducer";
const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: "u3-11-d2-s-key",
    }),
  ],
};

const rootReducer = combineReducers({
  jobs: jobsReducer,
  favorites: favoritesReducer,
  query: queryReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
