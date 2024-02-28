import React, { useState, useEffect } from 'react';
import Table from '../components/Table/Table';
import axios from "axios";
import { API_URL } from '../utils/constant';
import { UserListStaticData } from '../utils/staticConstant';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const getUserData = async () => {
    try {
      const { data } = await axios.get(API_URL);
      setUsers(data.appointments);
    } catch (error) {
      console.error(error);
      setUsers([]);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-bold text-gray-400 my-5">{UserListStaticData.AppointmentList__text}</h1>
        {users?.length === 0 ? (
          <h1>{UserListStaticData.NotFound__text}</h1>
        ) : (
          <Table userList={users}></Table>
        )}
    </div>
  );
};

export default UserList;
