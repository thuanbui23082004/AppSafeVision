"use client"

import { Mail, Phone, MapPin, Car, Award, Shield, LogOut, Edit, Zap } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [showSignOutConfirm, setShowSignOutConfirm] = useState(false)

  const handleEditProfile = () => {
    setIsEditing(!isEditing)
    console.log("[v0] Profile edit toggled:", !isEditing)
  }

  const handleSignOut = () => {
    console.log("[v0] User signed out")
    setShowSignOutConfirm(false)
  }

  const profileData = {
    name: "Nguyễn Thanh Hùng",
    email: "hung.nguyen@email.com",
    phone: "+84 (090) 123-4567",
    location: "Thành Phố Hồ Chí Minh, Việt Nam",
    joinDate: "15 Tháng 1, 2024",
    vehicleType: "Tesla Model 3",
    licenseNumber: "DL456789",
    safetyRating: "4.8/5.0",
    tripsCompleted: 87,
    milesRecorded: 1245,
    collisionsAvoided: 12,
  }

  const achievements = [
    { icon: Shield, title: "Lái Xe An Toàn", description: "Hoàn thành 50+ chuyến đi không có sự cố" },
    { icon: Award, title: "Nhà Vô Địch Tiết Kiệm Xăng", description: "Duy trì vận tốc trung bình dưới 60 km/h" },
    { icon: Car, title: "Anh Hùng Cột Mốc", description: "Ghi lại hơn 1000 km lái xe an toàn" },
  ]

  return (
    <div className="space-y-4 sm:space-y-6 max-w-4xl">
      {/* Sign Out Confirmation */}
      {showSignOutConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 rounded-lg p-4">
          <div className="bg-background rounded-lg p-6 max-w-sm border border-border shadow-lg">
            <h3 className="text-lg font-semibold text-foreground mb-2">Đăng Xuất?</h3>
            <p className="text-sm text-muted-foreground mb-6">Bạn có chắc chắn muốn đăng xuất khỏi SafeVision?</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowSignOutConfirm(false)}
                className="flex-1 px-4 py-2 rounded-lg bg-muted text-muted-foreground hover:bg-muted/80 transition-colors font-medium text-sm"
              >
                Hủy
              </button>
              <button
                onClick={handleSignOut}
                className="flex-1 px-4 py-2 rounded-lg bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors font-medium active:scale-95 text-sm"
              >
                Đăng Xuất
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="safety-card rounded-xl border border-border p-4 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
          <button
            onClick={() => console.log("[v0] Avatar clicked")}
            className="w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer active:scale-95 flex-shrink-0"
          >
            <span className="text-white text-3xl sm:text-4xl font-bold">NTH</span>
          </button>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{profileData.name}</h1>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Thành Viên SafeVision Kể Từ {profileData.joinDate}
            </p>
            <div className="flex items-center gap-2 mt-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => console.log("[v0] Rating clicked")}
                    className="text-warning text-lg hover:scale-110 transition-transform"
                  >
                    ★
                  </button>
                ))}
              </div>
              <span className="text-xs sm:text-sm font-medium text-foreground ml-2">{profileData.safetyRating}</span>
            </div>
          </div>
          <button
            onClick={handleEditProfile}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center gap-2 font-medium active:scale-95 text-xs sm:text-sm w-full sm:w-auto"
          >
            <Edit className="w-4 h-4 flex-shrink-0" />
            {isEditing ? "Lưu" : "Chỉnh Sửa Hồ Sơ"}
          </button>
        </div>
      </div>

      {/* Contact Information */}
      <div className="safety-card rounded-xl border border-border p-4 sm:p-6">
        <h2 className="text-base sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">Thông Tin Liên Hệ</h2>
        <div className="space-y-3 sm:space-y-4">
          <button
            onClick={() => console.log("[v0] Email clicked:", profileData.email)}
            className="w-full flex items-center gap-4 p-3 sm:p-4 rounded-lg bg-primary/5 border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-colors text-left"
          >
            <Mail className="w-5 h-5 text-primary flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
              <p className="font-medium text-foreground text-sm truncate">{profileData.email}</p>
            </div>
          </button>
          <button
            onClick={() => console.log("[v0] Phone clicked:", profileData.phone)}
            className="w-full flex items-center gap-4 p-3 sm:p-4 rounded-lg bg-primary/5 border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-colors text-left"
          >
            <Phone className="w-5 h-5 text-primary flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-muted-foreground">Điện Thoại</p>
              <p className="font-medium text-foreground text-sm">{profileData.phone}</p>
            </div>
          </button>
          <button
            onClick={() => console.log("[v0] Location clicked:", profileData.location)}
            className="w-full flex items-center gap-4 p-3 sm:p-4 rounded-lg bg-primary/5 border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-colors text-left"
          >
            <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-muted-foreground">Vị Trí</p>
              <p className="font-medium text-foreground text-sm">{profileData.location}</p>
            </div>
          </button>
        </div>
      </div>

      {/* Vehicle Information */}
      <div className="safety-card rounded-xl border border-border p-4 sm:p-6">
        <h2 className="text-base sm:text-xl font-semibold text-foreground mb-4 sm:mb-6 flex items-center gap-2">
          <Car className="w-5 h-5 text-accent flex-shrink-0" />
          Thông Tin Phương Tiện
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <Label className="text-xs sm:text-sm font-medium text-muted-foreground">Loại Phương Tiện</Label>
            <Input
              value={profileData.vehicleType}
              className="mt-2 h-9 sm:h-10 rounded-lg border border-accent/30 bg-accent/5 text-xs sm:text-sm"
              readOnly
            />
          </div>
          <div>
            <Label className="text-xs sm:text-sm font-medium text-muted-foreground">Số Giấy Phép Lái</Label>
            <Input
              value={profileData.licenseNumber}
              className="mt-2 h-9 sm:h-10 rounded-lg border border-accent/30 bg-accent/5 text-xs sm:text-sm"
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <button
          onClick={() => console.log("[v0] Trips stat clicked")}
          className="safety-card rounded-xl border border-border p-4 sm:p-6 text-center bg-gradient-to-br from-primary/10 to-primary/5 hover:border-primary/40 transition-colors active:scale-95"
        >
          <p className="text-2xl sm:text-3xl font-bold text-primary">{profileData.tripsCompleted}</p>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2">Chuyến Đi Hoàn Thành</p>
        </button>
        <button
          onClick={() => console.log("[v0] Miles stat clicked")}
          className="safety-card rounded-xl border border-border p-4 sm:p-6 text-center bg-gradient-to-br from-accent/10 to-accent/5 hover:border-accent/40 transition-colors active:scale-95"
        >
          <p className="text-2xl sm:text-3xl font-bold text-accent">{profileData.milesRecorded}</p>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2">Quãng Đường Ghi Nhận</p>
        </button>
        <button
          onClick={() => console.log("[v0] Collisions averted stat clicked")}
          className="safety-card rounded-xl border border-border p-4 sm:p-6 text-center bg-gradient-to-br from-primary/10 to-primary/5 hover:border-primary/40 transition-colors active:scale-95"
        >
          <p className="text-2xl sm:text-3xl font-bold text-primary flex items-center justify-center gap-2">
            <Zap className="w-5 sm:w-6 h-5 sm:h-6" />
            {profileData.collisionsAvoided}
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2">Va Chạm Được Tránh</p>
        </button>
      </div>

      {/* Achievements */}
      <div className="safety-card rounded-xl border border-border p-4 sm:p-6">
        <h2 className="text-base sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">Thành Tích</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon
            return (
              <button
                key={idx}
                onClick={() => console.log("[v0] Achievement clicked:", achievement.title)}
                className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-colors text-left active:scale-95"
              >
                <Icon className="w-7 sm:w-8 h-7 sm:h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground text-sm sm:text-base">{achievement.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{achievement.description}</p>
              </button>
            )
          })}
        </div>
      </div>

      {/* Danger Zone */}
      <div className="safety-card rounded-xl border border-destructive/30 bg-destructive/5 p-4 sm:p-6">
        <h2 className="text-base sm:text-xl font-semibold text-destructive mb-4">Khu Nguy Hiểm</h2>
        <button
          onClick={() => setShowSignOutConfirm(true)}
          className="px-4 py-2 rounded-lg bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors flex items-center gap-2 font-medium active:scale-95 text-sm w-full sm:w-auto"
        >
          <LogOut className="w-4 h-4" />
          Đăng Xuất
        </button>
      </div>
    </div>
  )
}
