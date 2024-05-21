// useApiRequest.js
import { useState, useEffect, useCallback } from 'react';
import { getRequest, postRequest } from './axios';

const useApiRequest = (endpoint, method = 'GET', requestBody = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      let response;

      if (method === 'GET') {
        response = await getRequest(endpoint);
      } else if (method === 'POST') {
        response = await postRequest(endpoint, requestBody);
      }

      setData(response.data);
    } catch (error) {
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  }, [endpoint, method, requestBody]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useApiRequest;
