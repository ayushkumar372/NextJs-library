export default function DataDisplayPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-foreground">Data Display</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Components for displaying data: tables, badges, avatars, lists, and
        tooltips.
      </p>

      {/* Table */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Table</h2>
        <div className="mt-4 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-secondary">
              <tr>
                <th className="px-4 py-3 font-medium text-foreground">Name</th>
                <th className="px-4 py-3 font-medium text-foreground">Email</th>
                <th className="px-4 py-3 font-medium text-foreground">Role</th>
                <th className="px-4 py-3 font-medium text-foreground">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
                { name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "Active" },
                { name: "Carol White", email: "carol@example.com", role: "Viewer", status: "Inactive" },
                { name: "David Lee", email: "david@example.com", role: "Editor", status: "Active" },
              ].map((row) => (
                <tr key={row.name} className="bg-card hover:bg-card-hover">
                  <td className="px-4 py-3 font-medium text-foreground">{row.name}</td>
                  <td className="px-4 py-3 text-muted">{row.email}</td>
                  <td className="px-4 py-3 text-muted">{row.role}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                        row.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Badges */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Badges</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Primary
          </span>
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            Success
          </span>
          <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
            Warning
          </span>
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
            Error
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
            Default
          </span>
          <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground">
            Outline
          </span>
        </div>
      </section>

      {/* Avatars */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Avatars</h2>
        <div className="mt-4 space-y-4">
          <div className="flex items-center gap-3">
            {["SM", "MD", "LG", "XL"].map((size, i) => {
              const sizes = ["h-8 w-8 text-xs", "h-10 w-10 text-sm", "h-12 w-12 text-base", "h-16 w-16 text-lg"];
              return (
                <div
                  key={size}
                  className={`flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent font-bold text-white ${sizes[i]}`}
                >
                  {size}
                </div>
              );
            })}
          </div>

          <p className="text-sm font-medium text-foreground">Avatar Group</p>
          <div className="flex -space-x-2">
            {["AC", "BK", "CW", "DL", "+3"].map((initials) => (
              <div
                key={initials}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-primary to-accent text-xs font-bold text-white"
              >
                {initials}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* List */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">List</h2>
        <div className="mt-4 max-w-md divide-y divide-border rounded-xl border border-border bg-card">
          {[
            { title: "Push Notifications", desc: "Receive push notifications for new messages" },
            { title: "Email Digest", desc: "Get a weekly email summary of activity" },
            { title: "SMS Alerts", desc: "Receive SMS for critical updates" },
          ].map((item) => (
            <div key={item.title} className="flex items-center justify-between p-4">
              <div>
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                <p className="text-xs text-muted">{item.desc}</p>
              </div>
              <div className="h-5 w-9 rounded-full bg-primary p-0.5">
                <div className="h-4 w-4 translate-x-4 rounded-full bg-white transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
