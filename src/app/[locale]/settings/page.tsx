import { T, Var } from "gt-next";

export default function SettingsPage() {
  return (
    <div>
      <T>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-100 mb-2">
            Settings
          </h2>
          <p className="text-neutral-400">
            Manage your account preferences and notification settings.
          </p>
        </div>
      </T>

      {/* Profile Section */}
      <div className="rounded-lg border border-neutral-800 bg-neutral-900 mb-6">
        <T>
          <div className="px-5 py-4 border-b border-neutral-800">
            <h3 className="text-sm font-semibold text-neutral-100">
              Profile Information
            </h3>
          </div>
          <div className="p-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-1">
                  Full Name
                </label>
                <div className="px-3 py-2 rounded-md bg-neutral-800 text-sm text-neutral-200">
                  <Var>Olivia Martinez</Var>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-1">
                  Email Address
                </label>
                <div className="px-3 py-2 rounded-md bg-neutral-800 text-sm text-neutral-200">
                  <Var>olivia@example.com</Var>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-1">
                  Role
                </label>
                <div className="px-3 py-2 rounded-md bg-neutral-800 text-sm text-neutral-200">
                  Administrator
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-1">
                  Timezone
                </label>
                <div className="px-3 py-2 rounded-md bg-neutral-800 text-sm text-neutral-200">
                  <Var>America/Los_Angeles</Var>
                </div>
              </div>
            </div>
          </div>
        </T>
      </div>

      {/* Notification Preferences */}
      <div className="rounded-lg border border-neutral-800 bg-neutral-900 mb-6">
        <T>
          <div className="px-5 py-4 border-b border-neutral-800">
            <h3 className="text-sm font-semibold text-neutral-100">
              Notification Preferences
            </h3>
          </div>
        </T>
        <div className="divide-y divide-neutral-800">
          <div className="px-5 py-3.5 flex items-center justify-between">
            <T>
              <div>
                <p className="text-sm text-neutral-200">Email Updates</p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Receive updates about your account activity
                </p>
              </div>
            </T>
            <ToggleOn />
          </div>
          <div className="px-5 py-3.5 flex items-center justify-between">
            <T>
              <div>
                <p className="text-sm text-neutral-200">Security Alerts</p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Get notified about security events
                </p>
              </div>
            </T>
            <ToggleOn />
          </div>
          <div className="px-5 py-3.5 flex items-center justify-between">
            <T>
              <div>
                <p className="text-sm text-neutral-200">
                  Billing Notifications
                </p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Receive invoices and payment reminders
                </p>
              </div>
            </T>
            <ToggleOn />
          </div>
          <div className="px-5 py-3.5 flex items-center justify-between">
            <T>
              <div>
                <p className="text-sm text-neutral-200">Product News</p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Learn about new features and improvements
                </p>
              </div>
            </T>
            <ToggleOff />
          </div>
          <div className="px-5 py-3.5 flex items-center justify-between">
            <T>
              <div>
                <p className="text-sm text-neutral-200">Weekly Digest</p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Weekly summary of your account metrics
                </p>
              </div>
            </T>
            <ToggleOff />
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="rounded-lg border border-red-900/50 bg-neutral-900">
        <T>
          <div className="px-5 py-4 border-b border-red-900/50">
            <h3 className="text-sm font-semibold text-red-400">Danger Zone</h3>
          </div>
          <div className="p-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-200">Delete Account</p>
              <p className="text-xs text-neutral-500 mt-0.5">
                Permanently delete your account and all associated data. This
                action cannot be undone.
              </p>
            </div>
            <button className="px-3 py-1.5 text-xs font-medium rounded-md border border-red-800 text-red-400 hover:bg-red-900/30 transition-colors shrink-0">
              Delete Account
            </button>
          </div>
        </T>
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
