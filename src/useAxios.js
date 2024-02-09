import { useEffect, useState } from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});

const useAxios = (axiosParams) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const result = await instance.request(axiosParams);
      setResponse(result.data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (id) => {
    try {
      await instance.delete(`/product/${id}`);
      fetchData();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [axiosParams.url]);

  return [response, error, loading, deleteItem, fetchData];
};

export default useAxios;
