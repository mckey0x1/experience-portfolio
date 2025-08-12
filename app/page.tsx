"use client"
import React from "react";
import { Briefcase, Award, MapPin } from "lucide-react";
import { experienceData } from "./data/experienceData";
import FilterPanel from "./components/FilterPanel";
import ExperienceCard from "./components/ExperienceCard";
import { useExperienceFilters } from "./hooks/useExperinceFilters";

function Home() {
  const { filters, setFilters, filteredExperiences } =
    useExperienceFilters(experienceData);

  const totalProjects = experienceData.reduce(
    (acc, exp) => acc + exp.projects.length,
    0
  );
  const flagshipCount = experienceData.filter((exp) => exp.isFlagship).length;
  const uniqueLocations = new Set(experienceData.map((exp) => exp.location))
    .size;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Experience Portfolio
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive overview of hospitality leadership roles, project
              implementations, and operational excellence achievements across
              premium properties.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">
                    Total Projects
                  </span>
                </div>
                <div className="text-2xl font-bold text-blue-900">
                  {totalProjects}
                </div>
              </div>
              <div className="bg-amber-50 rounded-lg p-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-amber-600" />
                  <span className="text-sm font-medium text-amber-700">
                    Flagship Properties
                  </span>
                </div>
                <div className="text-2xl font-bold text-amber-900">
                  {flagshipCount}
                </div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm font-medium text-emerald-700">
                    Locations
                  </span>
                </div>
                <div className="text-2xl font-bold text-emerald-900">
                  {uniqueLocations}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <FilterPanel filters={filters} onFiltersChange={setFilters} />

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {filteredExperiences.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900">
              {experienceData.length}
            </span>{" "}
            experiences
          </p>
        </div>

        {/* Experiences Grid */}
        {filteredExperiences.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No experiences found
              </h3>
              <p className="text-gray-500">
                Try adjusting your filters to see more results.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredExperiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
