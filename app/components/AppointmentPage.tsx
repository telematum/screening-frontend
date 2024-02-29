import { AppointmentType } from "@/utils/dataType";
import getData from "@/utils/getData";
import TableBody from "./TableBody";

const AppointmentPage = async () => {
  const { appointments } = await getData();

  return (
    <div className="m-2 mt-12  md:m-5 md:mt-12 lg:m-10  md:p-5 pb-10 border rounded-3xl md:rounded-[3rem]">
      <h1 className="py-3 pb-4 md:py-6 px-5 text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-400">
        Todays Appointment list
      </h1>

      <div className="overflow-x-auto">
        <div className="p-1.5 px-5 min-w-full inline-block align-middle">
          <div className="border rounded-3xl md:rounded-[2rem] shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 table-auto">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="th-mobile md:th">
                    Name
                  </th>
                  <th scope="col" className="th-mobile md:th">
                    Date
                  </th>
                  <th scope="col" className="th-mobile md:th">
                    Time
                  </th>
                  <th scope="col" className="th-mobile md:th">
                    Doctor
                  </th>
                  <th scope="col" className="th-mobile md:th">
                    Injury
                  </th>
                  <th scope="col" className="th-mobile md:th text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {appointments.map((i: AppointmentType, index: number) => (
                  <TableBody data={i} index={index} key={index} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
