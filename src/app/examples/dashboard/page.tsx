import Link from "next/link";

const sidebarNav = [
  { label: "Dashboard", icon: "grid", active: true },
  { label: "Analytics", icon: "chart" },
  { label: "Customers", icon: "users" },
  { label: "Products", icon: "box" },
  { label: "Orders", icon: "cart" },
  { label: "Messages", icon: "mail", badge: 3 },
  { label: "Settings", icon: "gear" },
];

const stats = [
  {
    label: "Total Revenue",
    value: "$48,352",
    change: "+22.4%",
    up: true,
    iconBg: "bg-violet-500/20",
    iconColor: "text-violet-400",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Active Users",
    value: "18,942",
    change: "+12.8%",
    up: true,
    iconBg: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    label: "Total Orders",
    value: "3,287",
    change: "+8.1%",
    up: true,
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    label: "Growth Rate",
    value: "24.5%",
    change: "-2.3%",
    up: false,
    iconBg: "bg-amber-500/20",
    iconColor: "text-amber-400",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

const orders = [
  { id: "#ORD-7291", customer: "Priya Sharma", email: "priya@mail.com", amount: "$1,250.00", status: "Completed", date: "Feb 15, 2026" },
  { id: "#ORD-7290", customer: "Rahul Mehta", email: "rahul@mail.com", amount: "$840.00", status: "Processing", date: "Feb 14, 2026" },
  { id: "#ORD-7289", customer: "Anita Desai", email: "anita@mail.com", amount: "$2,100.00", status: "Completed", date: "Feb 14, 2026" },
  { id: "#ORD-7288", customer: "Vikram Singh", email: "vikram@mail.com", amount: "$390.00", status: "Pending", date: "Feb 13, 2026" },
  { id: "#ORD-7287", customer: "Meera Patel", email: "meera@mail.com", amount: "$1,780.00", status: "Completed", date: "Feb 13, 2026" },
  { id: "#ORD-7286", customer: "Arjun Nair", email: "arjun@mail.com", amount: "$620.00", status: "Cancelled", date: "Feb 12, 2026" },
];

const activities = [
  { user: "Priya S.", action: "completed purchase of Pro Plan", time: "2 min ago", color: "bg-emerald-500" },
  { user: "Rahul M.", action: "submitted a support ticket", time: "18 min ago", color: "bg-amber-500" },
  { user: "Anita D.", action: "upgraded to Enterprise tier", time: "1 hour ago", color: "bg-violet-500" },
  { user: "Vikram S.", action: "added 5 new team members", time: "3 hours ago", color: "bg-cyan-500" },
  { user: "Meera P.", action: "exported monthly analytics report", time: "5 hours ago", color: "bg-pink-500" },
];

const chartData = [
  { month: "Jan", value: 42 },
  { month: "Feb", value: 68 },
  { month: "Mar", value: 51 },
  { month: "Apr", value: 85 },
  { month: "May", value: 59 },
  { month: "Jun", value: 74 },
  { month: "Jul", value: 92 },
  { month: "Aug", value: 78 },
  { month: "Sep", value: 88 },
  { month: "Oct", value: 96 },
  { month: "Nov", value: 65 },
  { month: "Dec", value: 90 },
];

export default function DashboardExample() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Breadcrumb */}
      <div className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-[1600px] items-center gap-2 px-4 py-3 text-sm">
          <Link href="/examples" className="text-slate-400 hover:text-white transition-colors">
            Examples
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-white font-medium">Dashboard</span>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 border-r border-slate-800 bg-slate-950 lg:block">
          <div className="sticky top-0 flex h-screen flex-col">
            {/* Logo area */}
            <div className="flex items-center gap-3 border-b border-slate-800 px-5 py-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 text-sm font-bold text-white shadow-lg shadow-violet-500/25">
                R
              </div>
              <div>
                <p className="text-sm font-semibold text-white">ReactUI</p>
                <p className="text-[11px] text-slate-500">Admin Dashboard</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-1 px-3 py-4">
              {sidebarNav.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    item.active
                      ? "bg-violet-500/10 font-medium text-violet-400"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full ${item.active ? "bg-violet-400" : "bg-slate-600"}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-500 text-[10px] font-bold text-white">
                      {item.badge}
                    </span>
                  )}
                </div>
              ))}
            </nav>

            {/* User section */}
            <div className="border-t border-slate-800 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 text-sm font-bold text-white">
                  AS
                </div>
                <div className="flex-1 truncate">
                  <p className="text-sm font-medium text-white">Admin User</p>
                  <p className="truncate text-xs text-slate-500">admin@reactui.dev</p>
                </div>
                <svg className="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-6 py-4 backdrop-blur-sm">
            <div>
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              <p className="mt-0.5 text-sm text-slate-400">Welcome back, here is your overview</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-56 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 pl-9 text-sm text-white placeholder-slate-500 outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/50"
                />
                <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <button className="relative rounded-lg border border-slate-700 bg-slate-900 p-2 text-slate-400 hover:bg-slate-800 hover:text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-violet-500 text-[9px] font-bold text-white">
                  4
                </span>
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* Stats Row */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition-colors hover:border-slate-700"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-400">{stat.label}</p>
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.iconBg} ${stat.iconColor}`}>
                      {stat.icon}
                    </div>
                  </div>
                  <p className="mt-3 text-3xl font-bold text-white">{stat.value}</p>
                  <div className="mt-2 flex items-center gap-1.5">
                    <span
                      className={`inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-semibold ${
                        stat.up
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {stat.up ? (
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      ) : (
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
                        </svg>
                      )}
                      {stat.change}
                    </span>
                    <span className="text-xs text-slate-500">from last month</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart + Activity Feed */}
            <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_380px]">
              {/* Chart Area */}
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-white">Revenue Overview</h2>
                    <p className="mt-0.5 text-sm text-slate-400">Monthly revenue for the current year</p>
                  </div>
                  <div className="flex gap-1 rounded-lg border border-slate-700 bg-slate-800 p-1">
                    <button className="rounded-md bg-violet-500 px-3 py-1 text-xs font-medium text-white">
                      Monthly
                    </button>
                    <button className="rounded-md px-3 py-1 text-xs font-medium text-slate-400 hover:text-white">
                      Weekly
                    </button>
                    <button className="rounded-md px-3 py-1 text-xs font-medium text-slate-400 hover:text-white">
                      Daily
                    </button>
                  </div>
                </div>

                {/* Y-axis labels + bars */}
                <div className="mt-8 flex items-end gap-1">
                  {/* Y-axis */}
                  <div className="flex h-[220px] flex-col justify-between pr-3 text-right">
                    <span className="text-[10px] text-slate-500">$50k</span>
                    <span className="text-[10px] text-slate-500">$40k</span>
                    <span className="text-[10px] text-slate-500">$30k</span>
                    <span className="text-[10px] text-slate-500">$20k</span>
                    <span className="text-[10px] text-slate-500">$10k</span>
                    <span className="text-[10px] text-slate-500">$0</span>
                  </div>

                  {/* Bars */}
                  <div className="flex flex-1 items-end gap-2">
                    {chartData.map((d, i) => (
                      <div key={d.month} className="flex flex-1 flex-col items-center gap-2">
                        <div className="relative w-full">
                          <div
                            className={`w-full rounded-t-md transition-all hover:opacity-80 ${
                              i === 9
                                ? "bg-gradient-to-t from-violet-600 to-violet-400 shadow-lg shadow-violet-500/20"
                                : "bg-gradient-to-t from-violet-600/60 to-violet-400/40"
                            }`}
                            style={{ height: `${d.value * 2.2}px` }}
                          />
                        </div>
                        <span className="text-[10px] font-medium text-slate-500">{d.month}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chart summary */}
                <div className="mt-6 flex items-center gap-6 border-t border-slate-800 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-sm bg-gradient-to-t from-violet-600 to-violet-400" />
                    <span className="text-xs text-slate-400">Revenue</span>
                  </div>
                  <div className="text-xs text-slate-500">
                    Total: <strong className="text-white">$48,352</strong>
                  </div>
                  <div className="text-xs text-slate-500">
                    Average: <strong className="text-white">$4,029</strong>
                  </div>
                </div>
              </div>

              {/* Activity Feed */}
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
                  <span className="rounded-full bg-violet-500/10 px-2.5 py-0.5 text-xs font-medium text-violet-400">
                    Live
                  </span>
                </div>

                <div className="mt-5 space-y-5">
                  {activities.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="relative flex flex-col items-center">
                        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${item.color} text-xs font-bold text-white`}>
                          {item.user.split(" ").map((n) => n[0]).join("")}
                        </div>
                        {i < activities.length - 1 && (
                          <div className="mt-1 h-full w-px bg-slate-800" />
                        )}
                      </div>
                      <div className="pb-5">
                        <p className="text-sm text-slate-300">
                          <strong className="text-white">{item.user}</strong>{" "}
                          {item.action}
                        </p>
                        <p className="mt-0.5 text-xs text-slate-500">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-800 py-2 text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white">
                  View All Activity
                </button>
              </div>
            </div>

            {/* Recent Orders Table */}
            <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900">
              <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
                <div>
                  <h2 className="text-lg font-semibold text-white">Recent Orders</h2>
                  <p className="mt-0.5 text-sm text-slate-400">Latest transactions from your store</p>
                </div>
                <button className="rounded-lg bg-violet-500 px-4 py-2 text-xs font-medium text-white shadow-lg shadow-violet-500/25 hover:bg-violet-600">
                  View All Orders
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900/50">
                      <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-400">Order ID</th>
                      <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-400">Customer</th>
                      <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-400">Amount</th>
                      <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-400">Status</th>
                      <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-400">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {orders.map((order) => (
                      <tr key={order.id} className="transition-colors hover:bg-slate-800/50">
                        <td className="px-6 py-4 font-mono text-sm font-medium text-violet-400">{order.id}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-slate-300">
                              {order.customer.split(" ").map((n) => n[0]).join("")}
                            </div>
                            <div>
                              <p className="font-medium text-white">{order.customer}</p>
                              <p className="text-xs text-slate-500">{order.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-semibold text-white">{order.amount}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
                              order.status === "Completed"
                                ? "bg-emerald-500/10 text-emerald-400"
                                : order.status === "Processing"
                                ? "bg-blue-500/10 text-blue-400"
                                : order.status === "Pending"
                                ? "bg-amber-500/10 text-amber-400"
                                : "bg-red-500/10 text-red-400"
                            }`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                order.status === "Completed"
                                  ? "bg-emerald-400"
                                  : order.status === "Processing"
                                  ? "bg-blue-400"
                                  : order.status === "Pending"
                                  ? "bg-amber-400"
                                  : "bg-red-400"
                              }`}
                            />
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-400">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table footer */}
              <div className="flex items-center justify-between border-t border-slate-800 px-6 py-3">
                <p className="text-xs text-slate-500">Showing 6 of 287 orders</p>
                <div className="flex gap-1">
                  <button className="rounded-md border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs text-slate-400 hover:text-white">
                    Previous
                  </button>
                  <button className="rounded-md bg-violet-500 px-3 py-1.5 text-xs font-medium text-white">
                    1
                  </button>
                  <button className="rounded-md border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs text-slate-400 hover:text-white">
                    2
                  </button>
                  <button className="rounded-md border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs text-slate-400 hover:text-white">
                    3
                  </button>
                  <button className="rounded-md border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs text-slate-400 hover:text-white">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
