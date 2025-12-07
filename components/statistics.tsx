"use client"

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Activity, TrendingUp } from "lucide-react"

const weeklyData = [
  { day: "T2", alerts: 2 },
  { day: "T3", alerts: 5 },
  { day: "T4", alerts: 3 },
  { day: "T5", alerts: 8 },
  { day: "T6", alerts: 6 },
  { day: "T7", alerts: 4 },
  { day: "CN", alerts: 2 },
]

const speedData = [
  { time: "6am", speed: 45 },
  { time: "9am", speed: 65 },
  { time: "12pm", speed: 72 },
  { time: "3pm", speed: 58 },
  { time: "6pm", speed: 68 },
  { time: "9pm", speed: 50 },
]

const riskMetrics = [
  { label: "Sự Kiện Rủi Ro Cao", value: 8, color: "text-destructive" },
  { label: "Sự Kiện Rủi Ro Trung Bình", value: 15, color: "text-warning" },
  { label: "Sự Kiện Rủi Ro Thấp", value: 22, color: "text-info" },
  { label: "Giờ Lái Xe An Toàn", value: "45.2 hrs", color: "text-primary" },
]

export default function Statistics() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="safety-card rounded-xl border border-border overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-border bg-primary/5 flex items-center gap-2">
          <Activity className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0" />
          <h3 className="font-semibold text-foreground text-sm sm:text-base">Cảnh Báo Hàng Tuần</h3>
        </div>
        <div className="p-4 sm:p-6">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="day" stroke="var(--color-muted-foreground)" style={{ fontSize: "11px" }} />
              <YAxis stroke="var(--color-muted-foreground)" style={{ fontSize: "11px" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: `2px solid var(--color-primary)`,
                  borderRadius: "8px",
                  color: "var(--color-foreground)",
                  fontSize: "12px",
                }}
              />
              <Bar dataKey="alerts" fill="var(--color-primary)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="safety-card rounded-xl border border-border overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-border bg-accent/5 flex items-center gap-2">
          <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0" />
          <h3 className="font-semibold text-foreground text-sm sm:text-base">Vận Tốc Trung Bình Theo Giờ</h3>
        </div>
        <div className="p-4 sm:p-6">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={speedData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="time" stroke="var(--color-muted-foreground)" style={{ fontSize: "11px" }} />
              <YAxis stroke="var(--color-muted-foreground)" style={{ fontSize: "11px" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: `2px solid var(--color-accent)`,
                  borderRadius: "8px",
                  color: "var(--color-foreground)",
                  fontSize: "12px",
                }}
              />
              <Line
                type="monotone"
                dataKey="speed"
                stroke="var(--color-accent)"
                strokeWidth={3}
                dot={{ fill: "var(--color-accent)", r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="safety-card rounded-xl border border-border overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-border bg-primary/5">
          <h3 className="font-semibold text-foreground text-sm sm:text-base">Số Liệu Rủi Ro</h3>
        </div>
        <div className="p-4 sm:p-6 grid grid-cols-2 gap-3 sm:gap-4">
          {riskMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-4 bg-gradient-to-br from-card to-secondary rounded-lg border border-border/50"
            >
              <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
              <p className={`text-xl sm:text-2xl font-bold ${metric.color}`}>{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
