import { useState } from "react";
import { ArrowLeft, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BookingSteps from "./components/BookingSteps.tsx";
import SnackCard from "./components/SnackCard.tsx";
import SnackSummary from "./components/SnackSummary.tsx";

const STEPS = [
  { id: 1, label: "Movies" },
  { id: 2, label: "Theater" },
  { id: 3, label: "Seats" },
  { id: 4, label: "Snacks" },
  { id: 5, label: "Payment" },
  { id: 6, label: "Confirmation" },
];

const CATEGORIES = [
  "All Items",
  "Combo Deals",
  "Couple Sets",
  "Popcorn",
  "Drinks",
  "Candy",
];

const SNACKS = [
  {
    id: "s1",
    name: "Large Classic Popcorn",
    description: "Buttery and delicious, perfect for sharing",
    price: 85,
    image: "https://picsum.photos/seed/popcorn1/200/200",
    isPopular: true,
  },
  {
    id: "s2",
    name: "Medium Caramel Popcorn",
    description: "Sweet caramel coating on fresh popcorn",
    price: 75,
    image: "https://picsum.photos/seed/popcorn2/200/200",
  },
  {
    id: "s3",
    name: "Large Coca-Cola",
    description: "Ice-cold classic cola, 32oz",
    price: 55,
    image: "https://picsum.photos/seed/coke/200/200",
    isPopular: true,
  },
  {
    id: "s4",
    name: "Iced Coffee",
    description: "Premium cold brew coffee",
    price: 65,
    image: "https://picsum.photos/seed/coffee/200/200",
  },
  {
    id: "s5",
    name: "Movie Theater Nachos",
    description: "Crispy chips with cheese and jalapeños",
    price: 95,
    image: "https://picsum.photos/seed/nachos/200/200",
  },
  {
    id: "s6",
    name: "Assorted Candy Mix",
    description: "Selection of popular movie theater candies",
    price: 45,
    image: "https://picsum.photos/seed/candy/200/200",
  },
  {
    id: "s7",
    name: "Movie Night Combo",
    description: "Popcorn + Coca-Cola + Fries + Fresh grapes",
    price: 195,
    image: "https://picsum.photos/seed/combo1/200/200",
    isPopular: true,
  },
  {
    id: "s8",
    name: "Fresh Lemonade",
    description: "Freshly squeezed lemon juice with ice",
    price: 55,
    image: "https://picsum.photos/seed/lemonade/200/200",
  },
  {
    id: "s9",
    name: "Couple Movie Set",
    description: "2 Popcorn buckets + 3 Drinks + Premium snacks",
    price: 280,
    image: "https://picsum.photos/seed/combo2/200/200",
    isPopular: true,
  },
];

export default function Snacks() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const [selectedSnacks, setSelectedSnacks] = useState<Record<string, number>>(
    {},
  );

  const handleAdd = (id: string) => {
    setSelectedSnacks((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleRemove = (id: string) => {
    setSelectedSnacks((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) - 1),
    }));
  };

  return (
    <div className="pb-20">
      <BookingSteps currentStep={4} steps={STEPS} />

      <div className="px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-display font-bold mb-2">
              Add Snacks & Drinks
            </h1>
            <p className="text-gray-500 font-medium">
              Skip the queue! Pre-order your favorite cinema treats
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate("/seats")}
              className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Seats
            </button>
            <div className="hidden md:block">
              <p className="text-[10px] font-bold text-tickify-pink uppercase tracking-widest">
                Deadpool & Wolverine
              </p>
              <p className="text-sm font-bold">10:00 AM • 2 seats</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Snacks Menu */}
          <div className="lg:col-span-2 space-y-8">
            {/* Category Filters */}
            <div className="bg-tickify-card/50 border border-white/5 rounded-3xl p-4 flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-tickify-pink text-white shadow-[0_0_15px_rgba(255,0,128,0.4)]"
                      : "text-gray-500 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Skip Queue Banner */}
            <div className="bg-tickify-cyan/5 border border-tickify-cyan/20 rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-tickify-cyan/10 rounded-xl flex items-center justify-center">
                <Clock size={24} className="text-tickify-cyan" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-tickify-cyan">
                  Skip the Queue!
                </h4>
                <p className="text-xs text-gray-400">
                  Pre-order your snacks and pick them up at our express counter.
                  Save time and never miss a moment of your movie!
                </p>
              </div>
            </div>

            {/* Snacks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SNACKS.map((snack) => (
                <SnackCard
                  key={snack.id}
                  snack={snack}
                  quantity={selectedSnacks[snack.id] || 0}
                  onAdd={handleAdd}
                  onRemove={handleRemove}
                />
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <SnackSummary
              selectedSnacks={selectedSnacks}
              snacks={SNACKS}
              ticketPrice={300}
              onContinue={() => navigate("/payment")}
              onSkip={() => navigate("/payment")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
