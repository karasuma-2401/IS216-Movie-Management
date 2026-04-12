import {
  Search,
  ChevronDown,
  Sparkles,
  Clock,
  Users,
  Calendar,
  Heart,
  Bookmark,
  Star,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import BookingSteps from "./components/BookingSteps.tsx";

const STEPS = [
  { id: 1, label: "Movies" },
  { id: 2, label: "Theater" },
  { id: 3, label: "Seats" },
  { id: 4, label: "Snacks" },
  { id: 5, label: "Payment" },
  { id: 6, label: "Confirmation" },
];

const QUICK_FILTERS = [
  { label: "Action", icon: Zap },
  { label: "Horror", icon: Zap },
  { label: "Comedy", icon: Zap },
  { label: "Superhero", icon: Zap },
];

const MOVIES = [
  {
    id: 1,
    title: "The Conjuring 4: Last Rites",
    image: "https://picsum.photos/seed/conjuring/400/600",
    price: "160",
    rating: "8.1",
    duration: "112 min",
    views: "4.2k views",
    genres: "Horror, Thriller, Supernatural",
    desc: "The Warrens face their most terrifying case yet as they investigate a series of unexplained deaths at a remote monastery.",
    showtimes: ["11:00 AM", "2:15 PM", "5:30 PM", "8:45 PM"],
    badge: "POPULAR",
    studentFriendly: true,
  },
  {
    id: 2,
    title: "Deadpool & Wolverine",
    image: "https://picsum.photos/seed/deadpool/400/600",
    price: "150",
    rating: "8.6",
    duration: "127 min",
    views: "4.2k views",
    genres: "Action, Comedy, Superhero",
    desc: "Wade Wilson and Logan team up for the ultimate buddy adventure across the multiverse. Expect maximum effort, claws, and irreverent humor.",
    showtimes: ["10:00 AM", "1:30 PM", "4:45 PM", "8:00 PM"],
    badge: "HOT",
    studentFriendly: true,
  },
  {
    id: 3,
    title: "Dune: Part Two",
    image: "https://picsum.photos/seed/dune/400/600",
    price: "180",
    rating: "8.8",
    duration: "166 min",
    views: "4.2k views",
    genres: "Adventure, Drama, Sci-Fi",
    desc: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    showtimes: ["10:30 AM", "2:00 PM", "5:15 PM", "8:30 PM"],
    badge: "HOT",
    studentFriendly: false,
  },
  {
    id: 4,
    title: "Inside Out 2",
    image: "https://picsum.photos/seed/insideout/400/600",
    price: "120",
    rating: "8.4",
    duration: "96 min",
    views: "4.2k views",
    genres: "Animation, Family, Comedy",
    desc: "Riley enters puberty and her emotions face new challenges as additional feelings arrive at headquarters. Joy, Sadness, and the gang must...",
    showtimes: ["9:30 AM", "12:45 PM", "4:00 PM", "7:15 PM"],
    badge: "POPULAR",
    studentFriendly: true,
  },
  {
    id: 5,
    title: "Beetlejuice Beetlejuice",
    image: "https://picsum.photos/seed/beetlejuice/400/600",
    price: "165",
    rating: "7.9",
    duration: "104 min",
    views: "4.2k views",
    genres: "Comedy, Horror, Fantasy",
    desc: "After an unexpected family tragedy, three generations of the Deetz family return home to Winter River. Still haunted by Beetlejuice, Lydia's life...",
    showtimes: ["11:00 AM", "2:15 PM", "5:30 PM", "8:45 PM"],
    badge: "HOT",
    studentFriendly: false,
  },
  {
    id: 6,
    title: "Moana 2",
    image: "https://picsum.photos/seed/moana/400/600",
    price: "140",
    rating: "8.2",
    duration: "100 min",
    views: "4.2k views",
    genres: "Animation, Adventure, Family",
    desc: "Moana embarks on an expansive new voyage alongside a crew of unlikely seafarers. After receiving an unexpected call from her wayfinding...",
    showtimes: ["9:45 AM", "1:00 PM", "4:15 PM", "7:30 PM"],
    badge: "POPULAR",
    studentFriendly: true,
  },
];

export default function Movies() {
  const navigate = useNavigate();

  return (
    <div className="pb-20">
      <BookingSteps currentStep={1} steps={STEPS} />

      <div className="px-8 py-12">
        <h1 className="text-4xl font-display font-bold mb-2">
          Choose Your Movie
        </h1>
        <p className="text-gray-500 font-medium">
          Select from our current selection of blockbuster movies
        </p>
      </div>

      <div className="px-8 space-y-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-75 relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Search movies, actors, or directors..."
              className="w-full bg-tickify-card border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-tickify-pink/50 transition-all"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-tickify-card border border-white/10 rounded-xl px-4 py-4 text-sm font-bold text-gray-400 hover:text-white transition-all">
              All Genres <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-2 bg-tickify-card border border-white/10 rounded-xl px-4 py-4 text-sm font-bold text-gray-400 hover:text-white transition-all">
              Popularity <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm font-bold text-white hover:bg-white/10 transition-all">
              <Sparkles size={16} className="text-tickify-cyan" />
              AI Picks
            </button>
          </div>
        </div>

        <div className="bg-tickify-cyan/5 border border-tickify-cyan/20 rounded-2xl p-4 flex items-center gap-4">
          <div className="w-10 h-10 bg-tickify-cyan/10 rounded-xl flex items-center justify-center">
            <Zap size={20} className="text-tickify-cyan" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-tickify-cyan">
              Student-Friendly Pricing!
            </h4>
            <p className="text-xs text-gray-400">
              All tickets starting from $120 - Perfect for students and movie
              lovers on a budget!
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mr-2">
            Quick filters:
          </span>
          {QUICK_FILTERS.map((filter) => (
            <button
              key={filter.label}
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs font-bold text-gray-400 hover:text-white hover:border-white/20 transition-all"
            >
              {filter.label} <filter.icon size={12} />
            </button>
          ))}
        </div>
      </div>

      <div className="px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOVIES.map((movie) => (
          <motion.div
            key={movie.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-tickify-card border border-white/5 rounded-[2.5rem] overflow-hidden group hover:border-tickify-pink/30 transition-all duration-500"
          >
            <div className="relative aspect-2/3 overflow-hidden">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />

              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <span className="bg-tickify-pink text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md shadow-lg">
                  ${movie.price}
                </span>
                <span
                  className={`text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md shadow-lg ${
                    movie.badge === "HOT"
                      ? "bg-orange-500"
                      : "bg-tickify-purple"
                  }`}
                >
                  {movie.badge}
                </span>
              </div>

              <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md border border-white/20 rounded-lg px-2 py-1.5 flex items-center gap-1.5">
                <Star size={12} className="text-yellow-400 fill-yellow-400" />
                <span className="text-xs font-bold">{movie.rating}</span>
              </div>

              <div className="absolute bottom-6 left-6">
                <button className="bg-tickify-cyan/20 backdrop-blur-md border border-tickify-cyan/30 text-white text-[10px] font-bold px-3 py-1.5 rounded-md flex items-center gap-2">
                  <Bookmark size={12} />
                  Watchlist
                </button>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-tickify-pink transition-colors">
                {movie.title}
              </h3>

              <div className="flex items-center gap-4 text-xs text-gray-500 font-bold mb-4">
                <div className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {movie.duration}
                </div>
                <div className="flex items-center gap-1.5">
                  <Users size={14} />
                  {movie.views}
                </div>
              </div>

              <p className="text-xs font-bold text-tickify-pink uppercase tracking-widest mb-4">
                {movie.genres}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed mb-8 line-clamp-2">
                {movie.desc}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <Calendar size={14} className="text-tickify-pink" />
                  Today Showtimes
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {movie.showtimes.map((time) => (
                    <button
                      key={time}
                      className="bg-white/5 border border-white/10 rounded-lg py-2.5 text-xs font-bold text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                    >
                      {time}
                    </button>
                  ))}
                </div>

                <button className="w-full text-center text-[10px] font-bold text-tickify-cyan hover:underline">
                  +1 more showtimes →
                </button>
              </div>

              {movie.studentFriendly && (
                <div className="mt-6 bg-green-400/5 border border-green-400/20 rounded-xl p-3 flex items-center gap-3">
                  <Zap size={14} className="text-green-400" />
                  <span className="text-[10px] font-bold text-green-400">
                    Student Budget Friendly!
                  </span>
                </div>
              )}

              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => navigate("/theater")}
                  className="flex-1 bg-tickify-pink hover:bg-tickify-pink/90 text-white py-4 rounded-xl font-bold text-sm transition-all shadow-[0_0_20px_rgba(255,0,128,0.3)]"
                >
                  Book Now
                </button>

                <button className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-tickify-pink hover:bg-white/10 transition-all">
                  <Heart size={18} />
                </button>
                <button className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-tickify-cyan hover:bg-white/10 transition-all">
                  <Bookmark size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
