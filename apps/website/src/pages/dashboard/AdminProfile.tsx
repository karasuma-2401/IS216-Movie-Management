import AdminLayout from "../../layouts/AdminLayout.tsx";
import { User, Mail, Shield, Calendar, Edit2, Camera } from "lucide-react";

export default function AdminProfile() {
  const adminData = {
    name: "Admin User",
    email: "admin@tickify.com",
    role: "Super Admin",
    joinedDate: "January 15, 2024",
    avatar: null,
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">
            Admin Profile
          </h1>
          <p className="text-gray-500 font-medium">
            Manage your account settings and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-tickify-card border border-white/5 rounded-[3rem] p-8 text-center">
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 rounded-full bg-tickify-pink/10 flex items-center justify-center text-tickify-pink border-2 border-tickify-pink/30 mx-auto overflow-hidden">
                  <User size={64} />
                </div>
                <button className="absolute bottom-0 right-0 w-10 h-10 bg-tickify-pink rounded-full flex items-center justify-center text-white shadow-lg border-4 border-tickify-bg hover:scale-110 transition-transform">
                  <Camera size={18} />
                </button>
              </div>
              <h2 className="text-2xl font-display font-bold text-white mb-1">
                {adminData.name}
              </h2>
              <p className="text-xs font-black text-tickify-pink uppercase tracking-widest mb-6">
                {adminData.role}
              </p>

              <button className="w-full flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-2xl py-4 text-sm font-bold text-white hover:bg-white/10 transition-all">
                <Edit2 size={16} />
                Edit Profile
              </button>
            </div>

            <div className="bg-tickify-card border border-white/5 rounded-4xl p-6 space-y-4">
              <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
                Account Security
              </h4>
              <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-bold text-gray-400 hover:text-white transition-all flex items-center gap-3">
                <Shield size={16} className="text-tickify-cyan" />
                Change Password
              </button>
              <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-bold text-gray-400 hover:text-white transition-all flex items-center gap-3">
                <Shield size={16} className="text-tickify-purple" />
                Two-Factor Auth
              </button>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-tickify-card border border-white/5 rounded-[3rem] p-10 space-y-8">
              <h3 className="text-xl font-display font-bold">
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <User size={12} /> Full Name
                  </label>
                  <p className="text-sm font-bold text-white bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                    {adminData.name}
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <Mail size={12} /> Email Address
                  </label>
                  <p className="text-sm font-bold text-white bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                    {adminData.email}
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <Shield size={12} /> Role
                  </label>
                  <p className="text-sm font-bold text-white bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                    {adminData.role}
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <Calendar size={12} /> Joined Date
                  </label>
                  <p className="text-sm font-bold text-white bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                    {adminData.joinedDate}
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5">
                <h3 className="text-xl font-display font-bold mb-6">
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  {[
                    "Updated showtime for Deadpool & Wolverine",
                    "Added new cinema location: Riverside Plaza",
                    "Generated monthly analytics report",
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center gap-4 py-3">
                      <div className="w-2 h-2 rounded-full bg-tickify-pink shadow-[0_0_10px_rgba(255,0,128,0.5)]"></div>
                      <p className="text-sm text-gray-400">{activity}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
