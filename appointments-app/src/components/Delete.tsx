import { ref, remove } from "firebase/database";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { database } from "../firebase/firebaseConfig";

const Delete: React.FC<{
  getData: () => void;
  appointment_id: string | undefined;
}> = (getData, appointment_id) => {
  const onDeleteFunc = (item_id: string | undefined) => {
    const confirmDelete = window.confirm("Are you sure you want to delete ?");
    if (confirmDelete) {
      remove(ref(database, "appointments/" + item_id)).then(() => {
        getData();
      });
    }
  };
  return (
    <a
      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-red-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
      href="#"
      onClick={() => {
        onDeleteFunc(appointment_id);
      }}
    >
      <MdDeleteOutline size={20} /> DELETE
    </a>
  );
};

export default Delete;
