import { createContext, useContext, useState } from "react";
import GlobalLoader from "./GlobalLoader";

type LoaderContextType = {
  startLoader: () => void;
  stopLoader: () => void;
};

const LoaderContext = createContext<LoaderContextType | null>(null);

export const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoader = () => setIsLoading(true);
  const stopLoader = () => setIsLoading(false);

  return (
    <LoaderContext.Provider value={{ startLoader, stopLoader }}>
      {children}
      {isLoading && <GlobalLoader />}
    </LoaderContext.Provider>
  );
};

/**
 * Custom hook to use loader anywhere
 */
export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoader must be used inside LoaderProvider");
  }
  return context;
};
