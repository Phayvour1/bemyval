"use client"
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define types for selections
interface Selections {
    date?: string;
    dessert?: string[];
  food?: string[];  // Food can be multiple items, so it's an array
  venue?: string[]; // Venue can also be multiple
}

// Create a context with the appropriate types
interface SelectionContextType {
  selections: Selections;
  setSelections: React.Dispatch<React.SetStateAction<Selections>>;
}

const SelectionContext = createContext<SelectionContextType | undefined>(undefined);

interface SelectionProviderProps {
  children: ReactNode;
}

// Provider to wrap the app with state
export function SelectionProvider({ children }: SelectionProviderProps) {
  const [selections, setSelections] = useState<Selections>({});

  return (
    <SelectionContext.Provider value={{ selections, setSelections }}>
      {children}
    </SelectionContext.Provider>
  );
}

// Hook to use the selections context
export function useSelection(): SelectionContextType {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error("useSelection must be used within a SelectionProvider");
  }
  return context;
}
