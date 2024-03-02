import { CiCalendarDate } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { GiAlliedStar } from "react-icons/gi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { ImBrightnessContrast } from "react-icons/im";
import dateFormat from "dateformat";

const List = (props) => {
  const { isDark } = props
  return (
    <div className={`items-center mt-8 border-2 rounded-lg ${isDark ? "bg-black" : "null"}`}>
      <div className="flex justify-around content-center items-center mt-6">
        <h1 className={`xs:ml-40 m-8 sm:ml-48 text-2xl font-bold ${isDark ? "text-white" : "text-gray-700"}`}> Today's Appointment List </h1>
        <button onClick={props.changeTheme}><ImBrightnessContrast color={isDark ? "white" : "black"} size={25} /> </button>
      </div>
      <div className="lg:m-8 sm:ml-56 sm:mr-16 md:ml-16 xs:ml-44 xs:mr-4"> 
        <table>
          <thead>
            <tr className={`border-3 rounded ${isDark ? "bg-zinc-200" : "bg-slate-50"} }`}>
              <th className={`sm:px-2 sm:py-2 lg:px-6 lg:py-6 ${isDark ? "text-black" : "text-gray-500"}`}>PATIENTS</th>
              <th className={`sm:px-2 sm:py-2 lg:px-6 lg:py-6 ${isDark ? "text-black" : "text-gray-500"}`}>DATE</th>
              <th className={`sm:px-2 sm:py-2 lg:px-6 lg:py-6 ${isDark ? "text-black" : "text-gray-500"}`}>TIME</th>
              <th className={`sm:px-2 sm:py-2 lg:px-6 lg:py-6 ${isDark ? "text-black" : "text-gray-500"}`}>DOCTOR</th>
              <th className={`sm:px-2 sm:py-2 lg:px-6 lg:py-6 ${isDark ? "text-black" : "text-gray-500"}`}>INJURY</th>
              <th className={`sm:px-2 sm:py-2 lg:px-6 lg:py-6 ${isDark ? "text-black" : "text-gray-500"}`}>ACTION </th>
            </tr>
          </thead>
          <tbody className="divide-y-2">
            {props.items.map((eachItem) => {
              const index = props.items.indexOf(eachItem)
              const listDate = eachItem.appointmentDate
              const reqDate = dateFormat(listDate,"dd mmm yyyy" )
              return (
                <tr className="items-start content-start" key={eachItem.id}>
                  <td className={`sm:px-1 sm:py-1 lg:px-10 lg:py-6 flex items-center gap-2 ${isDark ? "text-white" : "text-slate-700"}`} key={eachItem.id}>
                    <CgProfile size={35} />
                    <div className="flex flex-col">
                      <span className=" font-medium sm:text-sm lg:text-lg">  {eachItem.patientName} </span>
                      +{eachItem.mobileNumber}
                    </div>
                  </td>
                  <td className={`sm:px-2 sm:py-2 lg:px-10 lg:py-6 ${isDark ? "text-white" : "text-slate-500"}`}> <div className="flex items-center gap-2">  <CiCalendarDate size={23} /> {reqDate}
                  </div>  </td>
                  <td className={`sm:px-2 sm:py-2 lg:px-10 lg:py-6 ${isDark ? "text-white" : "text-slate-500"}`}> <div className="flex items-center gap-2"> <GoClock size={23} /> {eachItem.appointmentTime}
                  </div> </td>
                  <td className={`sm:px-2 sm:py-2 lg:px-10 lg:py-6 ${isDark ? "text-white" : "text-slate-500"}`}> <div className="flex items-center gap-2"> {index === 3 || index === 4 ? (<GiAlliedStar size={23} color={"orange"} />) : (<GiAlliedStar size={22} color={"green"} />)} {eachItem.doctor}
                  </div>  </td>
                  <td className={`sm:px-2 sm:py-2 lg:px-10 lg:py-6 ${isDark ? "text-white" : "text-slate-500"}`}> <span className="bg-slate-200 rounded-md lg:px-2 lg:py-2 sm:py-1 sm:px-2 text-blue-950"> {eachItem.injury}</span> </td>
                  <td className={`sm:px-2 sm:py-2 lg:px-10 lg:py-6 ${isDark ? "text-white" : "text-slate-500"}`}> <span> <BsThreeDotsVertical size={23} /></span> </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default List