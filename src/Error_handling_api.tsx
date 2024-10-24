import React, { useState, useEffect } from "react";

// Define the type for the cat fact response
interface CatFact {
  fact: string;
  length: number; // Assuming the response includes a length property
}

const CatFact: React.FC = () => {
  const [data, setData] = useState<CatFact | null>(null); // Holds the fetched data
  const [loading, setLoading] = useState<boolean>(true); // Tracks loading state
  const [error, setError] = useState<string | null>(null); // Tracks any errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Start loading
        const response = await fetch("https://catfact.ninja/fact");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`); // Handle non-200 responses
        }
        const result: CatFact = await response.json(); // Type the result
        setData(result);
        console.log(typeof result, "hook_useeffect");
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); // Capture any errors
        } else {
          setError("An unexpected error occurred");
        }
        console.error("Error fetching data: ", err);
      } finally {
        setLoading(false); // Stop loading when fetch is complete or errors out
      }
    };

    fetchData(); // Call the function to fetch data
  }, []); // Empty array means the effect runs once when the component mounts

  // Conditional rendering based on loading, error, and data states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Cat Fact</h1>
      {data && <p>{data.fact}</p>} {/* Display the fact directly */}
    </div>
  );
};

export default CatFact;
