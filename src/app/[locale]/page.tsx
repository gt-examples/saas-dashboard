import { T, Var, Currency, DateTime, Num } from "gt-next";
import { getGT } from "gt-next/server";

export default async function OverviewPage() {
  const gt = await getGT();

  const recentActivity = [
    {
      id: 1,
      user: "Alice Chen",
      plan: "Enterprise",
      date: new Date("2026-02-18T14:30:00"),
      actionText: gt("upgraded to"),
    },
    {
      id: 2,
      user: "Marcus Rivera",
      plan: "Pro",
      date: new Date("2026-02-18T12:15:00"),
      actionText: gt("subscribed to"),
    },
    {
      id: 3,
      user: "Yuki Tanaka",
      plan: "Team",
      date: new Date("2026-02-17T09:45:00"),
      actionText: gt("renewed"),
    },
    {
      id: 4,
      user: "Fatima Al-Hassan",
      plan: "Pro",
      date: new Date("2026-02-16T16:20:00"),
      actionText: gt("subscribed to"),
    },
    {
      id: 5,
      user: "Liam O'Brien",
      plan: "Starter",
      date: new Date("2026-02-15T11:00:00"),
      actionText: gt("downgraded to"),
    },
  ];

  return (
    <div>
      <T>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-100 mb-2">
            Dashboard Overview
          </h2>
          <p className="text-neutral-400">
            A summary of your business metrics and recent activity.
          </p>
        </div>
      </T>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-5">
          <T>
            <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1">
              Monthly Revenue
            </p>
          </T>
          <p className="text-2xl font-semibold text-neutral-100 mb-1">
            <Currency currency="USD">{48250.75}</Currency>
          </p>
          <T>
            <p className="text-xs text-emerald-400">+12.5% from last month</p>
          </T>
        </div>

        <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-5">
          <T>
            <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1">
              Active Users
            </p>
          </T>
          <p className="text-2xl font-semibold text-neutral-100 mb-1">
            <Num>{3842}</Num>
          </p>
          <T>
            <p className="text-xs text-emerald-400">+8.1% from last month</p>
          </T>
        </div>

        <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-5">
          <T>
            <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1">
              Total Orders
            </p>
          </T>
          <p className="text-2xl font-semibold text-neutral-100 mb-1">
            <Num>{1259}</Num>
          </p>
          <T>
            <p className="text-xs text-red-400">-2.3% from last month</p>
          </T>
        </div>

        <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-5">
          <T>
            <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1">
              Conversion Rate
            </p>
          </T>
          <p className="text-2xl font-semibold text-neutral-100 mb-1">3.24%</p>
          <T>
            <p className="text-xs text-emerald-400">+0.8% from last month</p>
          </T>
        </div>
      </div>

      <div className="rounded-lg border border-neutral-800 bg-neutral-900">
        <T>
          <div className="px-5 py-4 border-b border-neutral-800">
            <h3 className="text-sm font-semibold text-neutral-100">
              Recent Activity
            </h3>
          </div>
        </T>
        <div className="divide-y divide-neutral-800">
          {recentActivity.map((item) => (
            <div
              key={item.id}
              className="px-5 py-3.5 flex items-center justify-between"
            >
              <T>
                <p className="text-sm text-neutral-200">
                  <Var>{item.user}</Var> <Var>{item.actionText}</Var>{" "}
                  <Var>
                    <span className="font-medium text-neutral-100">
                      {item.plan}
                    </span>
                  </Var>
                </p>
              </T>
              <span className="text-xs text-neutral-500 shrink-0 ms-4">
                <DateTime>{item.date}</DateTime>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
