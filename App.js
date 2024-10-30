import React from 'react';
import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';
import store from './store';
import TodoApp from './components/TodoApp';

export default function App() {
  return (
    <Provider store={store}>
      <RecoilRoot>
        <TodoApp />
      </RecoilRoot>
    </Provider>
  );
}
