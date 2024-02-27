import { Heading } from "../assets/constants";
import Table from "./Table";

const Body = () => {
  return (
    <div className="md:px-6 lg-px-8 my-10">
      <h1 className="text-gray-600 text-xl sm:text-left text-center">
        {Heading}
      </h1>
      <Table />
    </div>
  );
};

export default Body;
