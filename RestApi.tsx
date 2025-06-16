import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

const RestAPI = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data));
  }, []);

  return (
    <View>
      <Text>RestAPI</Text>
      {users.map(item => (
        <Text style={{fontSize: 20}}>{item.name}</Text>
      ))}
    </View>
  );
};

export default RestAPI;