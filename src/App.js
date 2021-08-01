import React from 'react';

// import UseStateExample from './components/use-state-example/use-state-example.component';
import SagasExample from './components/sagas-example/sagas-example.component';

import './App.css';

const App = props => {

  return (
    <div className='App'>
      <SagasExample />
    </div>
  );
  
  // return <UseStateExample />;
};

export default App;
