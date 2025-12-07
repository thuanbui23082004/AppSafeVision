"use client"

import { useState } from "react"
import { Activity, Shield } from "lucide-react"
import Sidebar from "./sidebar"
import JourneyMap from "./journey-map"
import CollisionLog from "./collision-log"
import Statistics from "./statistics"
import StorageManagement from "./storage-management"
import Trips from "./trips"
import Alerts from "./alerts"
import Settings from "./settings"
import Profile from "./profile"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [toastMessage, setToastMessage] = useState("")

  const handleStartJourney = () => {
    setToastMessage("Hành trình đã bắt đầu! Lái xe an toàn.")
    setTimeout(() => setToastMessage(""), 3000)
    console.log("[v0] Journey started")
  }

  return (
    <div className="flex flex-col h-screen bg-background md:flex-row">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 overflow-auto pb-24 md:pb-0">
        <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
          {/* Toast Notification */}
          {toastMessage && (
            <div className="fixed top-6 right-6 bg-primary text-primary-foreground px-4 sm:px-6 py-3 rounded-lg shadow-lg animate-pulse z-50 text-sm sm:text-base">
              {toastMessage}
            </div>
          )}

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 sm:p-3 rounded-lg bg-primary text-primary-foreground">
                <Shield className="w-5 sm:w-6 h-5 sm:h-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold header-gradient text-balance">
                  Bảng Điều Khiển SafeVision
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Hệ Thống Cảnh Báo Va Chạm</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-accent/10 text-accent text-sm sm:text-base">
                <Activity className="w-4 h-4" />
                <span className="font-medium">Hoạt Động</span>
              </div>
              <button
                onClick={handleStartJourney}
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium active:scale-95 text-sm sm:text-base"
              >
                Bắt Đầu Hành Trình
              </button>
            </div>
          </div>

          {/* Main Content */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                <JourneyMap />
                <CollisionLog />
              </div>
              <div className="space-y-4 sm:space-y-6">
                <Statistics />
                <StorageManagement />
              </div>
            </div>
          )}

          {activeTab === "trips" && <Trips />}

          {activeTab === "alerts" && <Alerts />}

          {activeTab === "settings" && <Settings />}

          {activeTab === "profile" && <Profile />}
        </div>
      </main>
    </div>
  )
}
