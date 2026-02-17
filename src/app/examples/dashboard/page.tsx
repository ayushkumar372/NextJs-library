export default function DashboardExample() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-foreground">Dashboard Example</h1>
      <p className="mt-3 text-muted">
        A complete admin dashboard layout using ReactUI components.
      </p>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Revenue", value: "$45,231", change: "+20.1%", up: true },
          { label: "Subscriptions", value: "2,350", change: "+12.5%", up: true },
          { label: "Active Users", value: "18,204", change: "+7.2%", up: true },
          { label: "Churn Rate", value: "2.4%", change: "-0.8%", up: false },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-card p-5">
            <p className="text-sm text-muted">{stat.label}</p>
            <p className="mt-1 text-2xl font-bold text-foreground">{stat.value}</p>
            <p className={`mt-1 text-sm font-medium ${stat.up ? "text-green-500" : "text-red-500"}`}>
              {stat.change} from last month
            </p>
          </div>
        ))}
      </div>

      {/* Chart placeholder + Recent activity */}
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_380px]">
        {/* Chart */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground">Revenue Overview</h2>
          <p className="text-sm text-muted">Monthly revenue for the current year</p>
          <div className="mt-6 flex items-end gap-2">
            {[40, 65, 45, 80, 55, 70, 90, 75, 85, 95, 60, 88].map((h, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1">
                <div
                  className="w-full rounded-t bg-primary/80 transition-all hover:bg-primary"
                  style={{ height: `${h * 2}px` }}
                />
                <span className="text-[10px] text-muted">
                  {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground">Recent Activity</h2>
          <div className="mt-4 space-y-4">
            {[
              { user: "Alice", action: "purchased Pro plan", time: "2 min ago" },
              { user: "Bob", action: "created a new project", time: "15 min ago" },
              { user: "Carol", action: "updated billing info", time: "1 hour ago" },
              { user: "David", action: "invited 3 team members", time: "2 hours ago" },
              { user: "Eva", action: "exported dashboard data", time: "4 hours ago" },
            ].map((item) => (
              <div key={item.user} className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {item.user[0]}
                </div>
                <div>
                  <p className="text-sm text-foreground">
                    <strong>{item.user}</strong> {item.action}
                  </p>
                  <p className="text-xs text-muted">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="mt-6 rounded-xl border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border p-4">
          <h2 className="text-lg font-semibold text-foreground">Recent Orders</h2>
          <button className="rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-white hover:bg-primary-dark">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-secondary/50">
              <tr>
                <th className="px-4 py-3 font-medium text-foreground">Order</th>
                <th className="px-4 py-3 font-medium text-foreground">Customer</th>
                <th className="px-4 py-3 font-medium text-foreground">Amount</th>
                <th className="px-4 py-3 font-medium text-foreground">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { id: "#3210", customer: "Alice Johnson", amount: "$250.00", status: "Completed" },
                { id: "#3209", customer: "Bob Smith", amount: "$150.00", status: "Processing" },
                { id: "#3208", customer: "Carol White", amount: "$350.00", status: "Completed" },
                { id: "#3207", customer: "David Lee", amount: "$450.00", status: "Pending" },
                { id: "#3206", customer: "Eva Chen", amount: "$550.00", status: "Completed" },
              ].map((order) => (
                <tr key={order.id} className="hover:bg-card-hover">
                  <td className="px-4 py-3 font-medium text-foreground">{order.id}</td>
                  <td className="px-4 py-3 text-muted">{order.customer}</td>
                  <td className="px-4 py-3 text-foreground">{order.amount}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                      order.status === "Completed" ? "bg-green-100 text-green-700" :
                      order.status === "Processing" ? "bg-blue-100 text-blue-700" :
                      "bg-yellow-100 text-yellow-700"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
