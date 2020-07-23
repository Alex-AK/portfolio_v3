import { useState, useEffect } from "react";

const useCSSHydrate = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) setIsLoading(false);
  }, [isLoading, setIsLoading]);

  return isLoading;
};

export default useCSSHydrate;
