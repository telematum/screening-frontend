import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
        );
        setData(data.appointments);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  console.log(
    data,
    data.map((row) => row.patient_name)
  );

  return (
    <div style={{ color: "#64748b" }} className="border-2 m-4 rounded-xl">
      <div className=" p-6">
        <div className="text-2xl font-semibold mb-4">
          Today's Appointment List
        </div>
        {data && data.length > 0 ? (
          <table className="border-collapse table-auto w-full">
            <tr className="bg-gray-100 ">
              <th className="font-normal uppercase py-6 px-2 text-left w-1/6 ">
                Patients
              </th>
              <th className="font-normal uppercase py-6 px-2 text-left w-1/6">
                Date
              </th>
              <th className="font-normal uppercase py-6 px-2 text-left w-1/6">
                Time
              </th>
              <th className="font-normal uppercase py-6 px-2 text-left w-1/6">
                Doctor
              </th>
              <th className="font-normal uppercase py-6 px-2 text-left w-1/6">
                Injury
              </th>
              <th className="font-normal uppercase py-6 px-2 text-center w-1/6 ">
                Action
              </th>
              <th></th>
            </tr>

            <tbody>
              {data.map((row, index) => {
                return (
                  <tr key={index} className=" border-b-2 text-left">
                    <td className="p-2 h-20 w-1/6">
                      <div className="flex gap-2">
                        <div class="__patient__avatar rounded-full bg-[#a5f3fc] min-w-[50px] min-h-[50px] grid place-content-center">
                          <span class="font-bold text-[#000000bc]">P</span>
                        </div>

                        <div className="flex flex-col">
                          <div className="font-bold text-black">
                            {row.patient_name}
                          </div>
                          <div className="text-xs">{row.mobile_number}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 h-20 w-1/6">
                      <div className=" flex justify-start items-center gap-1">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAL7SURBVEiJvZJNiBxFFMd/r7o6K7orKuLXIY45LOxBSUJEEA+iCXvx4NfBgwhRcGYTDwYvZtMrhVvJgCcPJulZRRFECKh48LCHBATRRQwk6CEkoDsYkERwR0kMk5nueh66Z5jdbNaMDD4oivfn/1FVr4SBcu6j26y92gJOJ0ltG0OU9+kpYGuWjd3u3O4/e7gMmsdxt6IaToGciaL8qWEC8jz6CnRKxGzrduNmL0QOHmzcq6qfAE8MY3gDdSLL8hetqh4uzZvlehy4BPr9cH7yCDABfA1UgCette9ZYBfwV5aNTQE3lTP4OUlmdg1jPzCDZ4C2tVcvgE4bYBxoObe7DZ0OsAB8PtzpodQsQKdTeNECxsX7VFX51dqw9T+YXreyzJwWYbMFEGFznpuVUQZI+T9t2XdE5KdRBqjqg8CmXsBvBw5Ud4wywPt0GajYQdC5w/dYK5Us06Zzey8cOrQwGUJ2R5ZFPzpXveJ9ugMgSWonnWvcbG3+kDF2ZXb21XNrtT1PMxhgrX0BzFKxQwjhHTBLcSyTJeV4uSgws1RwrtX2PQcbETmrqsdE5GzZf6OqbdVOq2T0v2+B2WMi8sN62r6n96kCzSSpPTDMG/9brTuD4o1lJ+jxJKmdnJ9PnxWRySwLHzo387v3jdcBkqT6rnNH77LWvKyq5+bmal+s1fY8zepceQy0Xuwgwkug9TiO7isfxhULCkzrBedaba9W3SAEThjDTAh8WwToUVVZFOmcB1BlX/8o0jmvamdEdHk9bZ/3v85gfr7xtIjWVCWdm6t+6X36FvBoFIU9+/fv+cX7xmcASVJ9vl4/siXPzRHguySpvX29oDXflAowLcJiCW0HpkOwtxat7uxxCyxMA+2NbrIqIIryj1WjRZH8Ymm41xjz5vh4exlAlYd73ImJ9pnLl8emQgiXNgoQ79MVYJMx2f2zs6/9sRH5Rsu5xp3WahPoiPfpB8ArwN/AxVEEAHcDtwDv2ziO93W7HQV5DtgyooAW8Gkcx2/8A7AtVYwx42/vAAAAAElFTkSuQmCC"
                          alt="calendarIcon"
                          class="w-[15px] h-[15px]"
                        />

                        <span className="text-md">{row.appointment_date}</span>
                      </div>
                    </td>
                    <td className="p-2 h-20 w-1/6">
                      <div className=" flex justify-start items-center gap-1">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAO4SURBVEiJrZVPbFRVFMZ/5777mvqnKRahGGMEjFgTExaGoEajjaJoSLsg6apq/JPpgFDDUGXamYFXZgZDoiUGoR2rlJAY24aA0dqVVhISozGs1EULLlBskYQ2pol05L13XLRjxnZoK+nZ3e+e7/vOObl/hHnC847cbq2pV5XNwH0iLFelHPgN+EWEQdd1B/fseW0SoKOj45ZYLHatWENKC/csszafALYDt85XBPCXqhwyhiOqOuT715/2vJ2jhU0zOzud7nzK2vww0AK4IpwU4UXVsMb3gwrHCauMMQ+ANopwCrAimlDVi0CN69pni/Vs8SKb7WpUpWcGPw3+rkRix8USVU8AI8An6XT3GpHgBPA4QBia54Djcwyy2a5NqhwDRFVjqdS2Q8WKmcwH94q4rRUV+Tebm5vzBdx1w3HfZ01hLaKri3kGwPM6V6rSC7iq7J4tPk20T6pq0+Rk+YOz8FBVG8PQPOT7Wp1MRh+dMyLXlb2qVAF9qVT0/RIjQVUEdA4+c4LOlOIA2Gy2u1o1iADXrJW3b5T4fyKT6doLvCLiPGLCMGgAXKA3Hm/6dSkMgGpgdRgGL1hj5BlVRVVPLZE4IpIJQyaCIPzSqLIewBj7w1IZJBJNY2A+dhypNKB3AlNtba9fWRxd51zOUiESfiPCd4bp+S+CpH8DqOpAJtO5w/P6yxbI95kRHgfK2tuPV86XnkxGP1U1m0RkFOSwteMXstlcxPM8W5oR1DpOsNEAPwK4bn7DQj2kUpGv2toiG4A6YFxVc9auOp/N5iL9/f1OIc/zOleC2R4E5A3ImenW2byQAYCIaDIZ/WLduqqHRXgZCFU1NzIy0VfIsVZ2gsTBbjWO4/cDIfCq5/UsW4wJQENDQ5BIRE+sWCE1qhoRCQcLe6oyKsIlxwk+F4BMpuszoB54N5mMvrVYk1KRTnfd77pyJR5v+hNmTo/jBC3AFLA7ne7ccrPiBw4cfUKEn4NAPypgBqC19Y0LwC5ARKQ3nT5adzMGquYxwKrydQH7z5eZTucyIpoAAlXNVFZef6f47S8VnudZa6tjILf5/uV2WL6q+Muc8ydns7mIqh4GykS4pEp3GMrpVCryk4jodKUqBw9+eM/atXf8Pjw8/pIIx4BJ379c5XmeX6znzDYYGho4V1u7pc8Y7lZlI1ArwrazZ8/VDQ0N5ACsvetbVd67enUqb4ycVMVXJbZvX8vYbL2StzCVip4Htu7f37XeGOqB54E//m1bGAbKRfT7RCI6BsRvNMJ/ADEwft7Zk7L7AAAAAElFTkSuQmCC"
                          alt="TimeIcon"
                          class="w-[15px] h-[15px]"
                        ></img>

                        <span className="text-md">{row.appointment_time}</span>
                      </div>
                    </td>
                    <td className="p-2 h-20 w-1/6">
                      <div className=" flex justify-start items-center gap-1">
                        <div class="bg-[#73c7a4] w-fit h-fit p-1 rounded-full">
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADsSURBVDiNlZO7SoNBEEbPpk6XRotUWtiIl1SWCiJ2kjcQH8BGwVJfRwJBSJcqDxEbWy2EVGKhAXMsXHH9NfMn0yxz+c7sDrMQmLqqrkQ1jSgJnAGnUUEKuifgITdZTynNapr9ARz5Y4dLiTOgVwBuFxU11ba6p04LwHuOtdVmVXSpPlcEdTbNmotvyLn6sQRgpl5Xb3KsviwgflVP5s1gV30KxI/qTt0g+wGgVyduqJMAMFF/bW91lbeAVuGPgfvCbwGbEeAgn2/ADdABtoGrHAPYj54wUEfqxj+5NXWo3kWArl+faF4+qd0y9gnag4KOT4bcdwAAAABJRU5ErkJggg=="
                            alt="starIcon"
                            class="w-[15px] h-[15px]"
                          />
                        </div>

                        <span className="text-md">{row.doctor}</span>
                      </div>
                    </td>
                    <td className="p-2 h-20 w-1/6">
                      <span className="border p-2 font-bold bg-slate-200 rounded-lg text-black">
                        {row.injury}
                      </span>
                    </td>
                    <td>
                      <div className=" flex justify-center items-center">
                        <span
                          style={{ fontSize: "30px", color: "#d1d5db" }}
                          class="material-icons-outlined"
                        >
                          more_vert
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
