const useTable = ({ columns, data }) => {
    const headers = columns.map((column) => {
      return column;
    });
  
    const rows = data.map((item) => {
      return { columns, id: item.mobile_number, data: item };
    });
  
    return { headers, rows };
  };
  
  export default useTable;
  