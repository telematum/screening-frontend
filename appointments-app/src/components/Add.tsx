import React, { useState } from "react";
import { IoIosCloseCircleOutline, IoMdAddCircle } from "react-icons/io";
import { appointmentType } from "../interface";
import { push, ref, set } from "firebase/database";
import { database } from "../firebase/firebaseConfig";

const Add: React.FC<{ onAddHandler: () => void }> = ({ onAddHandler }) => {
  const [appointment, setAppointment] = useState<appointmentType>({
    appointment_date: "",
    appointment_time: "",
    doctor: "",
    injury: "",
    mobile_number: "",
    patient_name: "",
  });

  const AddFunc = (appointment: appointmentType) => {
    set(push(ref(database, "appointments/")), {
      appointment_date: appointment.appointment_date,
      appointment_time: appointment.appointment_time,
      doctor: appointment.doctor,
      injury: appointment.injury,
      mobile_number: appointment.mobile_number,
      patient_name: appointment.patient_name,
    }).then(() => {
      onAddHandler();
      window.HSOverlay.close("#hs-add-alert");
    });
  };

  return (
    <>
      <button
        type="button"
        className="p-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        data-hs-overlay="#hs-add-alert"
      >
        <IoMdAddCircle size={20} /> ADD
      </button>

      <div
        id="hs-add-alert"
        className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-gray-800">
            <div className="absolute top-2 end-2">
              <button
                type="button"
                className="flex justify-center items-center size-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-transparent dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#hs-add-alert"
              >
                <span className="sr-only">Close</span>
                <IoIosCloseCircleOutline
                  size={50}
                  className="text-gray-500 font-medium"
                />
              </button>
            </div>

            <div className="p-4 sm:p-10 text-center overflow-y-auto">
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
                          Kindly mention phone number along with its code eg.
                          +91 xxxx xxx
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
                          Kindly mention the name of the purpose eg.Injury,
                          headache, etc.
                        </span>
                      </div>
                    </div>
                    {/* <!-- End Section --> */}
                  </form>

                  <div className="mt-5 flex justify-end gap-x-2">
                    <button
                      onClick={() => {
                        AddFunc(appointment);
                      }}
                      type="button"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Add Patient
                    </button>
                  </div>
                </div>
                {/* <!-- End Card --> */}
              </div>
              {/* <!-- End Card Section --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
