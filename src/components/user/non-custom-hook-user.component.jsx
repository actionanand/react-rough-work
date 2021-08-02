import React, { useState, useEffect } from 'react';

import Card from '../card/card.component';


const NonCustomHookUser = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async() => {
      const resp = await fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
      const user = await resp.json();
      setUser(user[0]);
    }

    fetchUser();
  },[userId]);

  return (
    <Card>
      <h2 className="react-feature-header">Non-Custom Hooks - User</h2>
      {user ? (
        <div>
          <h3>{user.username}</h3>
          <p>{user.name}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </Card>
  );
};

export default NonCustomHookUser;
