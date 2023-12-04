import React, { useState, useEffect } from "react";
import axios from "../api/axios";

type FetchedDataType = string | number | boolean;

interface FetchResult {
  isLoading: boolean;
  apiData: FetchedDataType[] | null;
  error: string;
}
export const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiData, setApiData] = useState<FetchedDataType[] | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const handleDataFetch = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);

        if (!response.status || response.status !== 200) {
          throw new Error("Failed to fetch data");
        }

        const data: FetchedDataType[] = response?.data;
        setApiData(data);
        setError("");
      } catch (error: any) {
        console.error(error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    handleDataFetch();
  }, [url]);

  return { isLoading, apiData, error } as FetchResult;
};
