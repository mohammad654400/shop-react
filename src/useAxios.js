import { useEffect, useState } from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});

const useAxios = (axiosParams) => {
  const [response, setRespone] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const result = await instance.request(axiosParams);
      console.log("aran", result);
      setRespone(result.data.data);
      console.log(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const deleteData = async () => {
    try {
      const result = await instance.request(axiosParams);
      console.log("aran", result);
      setRespone(result.data.data);
      console.log(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [axiosParams.url]);

  return [response, error, loading, deleteData];
};
export default useAxios;
