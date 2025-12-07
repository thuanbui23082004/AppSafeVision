"use client"

import { Cloud, HardDrive, CheckCircle } from "lucide-react"
import { useState } from "react"

const storageDevices = [
  { name: "Xe Chính (Tesla Model 3)", used: 65, total: 100 },
  { name: "Xe Thứ Hai (Honda CR-V)", used: 32, total: 100 },
  { name: "Lưu Trữ Đám Mây", used: 45, total: 200 },
]

const backupHistory = [
  { timestamp: "Hôm nay 14:32", size: "2.5 GB", status: "Thành Công" },
  { timestamp: "Hôm nay 08:15", size: "2.3 GB", status: "Thành Công" },
  { timestamp: "Hôm qua 20:45", size: "2.4 GB", status: "Thành Công" },
  { timestamp: "Hôm qua 14:20", size: "2.2 GB", status: "Thành Công" },
]

export default function StorageManagement() {
  const [isBackingUp, setIsBackingUp] = useState(false)

  const handleManageStorage = () => {
    console.log("[v0] Storage management dialog opened")
  }

  const handleStartBackup = async () => {
    setIsBackingUp(true)
    console.log("[v0] Starting backup...")
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsBackingUp(false)
    console.log("[v0] Backup completed")
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="safety-card rounded-xl border border-border overflow-hidden">
        <div className="bg-gradient-to-r from-primary/15 to-primary/10 p-4 sm:p-6 border-b border-border">
          <h2 className="text-base sm:text-lg font-semibold flex items-center gap-2 text-primary text-balance">
            <HardDrive className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
            Quản Lý Lưu Trữ
          </h2>
        </div>

        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {storageDevices.map((device, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between mb-2 gap-2">
                <p className="text-xs sm:text-sm font-medium text-foreground truncate">{device.name}</p>
                <p className="text-xs sm:text-sm text-muted-foreground font-semibold whitespace-nowrap">
                  {device.used} / {device.total} GB
                </p>
              </div>
              <div className="w-full h-2 sm:h-3 bg-border rounded-full overflow-hidden border border-border/50">
                <div
                  className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transition-all"
                  style={{ width: `${(device.used / device.total) * 100}%` }}
                />
              </div>
            </div>
          ))}

          <div className="pt-4 sm:pt-6 border-t border-border space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Phân Tích Lưu Trữ</h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <div className="p-3 sm:p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors cursor-pointer">
                <p className="text-xs text-muted-foreground mb-1">Dữ Liệu Chuyến Đi</p>
                <p className="text-base sm:text-lg font-bold text-primary">28.5 GB</p>
              </div>
              <div className="p-3 sm:p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-accent/20 hover:border-accent/40 transition-colors cursor-pointer">
                <p className="text-xs text-muted-foreground mb-1">Video Quay Phim</p>
                <p className="text-base sm:text-lg font-bold text-accent">12.3 GB</p>
              </div>
              <div className="p-3 sm:p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors cursor-pointer">
                <p className="text-xs text-muted-foreground mb-1">Phân Tích</p>
                <p className="text-base sm:text-lg font-bold text-primary">4.2 GB</p>
              </div>
              <div className="p-3 sm:p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-accent/20 hover:border-accent/40 transition-colors cursor-pointer">
                <p className="text-xs text-muted-foreground mb-1">Tập Tin Hệ Thống</p>
                <p className="text-base sm:text-lg font-bold text-accent">1.8 GB</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="safety-card rounded-xl border border-border overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-border bg-accent/5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2 text-accent text-sm sm:text-base">
              <Cloud className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
              Sao Lưu Đám Mây
            </h3>
            <span className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium whitespace-nowrap">
              <CheckCircle className="w-3 h-3" />
              Hoạt Động
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-6 space-y-4">
          <div className="space-y-2">
            <p className="text-xs sm:text-sm text-muted-foreground">Sao lưu lần cuối: Hôm nay lúc 14:32 (2.5 GB)</p>
            <p className="text-xs text-muted-foreground">Sao lưu được lên lịch tiếp theo: Hôm nay lúc 20:00</p>
          </div>

          <div className="border-t border-border pt-4">
            <h4 className="text-xs sm:text-sm font-medium text-foreground mb-3">Sao Lưu Gần Đây</h4>
            <div className="space-y-2 max-h-40 sm:max-h-48 overflow-y-auto">
              {backupHistory.map((backup, idx) => (
                <button
                  key={idx}
                  onClick={() => console.log("[v0] Backup clicked:", backup.timestamp)}
                  className="w-full flex items-center justify-between p-2 sm:p-3 bg-primary/5 rounded-lg text-xs hover:bg-primary/10 transition-colors text-left"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground font-medium truncate">{backup.timestamp}</p>
                    <p className="text-muted-foreground text-xs">{backup.size}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium whitespace-nowrap flex-shrink-0 ml-2">
                    <CheckCircle className="w-3 h-3" />
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <button
              onClick={handleStartBackup}
              disabled={isBackingUp}
              className="flex-1 px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 disabled:bg-accent/50 disabled:cursor-not-allowed transition-colors text-xs sm:text-sm font-medium active:scale-95"
            >
              {isBackingUp ? "Đang Sao Lưu..." : "Sao Lưu Ngay"}
            </button>
            <button
              onClick={handleManageStorage}
              className="flex-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-xs sm:text-sm font-medium active:scale-95"
            >
              Quản Lý Lưu Trữ
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
