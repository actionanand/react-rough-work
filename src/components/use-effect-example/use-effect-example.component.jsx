import React, { useState, useEffect } from 'react';

import Card from '../card/card.component';

const UseEffectExample = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('Bret');

  useEffect(() => {
    if (searchQuery.length > 0) {
      const fetchFunc = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
        );
        const resJson = await response.json();
        setUser(resJson[0]);
      };

      fetchFunc();
    }
  }, [searchQuery]);

  return (
    <Card>
      <h2 className="react-feature-header">Use Effect Example</h2>
      <input
        type='search'
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
      />
      {user ? (
        <div>
          <h3> Name: {user.name} </h3>
          <h3> Username:  {user.username} </h3>
          <h3> Email: {user.email} </h3>
        </div>
      ) : (
        <p> No user found {searchQuery ? 'by' : ''} {searchQuery} </p>
      )}
    </Card>
  );
};

export default UseEffectExample;
