import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import rootReducer from 'redux/root-reducer';

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);

// import contactsReducer from 'redux/contacts/contacts-slice';
// import filterReducer from 'redux/filter/filter-slice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });

// export default store;
