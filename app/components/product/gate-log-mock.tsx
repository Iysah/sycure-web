import { Activity, Bell, Building2, LayoutDashboard, Users } from "lucide-react";
import { BrowserFrame } from "./device-frame";
import { StatusBadge } from "@/app/components/primitives/status-badge";
import { GATE_LOG_ROWS } from "@/app/lib/content";
import { cn } from "@/app/lib/cn";

/** Bare gate-log table — used inside the Security section. */
export function GateLog({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-card-lg border border-border bg-surface-elevated shadow-rest",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <p className="text-sm font-semibold text-ink">Gate log</p>
        <span className="text-xs text-ink-muted">Green Oaks · today</span>
      </div>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="text-xs uppercase tracking-[0.12em] text-ink-muted">
            <th scope="col" className="px-4 py-2 font-medium">Time</th>
            <th scope="col" className="px-4 py-2 font-medium">Estate</th>
            <th scope="col" className="hidden px-4 py-2 font-medium sm:table-cell">Method</th>
            <th scope="col" className="px-4 py-2 font-medium">Result</th>
          </tr>
        </thead>
        <tbody>
          {GATE_LOG_ROWS.map((row, i) => (
            <tr
              key={`${row.time}-${row.estate}`}
              className={cn(i !== GATE_LOG_ROWS.length - 1 && "border-b border-border-subtle")}
            >
              <td className="px-4 py-3 font-mono text-xs text-ink-secondary">{row.time}</td>
              <td className="px-4 py-3 text-ink-secondary">{row.estate}</td>
              <td className="hidden px-4 py-3 text-ink-muted sm:table-cell">{row.method}</td>
              <td className="px-4 py-3">
                <StatusBadge state={row.state} size="sm" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const NAV = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Residents", icon: Users, active: false },
  { label: "Guards", icon: Users, active: false },
  { label: "Estates", icon: Building2, active: false },
] as const;

/** Estate-manager view — dashboard with live activity and the gate log. */
export function GateLogMock({ className }: { className?: string }) {
  return (
    <BrowserFrame
      className={className}
      label="Sycure estate management dashboard showing three estates, a live activity feed, and the gate verification log"
    >
      <div className="grid grid-cols-[132px_1fr] text-sm">
        <nav className="border-r border-border bg-surface p-3">
          <ul className="space-y-1">
            {NAV.map(({ label, icon: Icon, active }) => (
              <li key={label}>
                <span
                  className={cn(
                    "flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs font-medium",
                    active ? "bg-ink text-white" : "text-ink-muted",
                  )}
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-4 p-4">
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Estates", value: "3" },
              { label: "Verified today", value: "42" },
              { label: "Rejected today", value: "5" },
            ].map((tile) => (
              <div key={tile.label} className="rounded-card border border-border bg-surface p-2.5">
                <p className="font-display text-lg text-ink">{tile.value}</p>
                <p className="text-[0.7rem] text-ink-muted">{tile.label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-card border border-border bg-surface-elevated">
            <div className="flex items-center gap-2 border-b border-border px-3 py-2 text-xs font-semibold text-ink">
              <Activity className="h-3.5 w-3.5 text-brand-strong" aria-hidden="true" />
              Live activity
            </div>
            <ul>
              {GATE_LOG_ROWS.slice(0, 3).map((row) => (
                <li
                  key={`${row.time}-${row.method}`}
                  className="flex items-center justify-between px-3 py-2 text-xs text-ink-secondary [&:not(:last-child)]:border-b [&:not(:last-child)]:border-border-subtle"
                >
                  <span>
                    <span className="font-mono text-ink-muted">{row.time}</span> · {row.estate}
                  </span>
                  <StatusBadge state={row.state} size="sm" withIcon={false} />
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2 rounded-card border border-dashed border-border px-3 py-2 text-xs text-ink-muted">
            <Bell className="h-3.5 w-3.5" aria-hidden="true" />
            Notification sent to Unit 14B — visitor checked in
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
