import Phonebook from 'components/Phonebook/Phonebook';
import { Provider } from 'react-redux';
import store from 'redux/store';

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
        <Phonebook />
      </Provider>
    </div>
  );
};
