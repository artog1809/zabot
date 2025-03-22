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
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside
      className="flex flex-col justify-between w-[280px] h-screen bg-white"
      style={{
        boxShadow: "4px 0 10px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div>
        <SidebarTop />

        <nav>
          <SidebarItem
            title="Аналитика"
            icon={<BarChart2 className="w-5 h-5" />}
          >
            <Link
              href="/analytics/reports"
              className="block hover:text-violet-600"
            >
              Отчёты
            </Link>
            <Link
              href="/analytics/stats"
              className="block hover:text-violet-600"
            >
              Статистика
            </Link>
          </SidebarItem>

          <SidebarItem title="Задачи" icon={<ListTodo className="w-5 h-5" />}>
            <Link href="/tasks/current" className="block hover:text-violet-600">
              Текущие
            </Link>
            <Link
              href="/tasks/completed"
              className="block hover:text-violet-600"
            >
              Завершённые
            </Link>
          </SidebarItem>

          <SidebarItem
            title="Сотрудники"
            icon={<Users className="w-5 h-5" />}
            href="/employees"
          />

          <SidebarItem
            title="Услуги"
            icon={<ShoppingBag className="w-5 h-5" />}
          >
            <Link
              href="/services/haircuts"
              className="block hover:text-violet-600"
            >
              Стрижки
            </Link>
            <Link
              href="/services/shaves"
              className="block hover:text-violet-600"
            >
              Бритьё
            </Link>
          </SidebarItem>

          <SidebarItem title="Бот" icon={<MessageSquare className="w-5 h-5" />}>
            <Link href="/bot/settings" className="block hover:text-violet-600">
              Настройки бота
            </Link>
          </SidebarItem>

          <SidebarItem
            title="Подписки"
            icon={<Wallet className="w-5 h-5" />}
            href="/subscriptions"
          />

          <SidebarItem
            title="Настройки"
            icon={<Settings className="w-5 h-5" />}
            href="/settings"
          />

          <SidebarItem
            title="Руководство"
            icon={<FileText className="w-5 h-5" />}
          >
            <Link href="/manual/guide" className="block hover:text-violet-600">
              Гайд
            </Link>
            <Link href="/manual/faq" className="block hover:text-violet-600">
              FAQ
            </Link>
          </SidebarItem>
        </nav>
      </div>

      <button className="flex p-4 items-center space-x-2 text-sm text-gray-500 hover:text-gray-700">
        <SquareArrowLeft className="w-5 h-5" />
        <span>Свернуть меню</span>
      </button>
    </aside>
  );
}
