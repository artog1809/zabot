import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-bold mb-6">Zabot</h2>
        <nav className="flex flex-col space-y-4">
          <Link href="/subscriptions" className="hover:text-violet-600">
            Подписки
          </Link>
          <Link href="#" className="hover:text-violet-600">
            Аналитика
          </Link>
          <Link href="#" className="hover:text-violet-600">
            Настройки
          </Link>
        </nav>
      </div>
      <button className="text-sm text-gray-500 hover:text-gray-700">
        Свернуть меню
      </button>
    </aside>
  );
}
