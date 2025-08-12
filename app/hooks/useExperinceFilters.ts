import { useState, useMemo } from "react";
import { Experience, FilterState } from "../types/Experience";

export const useExperienceFilters = (experiences: Experience[]) => {
  const [filters, setFilters] = useState<FilterState>({
    propertyType: "",
    year: "",
    flagshipOnly: false,
    searchTerm: ""
  });

  const filteredExperiences = useMemo(
    () => {
      return experiences.filter(experience => {
        // Property type filter
        if (
          filters.propertyType &&
          experience.propertyType !== filters.propertyType
        ) {
          return false;
        }

        // Year filter
        if (filters.year && experience.duration !== filters.year) {
          return false;
        }

        // Flagship filter
        if (filters.flagshipOnly && !experience.isFlagship) {
          return false;
        }

        // Search filter
        if (filters.searchTerm) {
          const searchLower = filters.searchTerm.toLowerCase();
          const searchableText = [
            experience.property,
            experience.location,
            experience.role,
            ...experience.projects.map(p => p.title),
            ...experience.projects.map(p => p.overview)
          ]
            .join(" ")
            .toLowerCase();

          if (!searchableText.includes(searchLower)) {
            return false;
          }
        }

        return true;
      });
    },
    [experiences, filters]
  );

  return {
    filters,
    setFilters,
    filteredExperiences
  };
};
