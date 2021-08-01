import React, { useState } from 'react';

import Card from '../card/card.component';

const UseStateExample = () => {
  const [name, setName] = useState('My Name');
  const [address, setAddress] = useState('My Address');

  return (
    <Card>
      <h1> {name} </h1>
      <h1> {address} </h1>
      <button onClick={() => setName('Anand')}>Set Name to Anand</button>
      <button onClick={() => setAddress('India')}>Set Address</button>
    </Card>
  );
};

export class StateClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'My Name',
      address: 'India'
    };
  }

  render() {
    return (
      <Card>
        <h1> {this.state.name} </h1>
        <button onClick={this.setState({ name: 'Anand' })}>
          Set Name to Anand
        </button>
        <button onClick={this.setState({ address: 'My Address' })}>
          Set Address
        </button>
      </Card>
    );
  }
}

export default UseStateExample;
