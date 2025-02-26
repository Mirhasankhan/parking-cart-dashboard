"use client"
import { useState } from "react";

type Review = {
  user: string;
  comment: string;
};

type Spot = {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: Review[];
};

const spots: Spot[] = [
  {
    id: 1,
    name: "Downtown Parking",
    location: "City Center",
    rating: 4.5,
    reviews: [
      { user: "John Doe", comment: "Great spot! Very secure." },
      { user: "Alice Johnson", comment: "Easy access and affordable." },
    ],
  },
  {
    id: 2,
    name: "Mall Parking",
    location: "Shopping District",
    rating: 4.2,
    reviews: [
      { user: "Emma Smith", comment: "Lots of space, but a bit pricey." },
      { user: "Michael Brown", comment: "Convenient location, safe area." },
    ],
  },
  {
    id: 3,
    name: "Airport Parking",
    location: "Near Airport",
    rating: 4.8,
    reviews: [{ user: "David Clark", comment: "Perfect for long trips." }],
  },
  {
    id: 4,
    name: "Residential Parking",
    location: "Suburban Area",
    rating: 3.9,
    reviews: [
      { user: "Sophia Williams", comment: "Quiet and safe, but limited spots." },
    ],
  },
  {
    id: 5,
    name: "Office Parking",
    location: "Business Hub",
    rating: 4.6,
    reviews: [
      { user: "Robert Johnson", comment: "Very well maintained and secure." },
      { user: "Emily Davis", comment: "Always available spots!" },
    ],
  },
  {
    id: 6,
    name: "Beachside Parking",
    location: "Coastal Area",
    rating: 4.0,
    reviews: [],
  },
];

const bgColors = [
  "bg-gradient-to-r from-blue-400 to-blue-600",
  "bg-gradient-to-r from-purple-400 to-purple-600",
  "bg-gradient-to-r from-green-400 to-green-600",
  "bg-gradient-to-r from-yellow-400 to-yellow-600",
  "bg-gradient-to-r from-red-400 to-red-600",
  "bg-gradient-to-r from-indigo-400 to-indigo-600",
];

const SpotListings: React.FC = () => {
  const [selectedSpot, setSelectedSpot] = useState<Spot | null>(null);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
         Parking Spot Listings
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {spots.map((spot, index) => (
          <div
            key={spot.id}
            className={`p-5 rounded-lg shadow-lg text-white ${bgColors[index % bgColors.length]}`}
          >
            <h2 className="text-2xl font-bold">{spot.name}</h2>
            <p className="text-lg">{spot.location}</p>
            <p className="text-yellow-200 font-semibold text-lg">⭐ {spot.rating}</p>
            <p className="mt-2 text-lg">Total Reviews: {spot.reviews.length}</p>
        
            {spot.reviews.length > 0 && (
              <button
                className="mt-3 px-5 py-2 bg-white text-blue-700 rounded-md font-semibold transition duration-300 hover:bg-gray-200"
                onClick={() => setSelectedSpot(spot)}
              >
                Show Reviews
              </button>
            )}
          </div>
        ))}
      </div>
      {selectedSpot && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96 text-gray-800 relative">
            <h2 className="text-2xl font-bold mb-3 text-center">
              Reviews for {selectedSpot.name}
            </h2>
            <div className="space-y-3">
              {selectedSpot.reviews.map((review, index) => (
                <div key={index} className="border-b py-2">
                  <p className="font-semibold">{review.user}</p>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
            <button
              className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition"
              onClick={() => setSelectedSpot(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpotListings;
