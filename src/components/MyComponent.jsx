import React, { useEffect } from 'react';
import useAxios from './useAxios';

const MyComponent = () => {
  const { loading, error, getRequest, postRequest } = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRequest('/products');
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [getRequest]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {/* Your component content */}
    </div>
  );
};

export default MyComponent;
