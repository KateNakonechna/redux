import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import PostsContainer from './components/posts/PostsContainer'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <hr />
      <PostsContainer></PostsContainer>
    </div>
  </Provider>
  );
}

export default App;
