import AdminLayout from "../../layouts/AdminLayout";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Dashboard</h1>
          <p className="text-gray-500 font-medium">
            Welcome back, Admin. Here is, what is happening today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Total Revenue", value: "฿124,500", trend: "+12.5%" },
            { label: "Tickets Sold", value: "1,240", trend: "+8.2%" },
            { label: "Active Movies", value: "12", trend: "0%" },
            { label: "Occupancy Rate", value: "78%", trend: "+5.4%" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-tickify-card border border-white/5 rounded-3xl p-8 hover:border-tickify-pink/30 transition-all"
            >
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">
                {stat.label}
              </p>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                {stat.value}
              </h3>
              <p
                className={`text-xs font-bold ${stat.trend.startsWith("+") ? "text-green-400" : "text-gray-400"}`}
              >
                {stat.trend}{" "}
                <span className="text-gray-600 font-medium ml-1">
                  vs last week
                </span>
              </p>
            </div>
          ))}
        </div>

        {/* Placeholder for more content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-tickify-card border border-white/5 rounded-[3rem] p-10 min-h-100">
            <h3 className="text-xl font-display font-bold mb-6">
              Recent Bookings
            </h3>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-4 border-b border-white/5 last:border-0"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5"></div>
                    <div>
                      <p className="text-sm font-bold">User #{1234 + i}</p>
                      <p className="text-xs text-gray-500">
                        Deadpool & Wolverine • 2 seats
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-bold text-tickify-pink">฿300</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-tickify-card border border-white/5 rounded-[3rem] p-10 min-h-100">
            <h3 className="text-xl font-display font-bold mb-6">
              Popular Showtimes
            </h3>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-4 border-b border-white/5 last:border-0"
                >
                  <div>
                    <p className="text-sm font-bold">19:30 - Screen 1</p>
                    <p className="text-xs text-gray-500">
                      The Conjuring 4: Last Rites
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-tickify-cyan">
                      95% Full
                    </p>
                    <p className="text-xs text-gray-500">42/44 seats</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
