import axios from "axios";
import { useState } from "react";
import { TableListProps } from "../../types/table";

interface UseCallAppointmentListProps {
  url: string;
}

interface UseCallAppointmentListResult {
  data: TableListProps[];
  loading: boolean;
  fetchData: () => Promise<void>;
}

const useCallAppointmentList = ({
  url,
}: UseCallAppointmentListProps): UseCallAppointmentListResult => {
  const [data, setData] = useState<TableListProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Created an Axios instance with baseURL
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
  });

  const fetchData = async () => {
    try {
      const res = await axiosInstance.get(url);
      setData(res?.data?.appointments);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, fetchData };
};

export default useCallAppointmentList;
