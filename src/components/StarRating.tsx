"use client";
import React from "react";
import { Star } from "lucide-react";

export default function StarRating({ rating = 0, maxRating = 5 }) {
  {
    return (
      <div className="flex gap-1">
        {[...Array(maxRating)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={`${
              index < rating
                ? "fill-hm-yellow text-hm-yellow"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
    );
  }
}
