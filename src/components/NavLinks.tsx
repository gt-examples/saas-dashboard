"use client";

import { T } from "gt-next";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { href: "/", labelKey: "overview" },
  { href: "/settings", labelKey: "settings" },
  { href: "/billing", labelKey: "billing" },
];

export default function NavLinks({
  mobile,
  onNavigate,
}: {
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  // Strip locale prefix to determine active page
  const segments = pathname.split("/").filter(Boolean);
  const currentPath = "/" + segments.slice(1).join("/");

  return (
    <nav className={mobile ? "flex flex-col gap-1" : "flex items-center gap-1"}>
      {links.map((link) => {
        const isActive =
          link.href === "/"
            ? currentPath === "/" || currentPath === ""
            : currentPath.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
              isActive
                ? "bg-neutral-800 text-neutral-100"
                : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50"
            }`}
          >
            {link.labelKey === "overview" && <T>Overview</T>}
            {link.labelKey === "settings" && <T>Settings</T>}
            {link.labelKey === "billing" && <T>Billing</T>}
          </Link>
        );
      })}
    </nav>
  );
}
