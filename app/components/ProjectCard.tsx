"use client"
import React, { useState } from "react";
import {
  Calendar,
  Users,
  PenTool as Tool,
  Target,
  Star,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from "lucide-react";
import { Project } from "../types/Experience";
import RatingDisplay from "./RatingDisplay";
import MetricsDisplay from "./MetricsDisplay";

interface ProjectCardProps {
  project: Project;
  propertyType: "business" | "heritage" | "resort";
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, propertyType }) => {
  const [showDetails, setShowDetails] = useState(false);

  const propertyTypeConfig = {
    business: {
      color: "bg-blue-500",
      textColor: "text-blue-700",
      bgColor: "bg-blue-50"
    },
    heritage: {
      color: "bg-amber-500",
      textColor: "text-amber-700",
      bgColor: "bg-amber-50"
    },
    resort: {
      color: "bg-emerald-500",
      textColor: "text-emerald-700",
      bgColor: "bg-emerald-50"
    }
  };

  const config = propertyTypeConfig[propertyType];

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 transition-colors duration-200">
      {/* Project Header */}
      <div className="p-4">
        <div className="flex items-start gap-4">
          {project.imageUrl && (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
            />
          )}
          <div className="flex-1 min-w-0">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {project.title}
            </h4>
            <p className="text-gray-600 text-sm mb-3">{project.overview}</p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
              {project.launchDate && (
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>
                    {new Date(project.launchDate).toLocaleDateString()}
                  </span>
                </div>
              )}
              {project.team && project.team.length > 0 && (
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  <span>
                    {project.team.length} team member
                    {project.team.length !== 1 ? "s" : ""}
                  </span>
                </div>
              )}
              {project.tools && project.tools.length > 0 && (
                <div className="flex items-center gap-1">
                  <Tool className="h-3 w-3" />
                  <span>
                    {project.tools.length} tool
                    {project.tools.length !== 1 ? "s" : ""}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-6">
            {project.guestFeedback && project.guestFeedback.length > 0 && (
              <RatingDisplay ratings={project.guestFeedback} />
            )}
            {project.initiatives && project.initiatives.length > 0 && (
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Target className="h-4 w-4" />
                <span>
                  {project.initiatives.length} initiative
                  {project.initiatives.length !== 1 ? "s" : ""}
                </span>
              </div>
            )}
          </div>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className={`flex items-center gap-1 px-3 py-1 rounded-md text-xs font-medium transition-colors duration-200 ${config.textColor} hover:${config.bgColor}`}>
            {showDetails ? "Less" : "Details"}
            {showDetails ? (
              <ChevronUp className="h-3 w-3" />
            ) : (
              <ChevronDown className="h-3 w-3" />
            )}
          </button>
        </div>
      </div>

      {/* Expanded Details */}
      {showDetails && (
        <div
          className={`border-t border-gray-100 ${config.bgColor} p-4 space-y-4`}>
          {/* Metrics */}
          {project.metrics && <MetricsDisplay metrics={project.metrics} />}

          {/* Tools */}
          {project.tools && project.tools.length > 0 && (
            <div>
              <h5 className="text-sm font-medium text-gray-900 mb-2 flex items-center gap-2">
                <Tool className="h-4 w-4" />
                Tools & Platforms
              </h5>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Initiatives */}
          {project.initiatives && project.initiatives.length > 0 && (
            <div>
              <h5 className="text-sm font-medium text-gray-900 mb-2 flex items-center gap-2">
                <Target className="h-4 w-4" />
                Key Initiatives & Results
              </h5>
              <div className="space-y-2">
                {project.initiatives.map((initiative, index) => (
                  <div key={index} className="flex items-start gap-3 text-sm">
                    <div
                      className={`w-2 h-2 rounded-full ${config.color} mt-2 flex-shrink-0`}></div>
                    <div>
                      <span className="font-medium text-gray-900">
                        {initiative.name}:
                      </span>
                      <span className="text-gray-600 ml-1">
                        {initiative.result}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Team */}
          {project.team && project.team.length > 0 && (
            <div>
              <h5 className="text-sm font-medium text-gray-900 mb-2 flex items-center gap-2">
                <Users className="h-4 w-4" />
                Team Members
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.team.map((member, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-medium">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {member.name}
                      </div>
                      <div className="text-gray-600 text-xs">
                        {member.role} {member.lead && "(Lead)"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modules */}
          {project.modules && Object.keys(project.modules).length > 0 && (
            <div>
              <h5 className="text-sm font-medium text-gray-900 mb-2">
                Project Modules
              </h5>
              <div className="space-y-3">
                {Object.entries(project.modules).map(([key, module]) => (
                  <div
                    key={key}
                    className="bg-white rounded-lg p-3 border border-gray-200">
                    <h6 className="font-medium text-gray-900 capitalize text-sm mb-1">
                      {key}
                    </h6>
                    <p className="text-gray-600 text-xs mb-2">
                      {module.summary}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {module.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          {tag.replace(/_/g, " ")}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Document Links */}
          {project.documentLinks && project.documentLinks.length > 0 && (
            <div>
              <h5 className="text-sm font-medium text-gray-900 mb-2 flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Documentation
              </h5>
              <div className="space-y-1">
                {project.documentLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200">
                    <ExternalLink className="h-3 w-3" />
                    <span>Project Documentation {index + 1}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
