"use client"

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  Crown,
  Building2
} from "lucide-react";
import { Experience } from "../types/Experience";
import ProjectCard from "./ProjectCard";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const propertyTypeConfig = {
    business: {
      color: "bg-blue-500",
      textColor: "text-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    heritage: {
      color: "bg-amber-500",
      textColor: "text-amber-700",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    },
    resort: {
      color: "bg-emerald-500",
      textColor: "text-emerald-700",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    }
  };

  const config = propertyTypeConfig[experience.propertyType];

  return (
    <div
      className={`bg-white rounded-xl border ${config.borderColor} overflow-hidden hover:border-gray-300 transition-all duration-300`}>
      {/* Header */}
      <div
        className={`${config.bgColor} px-6 py-4 border-b ${config.borderColor}`}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-gray-900">
                {experience.property}
              </h3>
              {experience.isFlagship && (
                <Crown className={`h-5 w-5 ${config.textColor}`} />
              )}
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{experience.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{experience.duration}</span>
              </div>
            </div>
            <p className={`text-sm font-medium ${config.textColor}`}>
              {experience.role}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white ${config.color}`}>
              <Building2 className="h-3 w-3" />
              <span className="capitalize">{experience.propertyType}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Summary */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold text-gray-900">
              {experience.projects.length}
            </div>
            <div className="text-sm text-gray-600">
              Project{experience.projects.length !== 1 ? "s" : ""} Completed
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${config.textColor} hover:${config.bgColor}`}>
            {isExpanded ? "Hide Details" : "View Projects"}
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Project Titles Preview */}
        {!isExpanded && (
          <div className="mt-4 space-y-2">
            {experience.projects.slice(0, 2).map((project) => (
              <div
                key={project.id}
                className="flex items-center gap-2 text-sm text-gray-600">
                <div className={`w-2 h-2 rounded-full ${config.color}`}></div>
                <span>{project.title}</span>
              </div>
            ))}
            {experience.projects.length > 2 && (
              <div className="text-sm text-gray-500">
                +{experience.projects.length - 2} more project
                {experience.projects.length - 2 !== 1 ? "s" : ""}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Expanded Projects */}
      {isExpanded && (
        <div className="border-t border-gray-100 bg-gray-50 px-6 py-4">
          <div className="space-y-6">
            {experience.projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                propertyType={experience.propertyType}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
