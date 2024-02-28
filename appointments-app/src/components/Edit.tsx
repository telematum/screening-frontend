import React, { useEffect, useState } from "react";
import { appointmentType } from "../interface";
import { ref, set } from "firebase/database";
import { database } from "../firebase/firebaseConfig";

const Edit: React.FC<{
  isEditVisible: () => void;
  getData: () => void;
  appointmentData: appointmentType;
}> = ({ isEditVisible, appointmentData, getData }) => {
  const [appointment, setAppointment] = useState<appointmentType>({
    appointment_date: "",
    appointment_time: "",
    doctor: "",
    injury: "",
    mobile_number: "",
    patient_name: "",
  });

  useEffect(() => {
    setAppointment({ ...appointmentData });
  }, []);

  useEffect(() => {
    setAppointment({ ...appointmentData });
  }, [appointmentData]);

  const editSubmitHandler = (appointment_id: string | undefined) => {
    set(ref(database, "appointments/" + appointment_id), {
      appointment_date: appointment.appointment_date,
      appointment_time: appointment.appointment_time,
      doctor: appointment.doctor,
      injury: appointment.injury,
      mobile_number: appointment.mobile_number,
      patient_name: appointment.patient_name,
    }).then(() => {
      isEditVisible();
      getData();
    });
  };

  return (
    <div className=" rounded-xl border-slate-500 shadow-md shadow-slate-400 p-4 my-6">
      <div className="p-2 sm:p-10 text-center overflow-y-auto">
        {/* <!-- Card Section --> */}
        <div className="max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* <!-- Card --> */}
          <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
                Patient Appointment
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Manage your patient appointments
              </p>
            </div>

            <form>
              {/* <!-- Section --> */}
              <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700 dark:first:border-transparent">
                <label
                  htmlFor="af-payment-billing-contact"
                  className="inline-block text-sm font-medium dark:text-white"
                >
                  Patient Details
                </label>

                <div className="mt-2 space-y-3">
                  <input
                    id="af-payment-billing-contact"
                    type="text"
                    value={appointment.patient_name}
                    onChange={(e) =>
                      setAppointment({
                        ...appointment,
                        patient_name: e.target.value,
                      })
                    }
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Patient Name"
                  />
                  <span className="text-xs font-medium text-slate-700">
                    Kindly mention full name of the patient
                  </span>
                  <input
                    type="text"
                    value={appointment.mobile_number}
                    onChange={(e) =>
                      setAppointment({
                        ...appointment,
                        mobile_number: e.target.value,
                      })
                    }
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Mobile Number"
                  />
                  <span className="text-xs font-medium text-slate-700">
                    Kindly mention phone number along with its code eg. +91 xxxx
                    xxx
                  </span>
                </div>
              </div>
              {/* <!-- End Section --> */}

              {/* <!-- Section --> */}
              <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700 dark:first:border-transparent">
                <label
                  htmlFor="af-payment-billing-address"
                  className="inline-block text-sm font-medium dark:text-white"
                >
                  Appointment Details
                </label>

                <div className="mt-2 space-y-3">
                  <div className="grid sm:flex gap-3">
                    <input
                      value={appointment.appointment_date}
                      onChange={(e) =>
                        setAppointment({
                          ...appointment,
                          appointment_date: e.target.value,
                        })
                      }
                      type="date"
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Appointment Date"
                    />

                    <input
                      type="time"
                      value={appointment.appointment_time}
                      onChange={(e) =>
                        setAppointment({
                          ...appointment,
                          appointment_time: e.target.value,
                        })
                      }
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Appointment Time"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- End Section --> */}

              {/* <!-- Section --> */}
              <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700 dark:first:border-transparent">
                <label
                  htmlFor="af-payment-payment-method"
                  className="inline-block text-sm font-medium dark:text-white"
                >
                  Doctor and Purpose details
                </label>

                <div className="mt-2 space-y-3">
                  <input
                    id="af-payment-payment-method"
                    type="text"
                    value={appointment.doctor}
                    onChange={(e) =>
                      setAppointment({
                        ...appointment,
                        doctor: e.target.value,
                      })
                    }
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Doctor Name"
                  />
                  <span className="text-xs font-medium text-slate-700">
                    Kindly mention Dr. on the left before mentioning the
                    doctor's name eg. Dr.Batra
                  </span>
                  <input
                    type="text"
                    value={appointment.injury}
                    onChange={(e) =>
                      setAppointment({
                        ...appointment,
                        injury: e.target.value,
                      })
                    }
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Purpose"
                  />
                  <span className="text-xs font-medium text-slate-700">
                    Kindly mention the name of the purpose eg.Injury, headache,
                    etc.
                  </span>
                </div>
              </div>
              {/* <!-- End Section --> */}
            </form>

            <div className="mt-5 flex justify-end gap-x-2">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                onClick={() => {
                  editSubmitHandler(appointment.appointment_id);
                }}
              >
                Edit
              </button>
            </div>
          </div>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Card Section --> */}
      </div>
    </div>
  );
};

export default Edit;
