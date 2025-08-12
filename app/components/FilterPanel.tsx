"use client"
import React from "react";
import { Search, Filter, Building2, Crown, Calendar } from "lucide-react";
import { FilterState } from "../types/Experience";

interface FilterPanelProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onFiltersChange
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="h-5 w-5 text-gray-600" />
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
      </div>

      <div className="space-y-6">
        {/* Search */}
        <div className="relative">
          <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <Search className="h-4 w-4" />
            Search
          </label>
          <Search className="absolute left-3 top-[52px] transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search properties or projects..."
            value={filters.searchTerm}
            onChange={(e) =>
              onFiltersChange({ ...filters, searchTerm: e.target.value })
            }
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white"
          />
        </div>

        {/* Property Type and Year Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Property Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Property Type
            </label>
            <select
              value={filters.propertyType}
              onChange={(e) =>
                onFiltersChange({ ...filters, propertyType: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white appearance-none cursor-pointer">
              <option value="">All Property Types</option>
              <option value="business">Business Hotel</option>
              <option value="heritage">Heritage Property</option>
              <option value="resort">Resort</option>
            </select>
          </div>

          {/* Year */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Year
            </label>
            <select
              value={filters.year}
              onChange={(e) =>
                onFiltersChange({ ...filters, year: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 focus:bg-white appearance-none cursor-pointer">
              <option value="">All Years</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
        </div>
        {/* Flagship Only */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
            <Crown className="h-4 w-4" />
            Flagship Properties
          </label>
          <label className="flex items-center gap-3 cursor-pointer p-3 bg-gray-50 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors duration-200">
            <input
              type="checkbox"
              checked={filters.flagshipOnly}
              onChange={(e) =>
                onFiltersChange({ ...filters, flagshipOnly: e.target.checked })
              }
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2"
            />
            <span className="text-sm font-medium text-gray-700">
              Show only flagship properties
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
