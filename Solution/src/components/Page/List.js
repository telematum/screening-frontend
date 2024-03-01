import React, { useEffect, useState } from 'react'
import ListHeader from '../Table/ListHeader'
import ListRow from '../Table/ListRow'

const List = () => {
    const [listData, setListData] = useState();
    useEffect(() => {
        async function getData() {
            let apiCall = await fetch("https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json")
            let response = await apiCall.json();
            setListData(response);
        }
        getData();
    }, [])
    return (
        <table className="table-auto w-full rounded-2xl overflow-hidden text-left">
            <ListHeader />
            <tbody>
                {listData?.appointments.map((appointment, index) => (
                    <ListRow data={appointment} key={appointment.mobile_number} orange={index === 3 || index === 4 ? true : false} />
                ))}
            </tbody>
        </table>
    )
}

export default List