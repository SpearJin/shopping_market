import { useEffect, useState } from 'react';
import axios from 'axios';

const UseApiCall = () => {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const datas = await axios.get(url);
      setPayload(datas.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  });

  return [payload, loading, error, fetchData];
};

export default UseApiCall;
