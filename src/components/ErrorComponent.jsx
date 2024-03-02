import { CiWarning } from "react-icons/ci";

const ErrorComponent = () => {
    return <div className="flex flex-col items-center  p-20 ">
              <CiWarning color="red" size={50}/>
              <p className="text-center text-base text-red-500 font-extrabold">Error occurred while getting appointments! Refresh the page</p>
              </div>
}

export default ErrorComponent