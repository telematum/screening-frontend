import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const appointments = [
    {
      "patient_name": "John Doe",
      "mobile_number": "123-456-7890",
      "appointment_date": "2024-02-26",
      "appointment_time": "10:00 AM",
      "doctor": "Dr. Smith",
      "injury": "Sprained ankle"
    },
    {
      "patient_name": "Jane Smith",
      "mobile_number": "987-654-3210",
      "appointment_date": "2024-02-26",
      "appointment_time": "11:30 AM",
      "doctor": "Dr. Johnson",
      "injury": "Back pain"
    },
    {
      "patient_name": "Michael Johnson",
      "mobile_number": "456-789-0123",
      "appointment_date": "2024-02-26",
      "appointment_time": "1:00 PM",
      "doctor": "Dr. Lee",
      "injury": "Headache"
    },
    {
      "patient_name": "Emily Davis",
      "mobile_number": "789-012-3456",
      "appointment_date": "2024-02-26",
      "appointment_time": "2:30 PM",
      "doctor": "Dr. Patel",
      "injury": "Sore throat"
    },
    {
      "patient_name": "David Wilson",
      "mobile_number": "321-654-9870",
      "appointment_date": "2024-02-26",
      "appointment_time": "4:00 PM",
      "doctor": "Dr. Garcia",
      "injury": "Fever"
    },
    {
      "patient_name": "Sarah Brown",
      "mobile_number": "654-321-0987",
      "appointment_date": "2024-02-26",
      "appointment_time": "5:30 PM",
      "doctor": "Dr. Kim",
      "injury": "Cough"
    }
  ]

  function formatApiDate(apiDateString) {
    try {
      if (!apiDateString) {
        throw new Error('Date string is undefined or null');
      }

      const apiDate = new Date(apiDateString);

      const options = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      };

      return new Intl.DateTimeFormat('en-IN', options).format(apiDate);
    } catch (error) {
      console.error(error.message);
      return 'Invalid date';
    }
  }
  return (
    <div>
      <div className="border border-[#fafbfd] mx-4 my-4 rounded-3xl px-8 py-4">
        <p className="text-[#9494b0] font-semibold">
          Today's Appointment List
        </p>
        <div class="relative overflow-x-auto rounded-3xl mt-[16px]">
          <table className="w-full">
            <thead>
              <tr className="bg-[#fafafb] p-9">
                <th className="uppercase text-[10px] text-[#9494b0] p-4 text-left">
                  Patients
                </th>
                <th className="uppercase text-[10px] text-[#9494b0] p-4 text-left">
                  Date
                </th>
                <th className="uppercase text-[10px] text-[#9494b0] p-4 text-left">
                  Time
                </th>
                <th className="uppercase text-[10px] text-[#9494b0] p-4 text-left">
                  Doctor
                </th>
                <th className="uppercase text-[10px] text-[#9494b0] p-4 text-left">
                  injury
                </th>
                <th className="uppercase text-[10px] text-[#9494b0] p-4 text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {appointments?.map((item, index) => (
                <tr className={`bg-white ${appointments?.length -1 !== index ? "border-b" : ""}`}>
                  <td className="uppercase text-[10px] text-[#9494b0] p-4 text-left ">
                    <div className="flex items-center gap-2">
                      <img className="w-[30px] h-[30px] rounded-full object-cover" src="https://source.unsplash.com/random/?People" alt="" />
                      <div>
                        <p className="text-[#6d6d72] text-[10px] font-bold">
                          {item?.patient_name}
                        </p>
                        <p>
                          {`+${item?.mobile_number}`}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="uppercase text-[10px] text-[#9494b0] p-4 text-center ">
                    <div className="flex items-center gap-2">
                      <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 7H17M1 7V15.8002C1 16.9203 1 17.4801 1.21799 17.9079C1.40973 18.2842 1.71547 18.5905 2.0918 18.7822C2.5192 19 3.07899 19 4.19691 19H13.8031C14.921 19 15.48 19 15.9074 18.7822C16.2837 18.5905 16.5905 18.2842 16.7822 17.9079C17 17.4805 17 16.9215 17 15.8036V7M1 7V6.2002C1 5.08009 1 4.51962 1.21799 4.0918C1.40973 3.71547 1.71547 3.40973 2.0918 3.21799C2.51962 3 3.08009 3 4.2002 3H5M17 7V6.19691C17 5.07899 17 4.5192 16.7822 4.0918C16.5905 3.71547 16.2837 3.40973 15.9074 3.21799C15.4796 3 14.9203 3 13.8002 3H13M5 3H13M5 3V1M13 3V1M8.75 15C8.88807 15 9 14.8881 9 14.75V11.25C9 11.1119 8.88807 11 8.75 11H5.25C5.11193 11 5 11.1119 5 11.25V14.75C5 14.8881 5.11193 15 5.25 15H8.75Z" stroke="#9494b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div>
                        <p className="text-[#6d6d72] text-[14px] font-medium">
                          {formatApiDate(item?.appointment_date)?.slice(0, 11)}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="uppercase text-[10px] text-[#9494b0] p-4 text-left ">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 5V10H15M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19Z" stroke="#9494b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div>
                        <p className="text-[#6d6d72] text-[14px] font-medium">
                          {item?.appointment_time?.slice(0, 5)}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="uppercase text-[10px] text-[#9494b0] p-4 text-left ">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 7.99981L8.99995 11.9998L6.99995 9.99981M11.246 1.45879L12.467 2.49929C12.7746 2.76143 13.1566 2.91991 13.5594 2.95206L15.1585 3.0795C16.0986 3.15452 16.8453 3.9008 16.9204 4.84093L17.0475 6.44024C17.0797 6.8431 17.2387 7.22559 17.5008 7.53319L18.5409 8.75382C19.1526 9.47164 19.1527 10.5275 18.541 11.2454L17.5009 12.4662C17.2388 12.7738 17.08 13.1564 17.0478 13.5593L16.9199 15.1583C16.8449 16.0984 16.0993 16.8452 15.1591 16.9202L13.5595 17.0478C13.1567 17.08 12.7744 17.2381 12.4667 17.5002L11.246 18.5407C10.5282 19.1525 9.47168 19.1526 8.75386 18.5409L7.53316 17.5003C7.22555 17.2382 6.84325 17.0798 6.44038 17.0477L4.84077 16.9202C3.90064 16.8452 3.15505 16.0986 3.08003 15.1585L2.9521 13.5594C2.91995 13.1565 2.76111 12.7742 2.49898 12.4666L1.45894 11.2454C0.847212 10.5276 0.846926 9.47203 1.45865 8.7542L2.49963 7.53301C2.76176 7.22541 2.91908 6.84311 2.95122 6.44024L3.07915 4.84112C3.15417 3.90099 3.90192 3.15442 4.84205 3.0794L6.43989 2.95196C6.84276 2.91981 7.22525 2.76146 7.53285 2.49932L8.75396 1.45879C9.47178 0.847069 10.5282 0.847069 11.246 1.45879Z" stroke="#9494b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>

                      <div>
                        <p className="text-[#6d6d72] text-[14px] font-medium">
                          {item?.doctor}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="uppercase text-[10px] text-[#9494b0] p-4 text-left ">
                    <div className="flex justify-center w-max px-2 py-1 items-center gap-2 text-[#6d6d72] text-[8px] font-bold bg-slate-200 rounded-md">
                      {item?.injury}
                    </div>
                  </td>

                  <td className="uppercase text-[10px] text-[#9494b0] p-4 text-left ">
                    <div className="flex justify-center w-max px-2 py-1 items-center gap-2 text-[#6d6d72] text-[8px] font-bold rounded-md">
                      <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 14C1 14.5523 1.44772 15 2 15C2.55228 15 3 14.5523 3 14C3 13.4477 2.55228 13 2 13C1.44772 13 1 13.4477 1 14Z" stroke="#9494b0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1 8C1 8.55228 1.44772 9 2 9C2.55228 9 3 8.55228 3 8C3 7.44772 2.55228 7 2 7C1.44772 7 1 7.44772 1 8Z" stroke="#9494b0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1 2C1 2.55228 1.44772 3 2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2Z" stroke="#9494b0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                    </div>
                  </td>
                </tr>))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
