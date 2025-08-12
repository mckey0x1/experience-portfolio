"use client"

import React from "react";
import { Star } from "lucide-react";

interface RatingDisplayProps {
  ratings: number[];
}

const RatingDisplay: React.FC<RatingDisplayProps> = ({ ratings }) => {
  if (!ratings || ratings.length === 0) return null;

  const average =
    ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
  const roundedAverage = Math.round(average * 10) / 10;

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        <Star className="h-4 w-4 text-yellow-400 fill-current" />
        <span className="text-sm font-medium text-gray-900">
          {roundedAverage}
        </span>
      </div>
      <span className="text-xs text-gray-500">
        ({ratings.length} review{ratings.length !== 1 ? "s" : ""})
      </span>
    </div>
  );
};

export default RatingDisplay;
