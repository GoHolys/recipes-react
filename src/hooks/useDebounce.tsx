import { useEffect, useState } from "react";

export default function useDebounce(searchValue: string, time = 500) {
  const [debouncedSearch, setDebouncedSearch] = useState("");
  useEffect(() => {
    const timeId = setTimeout(() => {
      setDebouncedSearch(searchValue);
    }, time);
    return () => clearTimeout(timeId);
  }, [searchValue, time]);
  return { debouncedSearch };
}
