
// React context for sharing selected growth categories across the app
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { GrowthCategory } from '../types';

// Context value type for selected growth categories
interface GrowthContextType {
  selectedCategories: GrowthCategory[];
  setSelectedCategories: (categories: GrowthCategory[]) => void;
}

// Create the context
const GrowthContext = createContext<GrowthContextType | undefined>(undefined);


// Provider component to wrap the app and provide selected categories
export const GrowthProvider = ({ children }: { children: ReactNode }) => {
  // State for selected growth categories, persisted in localStorage
  const [selectedCategories, setSelectedCategories] = useState<GrowthCategory[]>(() => {
    // Try to load from localStorage for persistence
    const stored = localStorage.getItem('selectedCategories');
    return stored ? JSON.parse(stored) : [];
  });

  // Persist changes to localStorage and update state
  const setAndStore = (categories: GrowthCategory[]) => {
    setSelectedCategories(categories);
    localStorage.setItem('selectedCategories', JSON.stringify(categories));
  };

  return (
    <GrowthContext.Provider value={{ selectedCategories, setSelectedCategories: setAndStore }}>
      {children}
    </GrowthContext.Provider>
  );
};


// Custom hook to access the growth context
export const useGrowth = () => {
  const context = useContext(GrowthContext);
  if (!context) throw new Error('useGrowth must be used within a GrowthProvider');
  return context;
};
