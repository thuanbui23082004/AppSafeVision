"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { Bell, Lock, Volume2, Gauge } from "lucide-react"

const settingSections = [
  {
    title: "Cảnh Báo An Toàn",
    icon: Bell,
    settings: [
      { name: "Cảnh Báo Tốc Độ", enabled: true, description: "Cảnh báo khi vượt quá giới hạn tốc độ" },
      { name: "Phát Hiện Va Chạm", enabled: true, description: "Thông báo va chạm tiềm ẩn" },
      { name: "Cảnh Báo Người Đi Bộ", enabled: true, description: "Cảnh báo qua đường người đi bộ" },
      { name: "Xe Cứu Thương", enabled: true, description: "Thông báo xe cứu thương gần đó" },
    ],
  },
  {
    title: "Thông Báo",
    icon: Volume2,
    settings: [
      { name: "Cảnh Báo Âm Thanh", enabled: true, description: "Phát âm thanh cho cảnh báo tới hạn" },
      { name: "Rung Lắc", enabled: true, description: "Rung lắc trên cảnh báo" },
      { name: "Cảnh Báo Hình Ảnh", enabled: true, description: "Hiển thị cảnh báo trên màn hình" },
      { name: "Báo Cáo Email", enabled: false, description: "Gửi báo cáo an toàn hàng tuần qua email" },
    ],
  },
  {
    title: "Bảo Mật & Riêng Tư",
    icon: Lock,
    settings: [
      { name: "Theo Dõi Vị Trí", enabled: true, description: "Bật theo dõi GPS" },
      { name: "Chia Sẻ Dữ Liệu", enabled: false, description: "Cho phép chia sẻ dữ liệu ẩn danh" },
      { name: "Sao Lưu Đám Mây", enabled: true, description: "Sao lưu chuyến đi lên đám mây" },
      { name: "Xác Thực Hai Yếu Tố", enabled: false, description: "Bật 2FA cho tài khoản" },
    ],
  },
]

const preferences = [
  { label: "Đơn Vị Tốc Độ", value: "kmh", options: ["km/h", "mph", "m/s"] },
  { label: "Đơn Vị Nhiệt Độ", value: "celsius", options: ["Celsius", "Fahrenheit"] },
  { label: "Đơn Vị Khoảng Cách", value: "km", options: ["Kilômét", "Dặm"] },
  { label: "Độ Nhạy Cảnh Báo", value: "high", options: ["Thấp", "Trung Bình", "Cao", "Tối Đa"] },
]

export default function Settings() {
  const [settings, setSettings] = useState(
    settingSections.map((section) => ({
      title: section.title,
      settings: section.settings.map((s) => ({ ...s, id: s.name })),
    })),
  )

  const toggleSetting = (sectionIdx, settingIdx) => {
    const newSettings = [...settings]
    newSettings[sectionIdx].settings[settingIdx].enabled = !newSettings[sectionIdx].settings[settingIdx].enabled
    setSettings(newSettings)
  }

  return (
    <div className="space-y-4 sm:space-y-6 max-w-4xl">
      <div className="safety-card rounded-xl border border-border p-4 sm:p-6">
        <h2 className="text-base sm:text-xl font-semibold text-foreground mb-4 sm:mb-6 flex items-center gap-2">
          <Gauge className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0" />
          Sở Thích
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {preferences.map((pref, idx) => (
            <div key={idx}>
              <Label className="text-xs sm:text-sm font-medium text-foreground mb-2 block">{pref.label}</Label>
              <Select defaultValue={pref.value}>
                <SelectTrigger className="h-9 sm:h-10 rounded-lg border border-primary/30 bg-primary/5 text-xs sm:text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {pref.options.map((opt) => (
                    <SelectItem key={opt} value={opt.toLowerCase()} className="text-xs sm:text-sm">
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>
      </div>

      {/* Settings Sections */}
      {settings.map((section, sectionIdx) => {
        const SectionIcon = settingSections[sectionIdx].icon
        return (
          <div key={sectionIdx} className="safety-card rounded-xl border border-border p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <SectionIcon className="w-5 sm:w-6 h-5 sm:h-6 text-primary flex-shrink-0" />
              <h2 className="text-base sm:text-xl font-semibold text-foreground">{section.title}</h2>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {section.settings.map((setting, settingIdx) => (
                <div
                  key={settingIdx}
                  className="flex items-center justify-between p-3 sm:p-4 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors gap-2"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground text-sm sm:text-base">{setting.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{setting.description}</p>
                  </div>
                  <button
                    onClick={() => toggleSetting(sectionIdx, settingIdx)}
                    className={`relative inline-flex h-7 sm:h-8 w-12 sm:w-14 items-center rounded-full transition-colors flex-shrink-0 ${
                      setting.enabled ? "bg-primary" : "bg-muted"
                    }`}
                  >
                    <span
                      className={`inline-block h-5 sm:h-6 w-5 sm:w-6 transform rounded-full bg-white transition-transform ${
                        setting.enabled ? "translate-x-6 sm:translate-x-7" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )
      })}

      {/* Device Info */}
      <div className="safety-card rounded-xl border border-border p-4 sm:p-6">
        <h2 className="text-base sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">Thông Tin Thiết Bị</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label className="text-xs sm:text-sm font-medium text-muted-foreground">Tên Thiết Bị</Label>
              <Input
                value="Thiết Bị SafeVision Của Tôi"
                className="mt-2 h-9 sm:h-10 rounded-lg border border-primary/30 bg-primary/5 text-xs sm:text-sm"
                readOnly
              />
            </div>
            <div>
              <Label className="text-xs sm:text-sm font-medium text-muted-foreground">ID Thiết Bị</Label>
              <Input
                value="SV-2025-001847"
                className="mt-2 h-9 sm:h-10 rounded-lg border border-primary/30 bg-primary/5 text-xs sm:text-sm"
                readOnly
              />
            </div>
            <div>
              <Label className="text-xs sm:text-sm font-medium text-muted-foreground">Phiên Bản Phần Mềm</Label>
              <Input
                value="1.0.0"
                className="mt-2 h-9 sm:h-10 rounded-lg border border-primary/30 bg-primary/5 text-xs sm:text-sm"
                readOnly
              />
            </div>
            <div>
              <Label className="text-xs sm:text-sm font-medium text-muted-foreground">Cập Nhật Lần Cuối</Label>
              <Input
                value="10 Thg 11, 2025"
                className="mt-2 h-9 sm:h-10 rounded-lg border border-primary/30 bg-primary/5 text-xs sm:text-sm"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
