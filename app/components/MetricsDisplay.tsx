"use client"
import React from "react";
import { TrendingUp, Clock, Percent, Users } from "lucide-react";

interface MetricsDisplayProps {
  metrics: Record<string, any>;
}

const MetricsDisplay: React.FC<MetricsDisplayProps> = ({ metrics }) => {
  if (!metrics) return null;

  const getMetricIcon = (key: string) => {
    if (
      key.toLowerCase().includes("time") ||
      key.toLowerCase().includes("hrs")
    ) {
      return <Clock className="h-4 w-4" />;
    }
    if (
      key.toLowerCase().includes("rate") ||
      key.toLowerCase().includes("percent")
    ) {
      return <Percent className="h-4 w-4" />;
    }
    if (
      key.toLowerCase().includes("covers") ||
      key.toLowerCase().includes("guest")
    ) {
      return <Users className="h-4 w-4" />;
    }
    return <TrendingUp className="h-4 w-4" />;
  };

  const formatMetricKey = (key: string) => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  };

  const formatMetricValue = (value: any) => {
    if (typeof value === "number") {
      if (value % 1 === 0) {
        return value.toString();
      }
      return value.toFixed(1);
    }
    return value.toString();
  };

  return (
    <div>
      <h5 className="text-sm font-medium text-gray-900 mb-2 flex items-center gap-2">
        <TrendingUp className="h-4 w-4" />
        Performance Metrics
      </h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {Object.entries(metrics).map(([key, value]) => (
          <div
            key={key}
            className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-2 mb-1">
              {getMetricIcon(key)}
              <span className="text-xs font-medium text-gray-700">
                {formatMetricKey(key)}
              </span>
            </div>
            <div className="text-lg font-bold text-gray-900">
              {formatMetricValue(value)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsDisplay;
