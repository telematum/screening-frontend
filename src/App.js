import { UseAppointments } from "./UseAppointments";
import TableBody from "./TableBody";
function App() {
  const { appointments } = UseAppointments();

  return (
    <div className="App">
      <div className="min-h-screen h-full bg-white flex  items-center justify-center p-10">
        <div className=" app-container">
          {appointments?.length > 0 ? (
            <>
              <div className="p-8 pb-4">
                <h3 className="text-gray-800 text-xl font-bold sm:text-2xl ">
                  Today's Appointment List
                </h3>
              </div>
              <div class="p-8 pt-0 w-full">
                <div>
                  <div className="mt-6 shadow-sm border rounded-lg overflow-x-auto">
                    <table className="w-full text-sm text-left sm:inline-table flex flex-row sm:bg-white  overflow-hidden">
                      <thead className="bg-gray-50 text-gray-600 border-b">
                        <tr
                          className={`flex flex-col sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 ${"sm:flex"}`}
                        >
                          <th className="pt-5 pb-3 px-6 sm:py-3">PATIENTS</th>
                          <th className="py-4 px-6 sm:py-3">DATE</th>
                          <th className="py-4 px-6 sm:py-3">TIME</th>
                          <th className="py-4 px-6 sm:py-3">DOCTOR</th>
                          <th className="py-4 px-6 sm:py-3">INJURY</th>
                          <th className="pb-3.5 pt-3 px-6 sm:py-3">ACTION</th>
                        </tr>
                      </thead>
                      <tbody className="flex-1 sm:flex-none text-gray-600 divide-y">
                        {appointments?.map((item, index) => (
                          <TableBody key={index} item={item} index={index} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>No Appointments Today</>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
