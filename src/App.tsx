import { SupportChecker } from '@/components/SupportChecker';
import { Provider } from 'react-redux';

import { Main } from './containers/Main';

import { store } from './store/store';

function App() {
  return (
    <SupportChecker>
      <Provider store={store}>
        <Main />
      </Provider>
    </SupportChecker>
  );
}

export default App;
