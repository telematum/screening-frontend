import {useEffect, useState} from "react"
import List from "./List"
import {Oval} from "react-loader-spinner"



const Appointment = () => {

    const [items, setItems] = useState([])
    const[fetchError,setFetchError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [isDark, setTheme] = useState(false)

    useEffect(() => {
      const fetchItems = async () => {
        try {
          setLoading(true)
          const response = await fetch("https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json")
          if (!response.ok) throw Error("Data not received")
          const listItems = await response.json()
          const finalListItems = listItems.appointments.map(eachItem => ({
           appointmentDate : eachItem.appointment_date,
           appointmentTime : eachItem.appointment_time,
           doctor : eachItem.doctor,
           injury: eachItem.injury,
           mobileNumber : eachItem.mobile_number,
           patientName : eachItem.patient_name
          }))
          setItems(finalListItems)
          setFetchError(null)
        }catch (err){
          setFetchError(err.message)
        } finally{
          setLoading(false)
        }
      }

      (async () => await fetchItems())()
    }, [])

    const changeTheme = () => {
      const currentTheme = !isDark
      setTheme(currentTheme)
    }

    const renderLoader = () => (
      <div className="mt-80">
        <Oval  visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="oval-loading" />
      </div>
    )
    
  return (
    <div className="flex flex-col items-center">
      {loading ? ( renderLoader()) : (
        <List items={items} changeTheme={changeTheme} isDark={isDark}/>
      )}
          
     </div>
  )

}

export default Appointment