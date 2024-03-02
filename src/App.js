import React, { useState, useEffect } from "react";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        if (result.appointments && result.appointments.length > 0) {
          setAppointments(result.appointments);
        } else {
          setAppointments([]);
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="p-4">
      {error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <div>
          {appointments.length > 0 ? (
            <div>
              <h2 className="text-2xl font-semibold py-4 text-gray-400">
                Today's Appointment List
              </h2>
              <table className="min-w-full bg-white">
                <thead className="bg-gray-100 h-16">
                  <tr>
                    <th className="py-2 px-4 uppercase text-gray-400 text-sm text-left">Patients</th>
                    <th className="py-2 px-4 uppercase text-gray-400 text-sm text-left">Date</th>
                    <th className="py-2 px-4 uppercase text-gray-400 text-sm text-left">Time</th>
                    <th className="py-2 px-4 uppercase text-gray-400 text-sm text-left">Doctor</th>
                    <th className="py-2 px-4 uppercase text-gray-400 text-sm text-left">Injury</th>
                    <th className="py-2 px-4 uppercase text-gray-400 text-sm text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment) => (
                    <tr key={appointment.id} className="border-b">
                      <td className="px-4 py-2 flex flex-col">
                        <div className="flex">
                          <img src="https://picsum.photos/200" className="rounded-full w-12 mr-3" />
                          <div className="flex-col">
                            <p className="font-semibold">{appointment.patient_name}</p>
                            <p className="text-gray-400">+{appointment.mobile_number.split('-').join(' ')}</p>
                          </div>
                        </div>
                      </td>

                      <td className="py-2 px-4">
                        <span className="flex items-center">
                          <svg class="w-4 h-4 mr-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path fill="currentColor" d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z"></path>
                          </svg>
                          <span className="text-gray-500">
                            {new Date(appointment.appointment_date).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}
                          </span>
                        </span>
                      </td>
                      <td className="py-2 px-4">
                        <span className="flex items-center">
                          <svg class="w-5 h-5 mr-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12,6a.99974.99974,0,0,0-1,1v4.38379L8.56934,12.60693a.99968.99968,0,1,0,.89843,1.78614l2.98145-1.5A.99874.99874,0,0,0,13,12V7A.99974.99974,0,0,0,12,6Zm0-4A10,10,0,1,0,22,12,10.01146,10.01146,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"></path>
                          </svg>
                          <span className="text-gray-500">
                            {appointment.appointment_time.substring(0, appointment.appointment_time.length - 3)}
                          </span>
                        </span>
                      </td>
                      <td className="py-2 px-4">
                        <span className="flex items-center">
                          <svg class="w-5 h-5 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                            <path fill="#ffab40" d="M32,6A26,26,0,1,0,58,32,26,26,0,0,0,32,6ZM43.12,48.56,32,42.9,20.88,48.56l2.12-12-9-8.49,12.44-1.75L32,15.44l5.56,10.9L50,28.09l-9,8.49Z" data-name="Layer 2"></path>
                          </svg>
                          <span className="text-gray-500">
                            {appointment.doctor}
                          </span>
                        </span>
                      </td>
                      <td className="py-2 px-4">
                        <span class="bg-blue-100 text-gray-700 text-sm font-medium me-2 px-2.5 py-0.5 rounded">
                          {appointment.injury}
                        </span>
                      </td>
                      <td className="py-2 px-4">
                        <svg class="cursor-pointer w-5 h-5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path fill="currentColor" d="M10.802 10A.802.802 0 1 1 10 9.198a.802.802 0 0 1 .802.802ZM10 6.989a.802.802 0 1 0-.802-.802.802.802 0 0 0 .802.802Zm0 6.022a.802.802 0 1 0 .802.802.802.802 0 0 0-.802-.802Z" data-name="Three Dots"></path>
                        </svg>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No appointments available for today.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AppointmentList;
