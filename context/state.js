import { createContext, useContext } from "react";

const HeaderContext = createContext({});

export const TaxonomySlugProvider = ({ children }) => {
  return (
    <HeaderContext.Provider value={{}}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => useContext(HeaderContext);
