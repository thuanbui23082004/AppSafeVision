"use client"

import { TrendingUp, Clock, Map } from "lucide-react"
import { useState } from "react"

const routes = [
  { id: 1, name: "Tuyến Đường Trung Tâm", distance: "42.5 km", duration: "1h 15m", date: "Hôm nay", safety: "92%" },
  { id: 2, name: "Đường Cao Tốc 101", distance: "65.3 km", duration: "1h 32m", date: "Hôm qua", safety: "88%" },
  { id: 3, name: "Đường Khu Ngoại Ô", distance: "28.7 km", duration: "45m", date: "Hôm qua", safety: "95%" },
  { id: 4, name: "Vòng Núi", distance: "52.1 km", duration: "1h 8m", date: "2 ngày trước", safety: "85%" },
  { id: 5, name: "Trung Tâm Thành Phố", distance: "15.4 km", duration: "35m", date: "3 ngày trước", safety: "90%" },
]

export default function JourneyMap() {
  const [selectedRoute, setSelectedRoute] = useState(null)

  const handleRouteClick = (route) => {
    setSelectedRoute(route)
    console.log("[v0] Route selected:", route.name)
  }

  return (
    <div className="safety-card rounded-xl border border-border overflow-hidden">
      <div className="bg-gradient-to-r from-primary/15 via-accent/10 to-primary/15 p-4 sm:p-6 border-b border-border">
        <h2 className="text-base sm:text-lg font-semibold flex items-center gap-2 text-primary text-balance">
          <Map className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
          Bản Đồ Lịch Sử Hành Trình
        </h2>
      </div>

      <div className="p-4 sm:p-6">
        <div className="w-full h-48 sm:h-64 lg:h-80 bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-lg border-2 border-primary/20 flex items-center justify-center relative overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 320">
            <path
              d="M50,50 Q200,100 350,150"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-primary"
            />
            <path d="M50,150 L350,250" stroke="currentColor" strokeWidth="3" fill="none" className="text-accent" />
            <circle cx="50" cy="50" r="8" fill="currentColor" className="text-primary" />
            <circle cx="350" cy="150" r="8" fill="currentColor" className="text-primary" />
            <circle cx="350" cy="250" r="8" fill="currentColor" className="text-accent" />
          </svg>

          <div className="relative z-10 text-center px-4">
            <p className="text-foreground font-semibold text-sm sm:text-base">Bản Đồ Tuyến Đường Tương Tác</p>
            <p className="text-muted-foreground text-xs sm:text-sm mt-1">12 hành trình được theo dõi</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4 sm:mt-6">
          <div className="p-3 sm:p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
            <p className="text-xs text-muted-foreground mb-1">Tổng Quãng Đường</p>
            <p className="text-lg sm:text-2xl font-bold text-primary">248.5 km</p>
          </div>
          <div className="p-3 sm:p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-accent/20">
            <p className="text-xs text-muted-foreground mb-1">Chuyến Đi</p>
            <p className="text-lg sm:text-2xl font-bold text-accent">12</p>
          </div>
          <div className="p-3 sm:p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
            <p className="text-xs text-muted-foreground mb-1">Vận Tốc TB</p>
            <p className="text-lg sm:text-2xl font-bold text-primary">65 km/h</p>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 space-y-2">
          <h3 className="text-sm font-semibold text-foreground mb-3">Tuyến Đường Gần Đây</h3>
          {routes.map((route) => (
            <button
              key={route.id}
              onClick={() => handleRouteClick(route)}
              className={`w-full p-3 sm:p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border transition-all cursor-pointer text-left text-sm sm:text-base ${
                selectedRoute?.id === route.id
                  ? "border-primary/50 bg-primary/10"
                  : "border-border/50 hover:border-primary/30 hover:bg-primary/5"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground truncate">{route.name}</p>
                  <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground flex-wrap">
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-primary flex-shrink-0" />
                      {route.distance}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-primary flex-shrink-0" />
                      {route.duration}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  <span className="text-xs text-muted-foreground bg-background px-2 py-1 rounded whitespace-nowrap">
                    {route.date}
                  </span>
                  <span className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium whitespace-nowrap">
                    {route.safety}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
