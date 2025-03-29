import { useState, useEffect } from "react";

export function useApiCall(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    callApi();
  }, [url]);

  const callApi = async () => {
    setLoading(true);
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };
  return { data, loading, error };
}
