"use client"

import { AlertTriangle, AlertCircle, Info, Clock, MapPin, Gauge } from "lucide-react"
import { useState } from "react"

const alerts = [
  {
    id: 1,
    type: "Tới Hạn",
    title: "Rủi Ro Va Chạm Tốc Độ Cao",
    description: "Phát hiện xe cách 50m ở giao lộ. Giảm tốc độ ngay lập tức.",
    location: "Đường Chính & Đại Lộ 5",
    time: "2 phút trước",
    severity: "critical",
    icon: AlertTriangle,
  },
  {
    id: 2,
    type: "Cảnh Báo",
    title: "Phát Hiện Người Đi Bộ Qua Đường",
    description: "Người đi bộ qua đường phía trước. Chuẩn bị phanh.",
    location: "Quận Trung Tâm",
    time: "5 phút trước",
    severity: "warning",
    icon: AlertCircle,
  },
  {
    id: 3,
    type: "Cảnh Báo",
    title: "Cua Cấp Trước",
    description: "Đường cua cấp trong 100m. Giảm tốc độ dần dần.",
    location: "Đường Cao Tốc 101 Hướng Bắc",
    time: "12 phút trước",
    severity: "warning",
    icon: AlertCircle,
  },
  {
    id: 4,
    type: "Thông Tin",
    title: "Tắc Đường",
    description: "Phát hiện tắc đường nặng trên tuyến đường thường lệ của bạn.",
    location: "Vòng Lặp Trung Tâm",
    time: "18 phút trước",
    severity: "info",
    icon: Info,
  },
  {
    id: 5,
    type: "Tới Hạn",
    title: "Phát Hiện Xe Cứu Thương",
    description: "Xe cứu thương tiếp cận. Giải phóng đường.",
    location: "Tiếp Cận Bệnh Viện",
    time: "25 phút trước",
    severity: "critical",
    icon: AlertTriangle,
  },
  {
    id: 6,
    type: "Thông Tin",
    title: "Giới Hạn Tốc Độ Thay Đổi",
    description: "Giới hạn tốc độ thay đổi thành 40 km/h trong khu vực này.",
    location: "Khu Trường Học",
    time: "35 phút trước",
    severity: "info",
    icon: Gauge,
  },
]

const alertStats = [
  { label: "Hôm Nay", value: "8", color: "text-red-600" },
  { label: "Tuần Này", value: "34", color: "text-orange-600" },
  { label: "Tháng Này", value: "127", color: "text-yellow-600" },
  { label: "Tới Hạn Được Tránh", value: "12", color: "text-green-600" },
]

export default function Alerts() {
  const [selectedAlert, setSelectedAlert] = useState(null)
  const [dismissedAlerts, setDismissedAlerts] = useState([])

  const handleAlertClick = (alert) => {
    setSelectedAlert(alert)
    console.log("[v0] Alert selected:", alert.title)
  }

  const handleDismissAlert = (alertId, e) => {
    e.stopPropagation()
    setDismissedAlerts([...dismissedAlerts, alertId])
    console.log("[v0] Alert dismissed:", alertId)
  }

  const visibleAlerts = alerts.filter((a) => !dismissedAlerts.includes(a.id))

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
        {alertStats.map((stat, idx) => (
          <div
            key={idx}
            className="safety-card p-4 sm:p-6 rounded-xl border border-border hover:border-primary/30 transition-colors cursor-pointer text-center"
          >
            <p className="text-xs sm:text-sm text-muted-foreground mb-1">{stat.label}</p>
            <p className={`text-lg sm:text-3xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Alerts List */}
      <div className="space-y-4">
        <h2 className="text-base sm:text-xl font-semibold text-foreground flex items-center gap-2">
          <AlertTriangle className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0" />
          Cảnh Báo Gần Đây ({visibleAlerts.length})
        </h2>
        <div className="space-y-3 sm:space-y-4">
          {visibleAlerts.map((alert) => {
            const Icon = alert.icon
            return (
              <button
                key={alert.id}
                onClick={() => handleAlertClick(alert)}
                className={`w-full text-left safety-card p-4 sm:p-6 rounded-xl border-2 transition-all ${
                  alert.severity === "critical"
                    ? "bg-destructive/5 border-destructive/30 hover:border-destructive/50"
                    : alert.severity === "warning"
                      ? "bg-warning/5 border-warning/30 hover:border-warning/50"
                      : "bg-info/5 border-info/30 hover:border-info/50"
                } ${selectedAlert?.id === alert.id ? "ring-2 ring-primary/50" : ""}`}
              >
                <div className="flex gap-3 sm:gap-4">
                  <div
                    className={`flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center ${
                      alert.severity === "critical"
                        ? "bg-destructive/20"
                        : alert.severity === "warning"
                          ? "bg-warning/20"
                          : "bg-info/20"
                    }`}
                  >
                    <Icon
                      className={`w-5 sm:w-6 h-5 sm:h-6 ${
                        alert.severity === "critical"
                          ? "text-destructive"
                          : alert.severity === "warning"
                            ? "text-warning"
                            : "text-info"
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-foreground text-sm sm:text-base">{alert.title}</h3>
                      {alert.severity === "critical" && (
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-red-100 text-red-700 whitespace-nowrap flex-shrink-0">
                          {alert.type}
                        </span>
                      )}
                      {alert.severity === "warning" && (
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-amber-100 text-amber-700 whitespace-nowrap flex-shrink-0">
                          {alert.type}
                        </span>
                      )}
                      {alert.severity === "info" && (
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700 whitespace-nowrap flex-shrink-0">
                          {alert.type}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">{alert.description}</p>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs text-muted-foreground border-t border-primary/10 pt-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 sm:w-4 h-3 sm:h-4 text-primary flex-shrink-0" />
                        <span className="truncate">{alert.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 sm:w-4 h-3 sm:h-4 text-primary flex-shrink-0" />
                        {alert.time}
                      </div>
                      <button
                        onClick={(e) => handleDismissAlert(alert.id, e)}
                        className="text-xs font-medium px-2 py-1 rounded bg-muted hover:bg-muted/80 transition-colors ml-auto flex-shrink-0"
                      >
                        Loại Bỏ
                      </button>
                    </div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
