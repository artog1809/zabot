import { ReactNode, useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SidebarItemProps {
  title: string;
  icon: ReactNode;
  href?: string;
  children?: ReactNode;
  collapsed: boolean;
}

export default function SidebarItem({
  title,
  icon,
  href,
  children,
  collapsed,
}: SidebarItemProps) {
  const [open, setOpen] = useState(false);

  if (href) {
    return (
      <Link
        href={href}
        className={`flex items-center p-4 rounded hover:bg-violet-50 transition text-sm text-gray-700 ${
          collapsed ? "justify-center" : "space-x-2"
        }`}
      >
        {icon}
        {!collapsed && <span>{title}</span>}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center p-4 rounded hover:bg-violet-50 transition text-sm text-gray-700 ${
          collapsed ? "justify-center" : "justify-between"
        }`}
      >
        <span className={`flex items-center ${collapsed ? "" : "space-x-2"}`}>
          {icon}
          {!collapsed && <span>{title}</span>}
        </span>

        {!collapsed &&
          (open ? (
            <ChevronUp className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          ))}
      </button>

      {!collapsed && open && (
        <div className="ml-8 mt-1 space-y-1 text-gray-500">{children}</div>
      )}
    </div>
  );
}
