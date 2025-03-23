import SidebarTop from "./SidebarTop";
import SidebarItem from "./SidebarItem";
import Link from "next/link";
import {
  BarChart2,
  ListTodo,
  Users,
  ShoppingBag,
  MessageSquare,
  FileText,
  Settings,
  SquareArrowLeft,
  Wallet,
  SquareArrowRight,
} from "lucide-react";
import { useState } from "react";

const sidebarItems = [
  {
    title: "Аналитика",
    icon: <BarChart2 className="w-5 h-5" />,
    children: [
      { href: "/analytics/reports", label: "Отчёты" },
      { href: "/analytics/stats", label: "Статистика" },
    ],
  },
  {
    title: "Задачи",
    icon: <ListTodo className="w-5 h-5" />,
    children: [
      { href: "/tasks/current", label: "Текущие" },
      { href: "/tasks/completed", label: "Завершённые" },
    ],
  },
  {
    title: "Сотрудники",
    icon: <Users className="w-5 h-5" />,
    href: "/employees",
  },
  {
    title: "Услуги",
    icon: <ShoppingBag className="w-5 h-5" />,
    children: [
      { href: "/services/haircuts", label: "Стрижки" },
      { href: "/services/shaves", label: "Бритьё" },
    ],
  },
  {
    title: "Бот",
    icon: <MessageSquare className="w-5 h-5" />,
    children: [{ href: "/bot/settings", label: "Настройки бота" }],
  },
  {
    title: "Подписки",
    icon: <Wallet className="w-5 h-5" />,
    href: "/subscriptions",
  },
  {
    title: "Настройки",
    icon: <Settings className="w-5 h-5" />,
    href: "/settings",
  },
  {
    title: "Руководство",
    icon: <FileText className="w-5 h-5" />,
    children: [
      { href: "/manual/guide", label: "Гайд" },
      { href: "/manual/faq", label: "FAQ" },
    ],
  },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <aside
      className={`flex flex-col justify-between h-screen bg-white transition-all duration-300 ${
        collapsed ? "w-[60px]" : "w-[280px]"
      }`}
      style={{
        boxShadow: "4px 0 10px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div>
        <SidebarTop collapsed={collapsed} />
        <nav>
          {sidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              collapsed={collapsed}
              title={item.title}
              icon={item.icon}
              href={item.href}
            >
              {item.children &&
                item.children.map((child, childIndex) => (
                  <Link
                    key={childIndex}
                    href={child.href}
                    className="block hover:text-violet-600"
                  >
                    {child.label}
                  </Link>
                ))}
            </SidebarItem>
          ))}
        </nav>
      </div>
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex p-4 items-center justify-center text-sm text-gray-500 hover:text-gray-700 transition-all"
      >
        {collapsed ? (
          <SquareArrowRight className="w-5 h-5" />
        ) : (
          <>
            <SquareArrowLeft className="w-5 h-5" />
            <span className="ml-2">Свернуть меню</span>
          </>
        )}
      </button>
    </aside>
  );
}
