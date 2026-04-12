import { 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Download, 
  Mail, 
  Phone, 
  Info,
  Ticket
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

export default function BookingConfirmation() {
  const navigate = useNavigate();
  const bookingId = "TKF1775921022877";

  return (
    <div className="pb-20">
      <BookingSteps currentStep={6} steps={STEPS} />

      <div className="max-w-3xl mx-auto px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-tickify-card/30 border border-green-500/20 rounded-[3rem] p-12 text-center mb-8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-green-500/50 to-transparent"></div>
          
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 12, delay: 0.2 }}
            className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 size={48} className="text-green-500" />
          </motion.div>
          
          <h1 className="text-4xl font-display font-bold text-green-500 mb-2">Booking Confirmed!</h1>
          <p className="text-gray-400 font-medium mb-6">Your movie tickets have been successfully booked.</p>
          
          <div className="inline-block bg-white/5 border border-white/10 rounded-full px-6 py-2">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest mr-2">Booking ID:</span>
            <span className="text-xs font-bold text-white">{bookingId}</span>
          </div>
        </motion.div>

        {/* Booking Details Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-tickify-card/30 border border-white/5 rounded-[3rem] p-8 md:p-12 mb-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <Ticket size={20} className="text-tickify-pink" />
            <h2 className="text-sm font-black uppercase tracking-widest">Booking Details</h2>
          </div>

          <div className="space-y-8">
            {/* Movie Info */}
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Deadpool & Wolverine</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Calendar size={18} className="text-tickify-pink" />
                  <span>Today, 10:00 AM</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <MapPin size={18} className="text-tickify-pink" />
                  <span>Tickify Cinema Central Plaza</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Users size={18} className="text-tickify-pink" />
                  <span>2 Tickets</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Clock size={18} className="text-tickify-pink" />
                  <span>127 min</span>
                </div>
              </div>
            </div>

            {/* Seats */}
            <div className="border-t border-white/5 pt-8">
              <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Selected Seats</h4>
              <div className="flex gap-4">
                <div className="bg-tickify-purple/10 border border-tickify-purple/20 rounded-xl px-4 py-3 flex items-center justify-between w-full max-w-45">
                  <span className="text-sm font-bold">D10</span>
                  <span className="text-[10px] font-bold text-tickify-purple uppercase tracking-widest">premium</span>
                </div>
                <div className="bg-tickify-purple/10 border border-tickify-purple/20 rounded-xl px-4 py-3 flex items-center justify-between w-full max-w-45">
                  <span className="text-sm font-bold">D11</span>
                  <span className="text-[10px] font-bold text-tickify-purple uppercase tracking-widest">premium</span>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-8">
              <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Payment Summary</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Tickets (2x)</span>
                  <span className="font-bold">฿720</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Service Fee</span>
                  <span className="font-bold">฿25</span>
                </div>
                <div className="flex justify-between pt-4 border-t border-white/5">
                  <span className="text-lg font-bold">Total Paid</span>
                  <span className="text-xl font-display font-bold text-tickify-pink">฿745</span>
                </div>
              </div>
            </div>


            <div className="bg-white rounded-3xl p-8 text-tickify-bg">
              <div className="flex items-center gap-3 mb-4">
                <Info size={20} className="text-tickify-pink" />
                <h4 className="text-sm font-black uppercase tracking-widest">Important Information</h4>
              </div>
              <ul className="space-y-2">
                {[
                  "Please arrive at least 15 minutes before showtime",
                  "Bring a valid ID for verification",
                  "No outside food or drinks allowed",
                  "Tickets are non-transferable and non-refundable after 2 hours before showtime"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs font-bold leading-relaxed">
                    <div className="w-1 h-1 rounded-full bg-tickify-pink mt-1.5 shrink-0"></div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <button className="bg-tickify-pink text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,0,128,0.3)] hover:shadow-[0_0_30px_rgba(255,0,128,0.5)] transition-all">
            <Download size={18} />
            Download Ticket
          </button>
          <button className="bg-white/5 border border-white/10 text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
            <Mail size={18} />
            Email Ticket
          </button>
        </div>

        <button 
          onClick={() => navigate("/movies")}
          className="w-full py-4 rounded-2xl font-bold text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all mb-16"
        >
          Book Another Movie
        </button>

        <div className="text-center space-y-4">
          <h4 className="text-lg font-display font-bold">Need Help?</h4>
          <p className="text-xs text-gray-500">Contact our customer support for any questions about your booking.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-2">
            <a href="mailto:support@tickify.com" className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-tickify-pink transition-colors">
              <Mail size={16} />
              support@tickify.com
            </a>
            <a href="tel:+6621234567" className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-tickify-pink transition-colors">
              <Phone size={16} />
              +66 2 123 4567
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
