"use client"

import { LayoutDashboard, Navigation, AlertCircle, Settings, User, Shield } from "lucide-react"

const navItems = [
  { id: "overview", label: "Bảng Điều Khiển", icon: LayoutDashboard },
  { id: "trips", label: "Chuyến Đi", icon: Navigation },
  { id: "alerts", label: "Cảnh Báo", icon: AlertCircle },
  { id: "settings", label: "Cài Đặt", icon: Settings },
  { id: "profile", label: "Hồ Sơ", icon: User },
]

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <>
      <aside className="hidden md:flex md:w-64 bg-sidebar border-r border-sidebar-border flex-col">
        <div className="w-full p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
              <Shield className="text-primary-foreground font-bold text-lg w-6 h-6" />
            </div>
            <span className="text-lg font-bold text-primary">SafeVision</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 w-full px-4 py-8 space-y-4">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
                  activeTab === item.id
                    ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/20"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="w-full p-6 border-t border-sidebar-border text-left">
          <p className="text-xs text-sidebar-foreground/60">v1.0.0</p>
        </div>
      </aside>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-sidebar border-t border-sidebar-border flex justify-around px-2 py-2 safe-area-inset-bottom z-40">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all flex-1 ${
                activeTab === item.id ? "bg-sidebar-primary text-sidebar-primary-foreground" : "text-sidebar-foreground"
              }`}
              title={item.label}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium text-center line-clamp-1">{item.label}</span>
            </button>
          )
        })}
      </nav>
    </>
  )
}
