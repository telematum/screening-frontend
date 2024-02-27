import { useState } from 'react';
import { createPortal } from 'react-dom';

import CalendarIcon from '../assets/icons/CalendarIcon';
import ClockIcon from '../assets/icons/ClockIcon';
import MoreIcon from '../assets/icons/MoreIcon';
import StarIcon from '../assets/icons/StarIcon';
import useOutsideClick from '../hooks/useOutsideClick';

export const COLORS = [
  "rgb(251 113 133)",
  "rgb(253 224 71)",
  "rgb(192 132 252)",
  "rgb(110 231 183)",
  "rgb(129 140 248)",
  "rgb(251 146 60)",
];

export const getColumns = ({
  dataLength,
  isAnyMoreActionOpen,
  setIsAnyMoreActionOpen,
  handleDelete,
}) => {
  return [
    {
      accessor: "patients",
      header: () => {
        return <div className="min-w-56">Patients</div>;
      },
      renderCell: ({ row, id }) => {
        const { patient_name, mobile_number } = row;

        return (
          <div className="p-2 flex gap-2">
            <div
              className="h-8 w-8 rounded-full"
              style={{ backgroundColor: COLORS[id] }}
            ></div>
            <div className="flex flex-col">
              <h3 className="text-slate-900 text-sm">{patient_name}</h3>
              <span className="text-[10px]">{mobile_number}</span>
            </div>
          </div>
        );
      },
    },
    {
      accessor: "date",
      header: () => {
        return <div className="min-w-40">Date</div>;
      },
      renderCell: ({ row }) => {
        const { appointment_date } = row;
        return (
          <div className="p-2 flex gap-1 items-center">
            <CalendarIcon width={18} height={18} />
            <div className="text-sm"> {appointment_date}</div>
          </div>
        );
      },
    },
    {
      accessor: "time",
      header: () => {
        return <div className="min-w-40">Time</div>;
      },
      renderCell: ({ row }) => {
        const { appointment_time } = row;
        return (
          <div className="p-2 flex gap-1 items-center text-sm">
            <ClockIcon width={18} height={18} />
            <div>{appointment_time}</div>
          </div>
        );
      },
    },
    {
      accessor: "doctor",
      header: () => {
        return <div className="min-w-40">Doctor</div>;
      },
      renderCell: ({ row }) => {
        const { doctor, color } = row;
        return (
          <div className="p-2 flex gap-1 items-center text-sm">
            <StarIcon
              className="outline outline-slate-100 rounded-full"
              style={{ color }}
              width={18}
              height={18}
            />
            {doctor}
          </div>
        );
      },
    },
    {
      accessor: "injury",
      header: () => {
        return <div className="min-w-32">Injury</div>;
      },
      renderCell: ({ row }) => {
        const { injury } = row;
        return (
          <div className="p-2">
            <div className="font-medium text-[#555c84] bg-[#e3ecf7] max-w-max text-xs px-2 py-[5px] rounded-lg">
              {injury}
            </div>
          </div>
        );
      },
    },
    {
      accessor: "action",
      header: () => {
        return <div className="min-w-20 text-center">Action</div>;
      },
      renderCell: ({ row: { mobile_number }, id }) => {
        const [isMoreAction, setIsMoreAction] = useState(false);
        const [isAlertOverlayOpen, setIsAlertOverlayOpen] = useState(false);
        const ref = useOutsideClick(() => {
          setIsAnyMoreActionOpen(false);
          setIsMoreAction(false);
        });
        return (
          <div className="text-center flex justify-center relative">
            {isAlertOverlayOpen &&
              createPortal(
                <div
                  onClick={() => setIsAlertOverlayOpen(false)}
                  style={{ backgroundColor: "rgba(0,0,0,0.04)" }}
                  className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center"
                >
                  <div
                    onClick={(event) => event.stopPropagation()}
                    className="bg-white p-5 rounded-xl max-w-96	"
                  >
                    <h3 className="font-semibold tracking-wide mb-1">
                      Are you absolutely sure?
                    </h3>
                    <p className="text-slate-500 text-sm font-light mb-3">
                      This action cannot be undone. This will permanently delete
                      patient from the table.
                    </p>

                    <div className="flex justify-end">
                      <button
                        onClick={() => setIsAlertOverlayOpen(false)}
                        className="hover:bg-slate-50 duration-300 bg-white text-black border px-3 py-1.5 rounded-md text-sm mr-2"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          setIsAnyMoreActionOpen(false);
                          handleDelete(mobile_number);
                        }}
                        className="hover:bg-red-400 duration-300 bg-red-500 text-white px-3 py-1.5 rounded-md text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>,
                document.body
              )}

            <button
              onClick={(event) => {
                if (isAnyMoreActionOpen) return;
                event.stopPropagation();
                setIsMoreAction(!isMoreAction);
                setIsAnyMoreActionOpen(true);
              }}
              className={`${
                !isAnyMoreActionOpen ? "hover:bg-slate-200 " : ""
              }  p-1 rounded-lg duration-300 text-slate-500 hover:text-slate-600`}
            >
              <MoreIcon width={24} height={24} />
            </button>

            {isMoreAction && (
              <div
                onClick={() => {
                  setIsAlertOverlayOpen(true);
                  setIsMoreAction(false);
                  setIsAnyMoreActionOpen(false);
                }}
                ref={ref}
                className={`absolute ${
                  dataLength === id + 1 ? "bottom-8 right-12" : "-left-8 top-8"
                } rounded-lg text-sm w-24 z-10 shadow-lg cursor-pointer hover:bg-slate-50 bg-white border px-3 py-1.5`}
              >
                Delete
              </div>
            )}
          </div>
        );
      },
    },
  ];
};
