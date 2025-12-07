"use client"

import { AlertTriangle, AlertCircle, TrendingDown } from "lucide-react"

const collisions = [
  {
    id: 1,
    date: "Hôm nay 14:32",
    location: "Đường Chính & Đại Lộ 5",
    severity: "high",
    speed: "65 km/h",
    type: "Xe phía trước",
  },
  {
    id: 2,
    date: "Hôm nay 11:15",
    location: "Lối Ra 42 Đường Cao Tốc 101",
    severity: "medium",
    speed: "78 km/h",
    type: "Rủi ro cua",
  },
  {
    id: 3,
    date: "Hôm nay 08:45",
    location: "Đường Công Viên Riverside",
    severity: "low",
    speed: "35 km/h",
    type: "Người đi bộ gần đó",
  },
  {
    id: 4,
    date: "Hôm qua 19:45",
    location: "Quận Trung Tâm",
    severity: "low",
    speed: "45 km/h",
    type: "Phát hiện hố",
  },
  {
    id: 5,
    date: "Hôm qua 14:20",
    location: "Khu Công Nghiệp",
    severity: "medium",
    speed: "52 km/h",
    type: "Tắc đường",
  },
  {
    id: 6,
    date: "Hôm qua 08:20",
    location: "Khu Dân Cư",
    severity: "high",
    speed: "62 km/h",
    type: "Người đi bộ qua đường",
  },
  {
    id: 7,
    date: "2 ngày trước 16:10",
    location: "Trung Tâm Mua Sắm",
    severity: "medium",
    speed: "28 km/h",
    type: "Phát hiện xe đạp",
  },
  {
    id: 8,
    date: "2 ngày trước 09:55",
    location: "Cầu Vượt",
    severity: "low",
    speed: "88 km/h",
    type: "Cảnh báo thời tiết",
  },
]

export default function CollisionLog() {
  return (
    <div className="safety-card rounded-xl border border-border overflow-hidden">
      <div className="bg-gradient-to-r from-accent/15 via-primary/10 to-accent/15 p-4 sm:p-6 border-b border-border">
        <h2 className="text-base sm:text-lg font-semibold flex items-center gap-2 text-accent text-balance">
          <AlertTriangle className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
          Nhật Ký Cảnh Báo & Va Chạm
        </h2>
      </div>

      <div className="overflow-x-auto">
        <div className="hidden md:block">
          <table className="w-full text-sm">
            <thead className="border-b border-border bg-primary/5">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left font-semibold text-foreground text-xs sm:text-sm">
                  Ngày & Giờ
                </th>
                <th className="px-4 sm:px-6 py-3 text-left font-semibold text-foreground text-xs sm:text-sm">Vị Trí</th>
                <th className="px-4 sm:px-6 py-3 text-left font-semibold text-foreground text-xs sm:text-sm">Loại</th>
                <th className="px-4 sm:px-6 py-3 text-left font-semibold text-foreground text-xs sm:text-sm">Mức Độ</th>
                <th className="px-4 sm:px-6 py-3 text-left font-semibold text-foreground text-xs sm:text-sm">
                  Vận Tốc
                </th>
              </tr>
            </thead>
            <tbody>
              {collisions.map((collision) => (
                <tr key={collision.id} className="border-b border-border/50 hover:bg-primary/3 transition-colors">
                  <td className="px-4 sm:px-6 py-4 text-foreground text-xs sm:text-sm">{collision.date}</td>
                  <td className="px-4 sm:px-6 py-4 text-foreground text-xs sm:text-sm">{collision.location}</td>
                  <td className="px-4 sm:px-6 py-4 text-foreground text-xs">{collision.type}</td>
                  <td className="px-4 sm:px-6 py-4">
                    {collision.severity === "high" && (
                      <span className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-semibold">
                        <AlertTriangle className="w-3 h-3" />
                        Cao
                      </span>
                    )}
                    {collision.severity === "medium" && (
                      <span className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">
                        <AlertCircle className="w-3 h-3" />
                        Trung Bình
                      </span>
                    )}
                    {collision.severity === "low" && (
                      <span className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
                        <AlertCircle className="w-3 h-3" />
                        Thấp
                      </span>
                    )}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-foreground font-medium text-xs sm:text-sm">
                    {collision.speed}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card Layout */}
        <div className="md:hidden p-4 space-y-3">
          {collisions.map((collision) => (
            <div key={collision.id} className="p-3 bg-primary/5 border border-primary/20 rounded-lg space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-xs font-medium text-foreground">{collision.date}</p>
                  <p className="text-xs text-muted-foreground mt-1">{collision.location}</p>
                </div>
                {collision.severity === "high" && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-100 text-red-700 text-xs font-semibold flex-shrink-0">
                    <AlertTriangle className="w-3 h-3" />
                    Cao
                  </span>
                )}
                {collision.severity === "medium" && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold flex-shrink-0">
                    <AlertCircle className="w-3 h-3" />
                    TB
                  </span>
                )}
                {collision.severity === "low" && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold flex-shrink-0">
                    <AlertCircle className="w-3 h-3" />
                    Thấp
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-primary/10">
                <span>{collision.type}</span>
                <span className="font-medium">{collision.speed}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary/5 px-4 sm:px-6 py-3 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm gap-2">
        <p className="text-muted-foreground text-xs sm:text-sm">
          Tổng cảnh báo: <span className="font-semibold text-foreground">8</span>
        </p>
        <p className="text-muted-foreground flex items-center gap-1 text-xs sm:text-sm">
          <TrendingDown className="w-4 h-4 text-green-600" />
          <span className="font-semibold text-green-600">Sự kiện tới hạn: 2</span>
        </p>
      </div>
    </div>
  )
}
