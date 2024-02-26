import React, { useEffect, useState } from "react";
import Icons from "../Icons";
import InjuryTag from "./InjuryTag";

const AppointmentTable = () => {
    const [appointments, setAppointments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchAppointments = () => {
        fetch(
            "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
        )
            .then((res) => res.json())
            .then((res) => {
                setAppointments(res.appointments);
                setIsLoading(false);
            })
            .catch((err) => console.log({ err }));
    };

    useEffect(() => {
        fetchAppointments();
    }, []);

    if (isLoading)
        return (
            <div className="h-full w-full grid place-items-center text-lg">
                <p>Getting appointments ready.....</p>
            </div>
        );

    return (
        <div className="overflow-auto">
            <table className="rounded-2xl overflow-hidden w-full">
                <tr className="text-left p-3 bg-gray-100 border-b">
                    <THead>Patients</THead>
                    <THead>Date</THead>
                    <THead>Time</THead>
                    <THead>Doctor</THead>
                    <THead>Injury</THead>
                    <THead classNames="text-center">Action</THead>
                </tr>

                <tbody>
                    {appointments.map((apt, index) => (
                        <TRow
                            patientName={apt.patient_name}
                            patientPhone={apt.mobile_number}
                            appointmentDate={new Date(
                                apt.appointment_date
                            ).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                            })}
                            appointmentTime={apt.appointment_time}
                            doctorName={apt.doctor}
                            patientInjury={apt.injury}
                            countryCode="+1"
                            key={index + apt.mobile_number}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const THead = ({ children, classNames }) => (
    <th className={`p-4 text-xs uppercase text-gray-400 font-semibold ${classNames}`}>
        {children}
    </th>
);

const Avatar = () => (
    <img
        src={`https://xsgames.co/randomusers/assets/avatars/male/${Math.floor(Math.random() * (60 - 10 + 1)) + 10
            }.jpg`}
        alt="avatar"
        className="w-10 h-10 bg-gray-400 rounded-full"
    />
);

const TRow = ({
    patientName,
    patientPhone,
    appointmentDate,
    appointmentTime,
    doctorName,
    patientInjury,
    countryCode,
}) => (
    <tr className="border-b last:border-none">
        <td className="p-3 min-w-56">
            <div className="flex gap-3 items-center">
                <Avatar />

                <div>
                    <p className="font-semibold">{patientName}</p>
                    <p className="text-xs">
                        {countryCode} {patientPhone}
                    </p>
                </div>
            </div>
        </td>
        <td className="p-3">
            <div className="flex items-center gap-1.5">
                <Icons.Calendar /> {appointmentDate}
            </div>
        </td>

        <td className="p-3">
            <div className="flex items-center gap-1.5">
                <Icons.Clock /> {appointmentTime}
            </div>
        </td>

        <td className="p-3">
            <div className="flex items-center gap-1.5">
                <Icons.GreenStar /> {doctorName}
            </div>
        </td>

        <td className="p-3">
            <InjuryTag title={patientInjury} />
        </td>

        <td className="p-3">
            <button className="flex justify-center w-full">
                <Icons.Actions className="text-gray-400" />
            </button>
        </td>
    </tr>
);

export default AppointmentTable;
