import React, { useEffect, useState } from 'react';
import { dashboardConstants, headerData } from '../../utils/constants/Dashboard.constant'; import Header from '../../components/Header/Header';
import { fetchUserData } from '../../utils/helpers/Dashboard.functions';
import Table from '../../components/Table/Table';

const Dashboard = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    fetchUserData().then((res) => setUserData(res?.appointments)).catch(err => console.log(err));
  }, []);

  return (
    <main className='mx-5'>
        <Header headingText={dashboardConstants.headerText} />
      {userData && <Table headerData={headerData} bodyData={userData} />}
    </main>
  )
}

export default Dashboard