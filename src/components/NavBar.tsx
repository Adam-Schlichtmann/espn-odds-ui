"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const links = [
    { href: "/athletes", label: "Athletes" },
    { href: "/events", label: "Events" },
    { href: "/teams", label: "Teams" },
  ];

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex gap-6">
      {links.map(({ href, label }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            className={`hover:text-yellow-400 ${
              isActive ? "text-yellow-400 font-bold" : ""
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
