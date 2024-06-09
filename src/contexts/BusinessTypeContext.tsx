// src/contexts/BusinessTypeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the business type
interface BusinessType {
  id: number;
  title: string;
  partners: string[];
}

// Define the type for the context value
interface BusinessTypeContextValue {
  businessTypeBtn: BusinessType[];
  setBusinessTypeBtn: React.Dispatch<React.SetStateAction<BusinessType[]>>;
}

// Create a Context
const BusinessTypeContext = createContext<BusinessTypeContextValue | undefined>(
  undefined
);

// Define the type for the provider's props
interface BusinessTypeProviderProps {
  children: ReactNode;
}

// Create a Provider component
export const BusinessTypeProvider: React.FC<BusinessTypeProviderProps> = ({
  children,
}) => {
  const [businessTypeBtn, setBusinessTypeBtn] = useState<BusinessType[]>([
    { id: 1, title: "Small Business", partners: ["Zenefits"] },
    { id: 2, title: "Medium Business", partners: ["Sapling", "Workday"] },
    { id: 3, title: "Enterprise", partners: [] },
  ]);

  return (
    <BusinessTypeContext.Provider
      value={{ businessTypeBtn, setBusinessTypeBtn }}
    >
      {children}
    </BusinessTypeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useBusinessType = (): BusinessTypeContextValue => {
  const context = useContext(BusinessTypeContext);
  if (!context) {
    throw new Error(
      "useBusinessType must be used within a BusinessTypeProvider"
    );
  }
  return context;
};
