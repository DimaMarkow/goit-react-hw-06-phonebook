import Phonebook from 'components/Phonebook/Phonebook';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Phonebook />
        </PersistGate>
      </Provider>
    </div>
  );
};
