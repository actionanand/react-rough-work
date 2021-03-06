import React from 'react';

import './App.css';

import SagasExample from './components/sagas-example/sagas-example.component';
import UseStateExample from './components/use-state-example/use-state-example.component';
import UseEffectExample from './components/use-effect-example/use-effect-example.component';
import User from './components/user/user.component';
import Post from './components/post/post.component';
import NonCustomHookUser from './components/user/non-custom-hook-user.component';
import UseReducerExample from './components/use-reducer-example/use-reducer.component';

const App = props => {
  return (
    <div className='App'>
      <SagasExample />
      <UseStateExample />
      <UseEffectExample />
      <NonCustomHookUser userId={5} />
      <User userId={5} />
      <Post postId={15} />
      <UseReducerExample />
    </div>
  );
};

export default App;
