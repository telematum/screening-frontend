import React from "react";

function Appointment({ appointment }) {
  return (
    <tr key={appointment.mobile_number} className="hover:bg-gray-50">
      <td className="flex gap-3 px-6 py-4 font-normal">
        <div className="w-10 h-10">
          <img
            src={`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
            alt="..."
            className="h-full w-full rounded-full object-cover object-center"
          ></img>
        </div>
        <div className="text-sm">
          <div className=" font-medium text-gray-700">
            {appointment.patient_name}
          </div>
          <div className=" text-gray-400">+{appointment.mobile_number}</div>
        </div>
      </td>
      <td>
        <div className=" flex gap-2">
          <svg
            width="20px"
            height="20px"
            viewBox="-5.4 0 98.4 98.4"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g
                id="Group_4"
                data-name="Group 4"
                transform="translate(-822.7 -241.5)"
              >
                {" "}
                <path
                  id="Path_52"
                  data-name="Path 52"
                  d="M899.4,254.3H833.6a8.92,8.92,0,0,0-8.9,8.9V329a8.92,8.92,0,0,0,8.9,8.9h65.8a8.92,8.92,0,0,0,8.9-8.9V263.2A8.92,8.92,0,0,0,899.4,254.3Z"
                  fill="none"
                  stroke="#6b7280"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="4"
                ></path>{" "}
                <line
                  id="Line_25"
                  data-name="Line 25"
                  x2="21.2"
                  transform="translate(842.6 283.7)"
                  fill="none"
                  stroke="#6b7280"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="4"
                ></line>{" "}
                <line
                  id="Line_26"
                  data-name="Line 26"
                  x2="45.9"
                  transform="translate(842.6 302)"
                  fill="none"
                  stroke="#6b7280"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="4"
                ></line>{" "}
                <line
                  id="Line_27"
                  data-name="Line 27"
                  y2="19.6"
                  transform="translate(853.6 243.5)"
                  fill="none"
                  stroke="#6b7280"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="4"
                ></line>{" "}
                <line
                  id="Line_28"
                  data-name="Line 28"
                  y2="19.6"
                  transform="translate(879.4 243.5)"
                  fill="none"
                  stroke="#6b7280"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="4"
                ></line>{" "}
              </g>{" "}
            </g>
          </svg>
          <span>{appointment.appointment_date}</span>
        </div>
      </td>
      <td>
        <div className="flex gap-2">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M12 7V12L13.5 14.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="#6b7280"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
          <span>{appointment.appointment_time}</span>
        </div>
      </td>
      <td>
        <div className="flex gap-2">
          <svg
            height="20px"
            width="20px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            fill="#ffffff"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                style={{ fill: "#6b7280" }}
                d="M256,512C114.837,512,0,397.157,0,256S114.837,0,256,0s256,114.843,256,256S397.163,512,256,512z"
              />
              <path
                style={{ fill: "#6b7280" }}
                d="M512,256C512,114.843,397.163,0,256,0v512C397.163,512,512,397.157,512,256z"
              />
              <path
                style={{ fill: "#28c858" }}
                d="M256,478.609c-122.75,0-222.609-99.864-222.609-222.609S133.25,33.391,256,33.391 S478.609,133.256,478.609,256S378.75,478.609,256,478.609z"
              />
              <path
                style={{ fill: "#28c858" }}
                d="M478.609,256c0-122.744-99.859-222.609-222.609-222.609v445.217 C378.75,478.609,478.609,378.744,478.609,256z"
              />
              <path
                style={{ fill: "#FFFFFF" }}
                d="M326.739,378.831L256,341.646l-70.739,37.185c-5.62,2.951-12.435,2.473-17.587-1.272 c-5.141-3.733-7.718-10.065-6.642-16.332l13.521-78.761l-57.238-55.781c-4.555-4.434-6.185-11.07-4.228-17.114 c1.968-6.044,7.196-10.451,13.478-11.364l79.097-11.494l35.369-71.663c2.806-5.701,8.611-9.309,14.969-9.309 s12.163,3.608,14.967,9.309l35.369,71.663l79.097,11.494c6.283,0.913,11.511,5.32,13.478,11.364 c1.957,6.044,0.326,12.68-4.228,17.114l-57.239,55.782l13.521,78.761c1.076,6.266-1.5,12.597-6.642,16.332 C339.278,381.224,332.481,381.843,326.739,378.831z"
              />
              <path
                style={{ fill: "#ffffff" }}
                d="M326.739,378.831c5.742,3.011,12.538,2.392,17.587-1.272c5.141-3.733,7.718-10.065,6.642-16.332 l-13.521-78.761l57.239-55.782c4.555-4.434,6.185-11.07,4.228-17.114c-1.968-6.044-7.196-10.451-13.478-11.364l-79.097-11.494 l-35.369-71.663c-2.807-5.7-8.612-9.308-14.97-9.308v235.907L326.739,378.831z"
              />
            </g>
          </svg>
          <span>{appointment.doctor}</span>
        </div>
      </td>
      <td>
        <span className="inline-flex items-center gap-1 rounded-md bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
          {appointment.injury}
        </span>
      </td>
      <td>
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="#ced3df"
          class="bi bi-three-dots-vertical"
          stroke="#ced3df"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>{" "}
          </g>
        </svg>
      </td>
    </tr>
  );
}

export default Appointment;
