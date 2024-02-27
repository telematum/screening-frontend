import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useTableData = (datURL: string) => {
  return useQuery({queryKey : ["tableData"], queryFn : async () => {
    const { data } = await axios.get(datURL);
    return data;
  }});
};
