import { useEffect } from "react";
import CalendarIcon from "../assets/calendar";
import ClockIcon from "../assets/clock";
import MenuIcon from "../assets/menu";
import StarIcon from "../assets/star";
import axios from "axios";
import Icon from "../component/Icon";
import { useUsers } from "../userContext";
import { formatDate } from "../utils/formatDate";
import { API_URL } from "../constant";

export default function UserList() {
  const { users, setUsers } = useUsers();

  const getUserData = async () => {
    try {
      const { data } = await axios.get(API_URL);

      setUsers(data.appointments);
    } catch (error) {
      console.log(error)
      setUsers([])
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div className="container  rounded-3xl mx-auto p-6 ">
      <div className="w-11/12 border border-slate-200 rounded-3xl mx-auto p-6  ">
        <h3 className="text-xl font-semibold text-slate-500 mb-4">
          Today's Appointment List
        </h3>
        {users.length == 0 ? (
          <h1>not found</h1>
        ) : (
          <div className="overflow-x-auto ">
            <table className="min-w-full rounded-2xl overflow-hidden ">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-6 text-gray-400 text-sm text-left">
                    PATIENTS
                  </th>
                  <th className="px-6 py-6 text-gray-400 text-sm text-left">
                    DATE
                  </th>
                  <th className="px-6 py-6 text-gray-400 text-sm text-left">
                    TIME
                  </th>
                  <th className="px-6 py-6 text-gray-400 text-sm text-left">
                    DOCTOR
                  </th>
                  <th className="px-6 py-6 text-gray-400 text-sm text-left">
                    INJURY
                  </th>
                  <th className="px-6 py-6 text-gray-400 text-sm text-left">
                    ACTON
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {users.map((ele, idx) => {
                  return (
                    <tr
                      key={ele.mobile_number + idx}
                      className={`bg-white ${
                        idx !== users.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <td className="px-6 py-4 flex items-center">
                        <div className="h-12 w-12 bg-orange-100 rounded-full mr-3"></div>
                        <div className="text-left">
                          <p className="font-semibold text-lg">
                            {ele.patient_name}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {ele.mobile_number}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-left">
                        <div className="flex items-center gap-x-1">
                          <Icon icon={<CalendarIcon />} />
                          {formatDate(ele.appointment_date)}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-left">
                        <div className="flex items-center gap-x-1">
                          <Icon icon={<ClockIcon />} />
                          {ele.appointment_time}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-left">
                        {" "}
                        <div className="flex items-center gap-x-1">
                          <Icon icon={<StarIcon />} />
                          {ele.doctor}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-left">
                        <div className="inline-block bg-slate-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-600">
                          {ele.injury}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-left ">
                        <span className="cursor-pointer">
                          <Icon icon={<MenuIcon />} />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
