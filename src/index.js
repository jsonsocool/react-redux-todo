import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import appReducer from './reducers/index';
import { Provider } from 'react-redux';
import { counter } from './actions/counter';

let store = createStore(appReducer);

// store.subscribe(() =>
//     console.log(store.getState().count)
// );

store.dispatch(counter.increase()) // {count: 1}
store.dispatch(counter.increase()) // {count: 2}
store.dispatch(counter.decrease()) // {count: 1}

ReactDOM.render(
    <Provider store={store}>
        <App greeting="Welcome to React" />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
