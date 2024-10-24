import React, { useEffect, useState } from 'react';

const SampleAPICallTest = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data'); // mock this
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError('Error fetching data');
      }
    };

    fetchData();
  }, []);

  if (error) return <p>{error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>Data Fetched</h1>
      <p>{data.message}</p>
    </div>
  );
};

export default SampleAPICallTest;
