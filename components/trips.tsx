"use client"

import { MapPin, Clock, Zap, TrendingUp, AlertTriangle } from "lucide-react"
import { useState } from "react"

const trips = [
  {
    id: 1,
    date: "12 Thg 11, 2025",
    route: "Trung Tâm → Sân Bay",
    distance: "24.5 km",
    duration: "45 phút",
    warnings: 3,
    speed: "62 km/h",
    status: "Hoàn Thành",
  },
  {
    id: 2,
    date: "11 Thg 11, 2025",
    route: "Văn Phòng → Nhà",
    distance: "18.2 km",
    duration: "32 phút",
    warnings: 1,
    speed: "54 km/h",
    status: "Hoàn Thành",
  },
  {
    id: 3,
    date: "10 Thg 11, 2025",
    route: "Trung Tâm Mua Sắm → Nhà Hàng",
    distance: "12.8 km",
    duration: "28 phút",
    warnings: 0,
    speed: "46 km/h",
    status: "Hoàn Thành",
  },
  {
    id: 4,
    date: "09 Thg 11, 2025",
    route: "Nhà → Phòng Tập Gym",
    distance: "8.5 km",
    duration: "18 phút",
    warnings: 2,
    speed: "50 km/h",
    status: "Hoàn Thành",
  },
  {
    id: 5,
    date: "08 Thg 11, 2025",
    route: "Trường → Nhà",
    distance: "22.3 km",
    duration: "42 phút",
    warnings: 4,
    speed: "58 km/h",
    status: "Hoàn Thành",
  },
  {
    id: 6,
    date: "07 Thg 11, 2025",
    route: "Trung Tâm → Bãi Biển",
    distance: "35.7 km",
    duration: "58 phút",
    warnings: 5,
    speed: "61 km/h",
    status: "Hoàn Thành",
  },
]

const tripStats = [
  { label: "Tổng Chuyến Đi", value: "87", icon: MapPin },
  { label: "Tổng Quãng Đường", value: "1.245 km", icon: TrendingUp },
  { label: "Thời Lượng Trung Bình", value: "42 phút", icon: Clock },
  { label: "Điểm Số An Toàn", value: "92%", icon: Zap },
]

export default function Trips() {
  const [selectedTrip, setSelectedTrip] = useState(null)

  const handleTripClick = (trip) => {
    setSelectedTrip(trip)
    console.log("[v0] Trip selected:", trip.route)
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
        {tripStats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div
              key={idx}
              className="safety-card p-4 sm:p-6 rounded-xl border border-border hover:border-primary/30 transition-colors cursor-pointer text-center"
            >
              <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-primary/30 mx-auto mb-2" />
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-lg sm:text-2xl font-bold text-primary">{stat.value}</p>
            </div>
          )
        })}
      </div>

      <div className="safety-card rounded-xl border border-border overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-border bg-primary/5">
          <h2 className="text-base sm:text-xl font-semibold text-foreground flex items-center gap-2 text-balance">
            <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0" />
            Chuyến Đi Gần Đây
          </h2>
        </div>

        {/* Mobile Card Layout */}
        <div className="md:hidden p-4 space-y-3">
          {trips.map((trip) => (
            <button
              key={trip.id}
              onClick={() => handleTripClick(trip)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selectedTrip?.id === trip.id
                  ? "bg-primary/10 border-primary/50"
                  : "bg-primary/5 border-border/50 hover:border-primary/30"
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground text-sm truncate">{trip.route}</p>
                    <p className="text-xs text-muted-foreground mt-1">{trip.date}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium whitespace-nowrap flex-shrink-0">
                    {trip.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <span>📏 {trip.distance}</span>
                  <span>⏱️ {trip.duration}</span>
                  <span>🚗 {trip.speed}</span>
                </div>
                <div className="pt-2 border-t border-primary/10 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Cảnh báo:</span>
                  {trip.warnings === 0 && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                      0
                    </span>
                  )}
                  {trip.warnings > 0 && trip.warnings <= 2 && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">
                      <AlertTriangle className="w-3 h-3" />
                      {trip.warnings}
                    </span>
                  )}
                  {trip.warnings > 2 && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-100 text-red-700 text-xs font-medium">
                      <AlertTriangle className="w-3 h-3" />
                      {trip.warnings}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Desktop Table Layout */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-primary/5 border-b border-border">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-foreground">Ngày</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-foreground">Tuyến Đường</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-foreground">Quãng Đường</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-foreground">Thời Lượng</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-foreground">Vận Tốc TB</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-foreground">Cảnh Báo</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-foreground">Trạng Thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {trips.map((trip) => (
                <tr
                  key={trip.id}
                  onClick={() => handleTripClick(trip)}
                  className={`cursor-pointer transition-colors ${
                    selectedTrip?.id === trip.id ? "bg-primary/10" : "hover:bg-primary/3"
                  }`}
                >
                  <td className="px-6 py-4 text-xs sm:text-sm text-foreground font-medium">{trip.date}</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-foreground font-semibold">{trip.route}</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-muted-foreground">{trip.distance}</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-muted-foreground">{trip.duration}</td>
                  <td className="px-6 py-4 text-xs sm:text-sm text-muted-foreground">{trip.speed}</td>
                  <td className="px-6 py-4">
                    {trip.warnings === 0 && (
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                        0
                      </span>
                    )}
                    {trip.warnings > 0 && trip.warnings <= 2 && (
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">
                        <AlertTriangle className="w-3 h-3" />
                        {trip.warnings}
                      </span>
                    )}
                    {trip.warnings > 2 && (
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-medium">
                        <AlertTriangle className="w-3 h-3" />
                        {trip.warnings}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-xs sm:text-sm">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                      {trip.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
