import { useState } from "react";
import { Search, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BookingSteps from "./components/BookingSteps.tsx";
import TheaterCard from "./components/TheaterCard.tsx";

const STEPS = [
  { id: 1, label: "Movies" },
  { id: 2, label: "Theater" },
  { id: 3, label: "Seats" },
  { id: 4, label: "Snacks" },
  { id: 5, label: "Payment" },
  { id: 6, label: "Confirmation" },
];

const AREAS = [
  "All Areas",
  "Siam Area",
  "Sukhumvit",
  "Riverside",
  "Central Bangkok",
];

interface Theater {
  name: string;
  rating: string;
  screens: string;
  location: string;
  distance: string;
  transport: string;
  amenities: string[];
  isHighlyRated?: boolean;
  isStudentFriendly?: boolean;
}

const THEATERS: Theater[] = [
  {
    name: "Tickify IMAX Central Plaza",
    rating: "4.8",
    screens: "12",
    location: "Central Plaza Grand Rama 9",
    distance: "2.3 km",
    transport: "Accessible by taxi, private car, or public transport",
    amenities: ["IMAX", "Premium Sound", "Parking", "Food Court", "+1 more"],
    isHighlyRated: true,
  },

  {
    name: "Tickify Deluxe Siam Paragon",
    rating: "4.9",
    screens: "16",
    location: "Siam Paragon Shopping Center",
    distance: "3.1 km",
    transport: "Accessible by taxi, private car, or public transport",
    amenities: [
      "4DX",
      "VIP Lounge",
      "Valet Parking",
      "Premium Dining",
      "+1 more",
    ],
    isHighlyRated: true,
  },
  {
    name: "Tickify Student Hub EmQuartier",
    rating: "4.6",
    screens: "8",
    location: "EmQuartier Sukhumvit",
    distance: "4.5 km",
    transport: "Connected to BTS/MRT - Easy access by public transport",
    amenities: [
      "Student Discount",
      "Gaming Zone",
      "Study Area",
      "Café",
      "+1 more",
    ],
    isStudentFriendly: true,
  },
  {
    name: "Tickify Mega Terminal 21",
    rating: "4.7",
    screens: "10",
    location: "Terminal 21 Asok",
    distance: "5.2 km",
    transport: "Connected to BTS/MRT - Easy access by public transport",
    amenities: [
      "Dolby Atmos",
      "Rooftop Dining",
      "MRT/BTS Access",
      "Shopping",
      "+1 more",
    ],
  },
  {
    name: "Tickify Budget CentralWorld",
    rating: "4.4",
    screens: "6",
    location: "CentralWorld Shopping Complex",
    distance: "3.8 km",
    transport: "Connected to BTS/MRT - Easy access by public transport",
    amenities: [
      "Student Pricing",
      "Food Court",
      "BTS Siam",
      "Late Night Shows",
    ],
  },
  {
    name: "Tickify Premium Iconsiam",
    rating: "4.9",
    screens: "14",
    location: "Iconsiam Riverside Complex",
    distance: "8.1 km",
    transport: "Accessible by boat shuttle from Saphan Taksin BTS",
    amenities: [
      "River View",
      "Luxury Seating",
      "Fine Dining",
      "Boat Access",
      "+1 more",
    ],
    isHighlyRated: true,
  },
];

export default function Theater() {
  const navigate = useNavigate();
  const [selectedArea, setSelectedArea] = useState("All Areas");

  return (
    <div className="pb-20">
      <BookingSteps currentStep={2} steps={STEPS} />

      <div className="px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-display font-bold mb-2">
              Select Theater
            </h1>
            <p className="text-gray-500 font-medium">
              The Conjuring 4: Last Rites • 11:00 AM
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate("/movies")}
              className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Movies
            </button>
            <div className="hidden md:block">
              <p className="text-[10px] font-bold text-tickify-pink uppercase tracking-widest">
                Selected Movie
              </p>
              <p className="text-sm font-bold">The Conjuring 4: Last Rites</p>
              <p className="text-xs text-gray-500">11:00 AM</p>
            </div>
          </div>
        </div>

        <div className="bg-tickify-card/50 border border-white/5 rounded-3xl p-4 flex flex-wrap items-center gap-4 mb-12">
          <div className="flex-1 min-w-62.5 relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Search theaters or locations..."
              className="w-full bg-transparent border-none py-2 pl-12 pr-4 text-sm focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {AREAS.map((area) => (
              <button
                key={area}
                onClick={() => setSelectedArea(area)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                  selectedArea === area
                    ? "bg-tickify-pink text-white shadow-[0_0_15px_rgba(255,0,128,0.4)]"
                    : "text-gray-500 hover:text-white hover:bg-white/5"
                }`}
              >
                {area}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {THEATERS.map((theater, index) => {
            const { ...theaterProps } = theater;
            return (
              <TheaterCard
                key={index}
                {...theaterProps}
                onSelect={() => navigate("/seats")}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
