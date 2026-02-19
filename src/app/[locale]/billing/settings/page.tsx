import { T, Var } from "gt-next";

export default function BillingSettingsPage() {
  return (
    <div>
      <T>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-100 mb-2">
            Billing Settings
          </h2>
          <p className="text-neutral-400">
            Manage your payment methods and billing preferences.
          </p>
        </div>
      </T>

      {/* Payment Method */}
      <div className="rounded-lg border border-neutral-800 bg-neutral-900 mb-6">
        <T>
          <div className="px-5 py-4 border-b border-neutral-800">
            <h3 className="text-sm font-semibold text-neutral-100">
              Payment Method
            </h3>
          </div>
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-7 rounded bg-neutral-800 flex items-center justify-center text-xs font-bold text-neutral-400">
                  VISA
                </div>
                <div>
                  <p className="text-sm text-neutral-200">
                    Visa ending in <Var>4242</Var>
                  </p>
                  <p className="text-xs text-neutral-500">
                    Expires <Var>12/2027</Var>
                  </p>
                </div>
              </div>
              <button className="px-3 py-1.5 text-xs font-medium rounded-md border border-neutral-700 text-neutral-300 hover:bg-neutral-800 transition-colors">
                Update
              </button>
            </div>
          </div>
        </T>
      </div>

      {/* Billing Address */}
      <div className="rounded-lg border border-neutral-800 bg-neutral-900 mb-6">
        <T>
          <div className="px-5 py-4 border-b border-neutral-800">
            <h3 className="text-sm font-semibold text-neutral-100">
              Billing Address
            </h3>
          </div>
          <div className="p-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-1">
                  Street Address
                </label>
                <div className="px-3 py-2 rounded-md bg-neutral-800 text-sm text-neutral-200">
                  <Var>123 Main Street</Var>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-1">
                  City
                </label>
                <div className="px-3 py-2 rounded-md bg-neutral-800 text-sm text-neutral-200">
                  <Var>San Francisco</Var>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-1">
                  State
                </label>
                <div className="px-3 py-2 rounded-md bg-neutral-800 text-sm text-neutral-200">
                  <Var>CA</Var>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-1">
                  ZIP Code
                </label>
                <div className="px-3 py-2 rounded-md bg-neutral-800 text-sm text-neutral-200">
                  <Var>94102</Var>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="px-3 py-1.5 text-xs font-medium rounded-md border border-neutral-700 text-neutral-300 hover:bg-neutral-800 transition-colors">
                Edit Address
              </button>
            </div>
          </div>
        </T>
      </div>

      {/* Billing Preferences */}
      <div className="rounded-lg border border-neutral-800 bg-neutral-900">
        <T>
          <div className="px-5 py-4 border-b border-neutral-800">
            <h3 className="text-sm font-semibold text-neutral-100">
              Billing Preferences
            </h3>
          </div>
        </T>
        <div className="divide-y divide-neutral-800">
          <div className="px-5 py-3.5 flex items-center justify-between">
            <T>
              <div>
                <p className="text-sm text-neutral-200">Email Invoices</p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Receive invoices via email after each payment
                </p>
              </div>
            </T>
            <ToggleOn />
          </div>
          <div className="px-5 py-3.5 flex items-center justify-between">
            <T>
              <div>
                <p className="text-sm text-neutral-200">Auto-Renewal</p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Automatically renew your subscription each billing cycle
                </p>
              </div>
            </T>
            <ToggleOn />
          </div>
          <div className="px-5 py-3.5 flex items-center justify-between">
            <T>
              <div>
                <p className="text-sm text-neutral-200">Payment Reminders</p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Get notified 3 days before your next payment
                </p>
              </div>
            </T>
            <ToggleOff />
          </div>
        </div>
      </div>
    </div>
  );
}

function ToggleOn() {
  return (
    <div className="w-9 h-5 rounded-full relative bg-emerald-500 shrink-0">
      <div className="absolute top-0.5 w-4 h-4 rounded-full bg-white start-[calc(100%-1.125rem)]" />
    </div>
  );
}

function ToggleOff() {
  return (
    <div className="w-9 h-5 rounded-full relative bg-neutral-700 shrink-0">
      <div className="absolute top-0.5 w-4 h-4 rounded-full bg-white start-0.5" />
    </div>
  );
}
