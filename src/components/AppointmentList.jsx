import { useEffect, useState } from "react";

import { getUserDetails, getUserProfilePictures } from "../api/userDetails";

import CardHeading from "./CardHeading";
import Table from "./Table";

const AppointmentList = () => {
  const [users, setUsers] = useState([]);
  const [profilePictures, setProfilePictures] = useState([]);

  useEffect(() => {
    getUserDetails().then((res) => setUsers(res.appointments));
    getUserProfilePictures().then((res) => setProfilePictures(res.results));
  }, []);

  return (
    <div className="w-2/3 mx-auto my-24 border border-gray-300 rounded-3xl">
      <CardHeading />
      <Table users={users} profilePictures={profilePictures}/>
    </div>
  );
};

export default AppointmentList;
