import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      return;
    }

    const source = axios.CancelToken.source();

    const fetchData = async () => {
      setData(null);
      setError(null);
      setIsLoading(true);

      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        });
        if (!response || !response.status || response.status !== 200)
          throw new Error("Failed Fetching data");
        setIsLoading(false);
        setData(response.data);
        setError(null);
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError("Error fetching data");
          setIsLoading(false);
        }
      }
    };

    fetchData();

    //aborts requests when unmounting and in case of muliple requests
    return () => {
      source.cancel("component unmounted");
    };
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;
