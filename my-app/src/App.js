import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header';
import { Users } from './components/Users';
import DisplayBoard from './components/DisplayBoard';
import CreateUser from './components/CreateUser';
import { getAllUsers, createUser } from './services/UserService';
import './app.scss';

const App = () => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [numberOfUsers, setNumberOfUsers] = useState(0);

  const userCreate = (e) => {
    createUser(user).then((response) => {
      console.log(response);
      setNumberOfUsers(numberOfUsers + 1);
    });
  };

  const fetchAllUsers = () => {
    getAllUsers().then((users) => {
      console.log(users);
      setUsers(users);
      setNumberOfUsers(users.length);
    });
  };

  useEffect(() => {
    getAllUsers().then((users) => {
      console.log(users);
      setUsers(users);
      setNumberOfUsers(users.length);
    });
  }, []);

  const onChangeForm = (e) => {
    if (e.target.name === 'firstname') {
      user.firstName = e.target.value;
    } else if (e.target.name === 'lastname') {
      user.lastName = e.target.value;
    } else if (e.target.name === 'email') {
      user.email = e.target.value;
    }
    setUser(user);
  };

  return (
    <div className='app'>
      <Header />
      <div className='main-container'>
        <div className='row mb-5'>
          <div className='col-md-8'>
            <CreateUser
              user={user}
              onChangeForm={onChangeForm}
              createUser={userCreate}
              getAllUsers={getAllUsers}
            />
          </div>
          <div className='col-md-4'>
            <DisplayBoard
              numberOfUsers={numberOfUsers}
              getAllUsers={fetchAllUsers}
            />
          </div>
        </div>
        <div className='row'>
          <Users users={users} />
        </div>
      </div>
    </div>
  );
};

export default App;
