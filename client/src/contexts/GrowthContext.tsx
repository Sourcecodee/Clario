import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { GrowthCategory } from '../types';

interface GrowthContextType {
  selectedCategories: GrowthCategory[];
  setSelectedCategories: (categories: GrowthCategory[]) => void;
}

const GrowthContext = createContext<GrowthContextType | undefined>(undefined);

export const GrowthProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCategories, setSelectedCategories] = useState<GrowthCategory[]>(() => {
    // Try to load from localStorage for persistence
    const stored = localStorage.getItem('selectedCategories');
    return stored ? JSON.parse(stored) : [];
  });

  // Persist to localStorage
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

export const useGrowth = () => {
  const context = useContext(GrowthContext);
  if (!context) throw new Error('useGrowth must be used within a GrowthProvider');
  return context;
};
