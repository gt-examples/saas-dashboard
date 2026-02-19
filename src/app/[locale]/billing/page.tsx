import { T, Var, Currency, DateTime } from "gt-next";
import { getGT } from "gt-next/server";

export default async function BillingPage() {
  const gt = await getGT();

  const invoices = [
    {
      id: "INV-2026-002",
      date: new Date("2026-02-01"),
      amount: 49,
      statusText: gt("Paid"),
      statusClass: "bg-emerald-900/40 text-emerald-400",
    },
    {
      id: "INV-2026-001",
      date: new Date("2026-01-01"),
      amount: 49,
      statusText: gt("Paid"),
      statusClass: "bg-emerald-900/40 text-emerald-400",
    },
    {
      id: "INV-2025-012",
      date: new Date("2025-12-01"),
      amount: 29,
      statusText: gt("Paid"),
      statusClass: "bg-emerald-900/40 text-emerald-400",
    },
    {
      id: "INV-2025-011",
      date: new Date("2025-11-01"),
      amount: 29,
      statusText: gt("Paid"),
      statusClass: "bg-emerald-900/40 text-emerald-400",
    },
    {
      id: "INV-2025-010",
      date: new Date("2025-10-01"),
      amount: 29,
      statusText: gt("Refunded"),
      statusClass: "bg-amber-900/40 text-amber-400",
    },
  ];

  return (
    <div>
      <T>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-100 mb-2">
            Billing
          </h2>
          <p className="text-neutral-400">
            Manage your subscription plan and view invoice history.
          </p>
        </div>
      </T>

      {/* Current Plan */}
      <div className="rounded-lg border border-neutral-800 bg-neutral-900 mb-6">
        <T>
          <div className="px-5 py-4 border-b border-neutral-800">
            <h3 className="text-sm font-semibold text-neutral-100">
              Current Plan
            </h3>
          </div>
          <div className="p-5">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-xl font-semibold text-neutral-100">
                Pro
              </span>
              <span className="text-sm text-neutral-500">
                <Currency currency="USD">{49}</Currency> per month
              </span>
            </div>
            <p className="text-xs text-neutral-500">
              Next billing date:{" "}
              <Var>
                <DateTime options={{ dateStyle: "long" }}>
                  {new Date("2026-03-18")}
                </DateTime>
              </Var>
            </p>
          </div>
        </T>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-5">
          <T>
            <p className="text-sm font-semibold text-neutral-100 mb-1">
              Starter
            </p>
            <p className="text-2xl font-bold text-neutral-100 mb-3">Free</p>
            <p className="text-xs text-neutral-400 mb-4">
              For individuals getting started with basic features.
            </p>
            <button className="w-full py-2 text-xs font-medium rounded-md bg-neutral-100 text-neutral-900 hover:bg-white transition-colors">
              Switch to This Plan
            </button>
          </T>
        </div>

        <div className="rounded-lg border border-emerald-700 bg-emerald-950/20 p-5">
          <T>
            <p className="text-sm font-semibold text-neutral-100 mb-1">Pro</p>
            <p className="text-2xl font-bold text-neutral-100 mb-3">
              <Currency currency="USD">{49}</Currency>
              <span className="text-sm font-normal text-neutral-500">
                {" "}
                / month
              </span>
            </p>
            <p className="text-xs text-neutral-400 mb-4">
              For growing teams that need advanced tools and integrations.
            </p>
            <button className="w-full py-2 text-xs font-medium rounded-md bg-neutral-700 text-neutral-400 cursor-default">
              Current Plan
            </button>
          </T>
        </div>

        <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-5">
          <T>
            <p className="text-sm font-semibold text-neutral-100 mb-1">
              Enterprise
            </p>
            <p className="text-2xl font-bold text-neutral-100 mb-3">
              <Currency currency="USD">{199}</Currency>
              <span className="text-sm font-normal text-neutral-500">
                {" "}
                / month
              </span>
            </p>
            <p className="text-xs text-neutral-400 mb-4">
              For large organizations with custom requirements and dedicated
              support.
            </p>
            <button className="w-full py-2 text-xs font-medium rounded-md bg-neutral-100 text-neutral-900 hover:bg-white transition-colors">
              Switch to This Plan
            </button>
          </T>
        </div>
      </div>

      {/* Invoice History */}
      <div className="rounded-lg border border-neutral-800 bg-neutral-900">
        <T>
          <div className="px-5 py-4 border-b border-neutral-800">
            <h3 className="text-sm font-semibold text-neutral-100">
              Invoice History
            </h3>
          </div>
        </T>
        <div className="divide-y divide-neutral-800">
          {invoices.map((inv) => (
            <div
              key={inv.id}
              className="px-5 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div className="flex items-center gap-4 min-w-0">
                <span className="text-sm font-mono text-neutral-300 truncate">
                  {inv.id}
                </span>
                <span className="text-xs text-neutral-500 shrink-0">
                  <DateTime options={{ dateStyle: "medium" }}>
                    {inv.date}
                  </DateTime>
                </span>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-sm text-neutral-200">
                  <Currency currency="USD">{inv.amount}</Currency>
                </span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${inv.statusClass}`}
                >
                  {inv.statusText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
