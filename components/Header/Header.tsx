import { Bell, LogOut } from "lucide-react";

export default function Header({ title }: { title: string }) {
  return (
    <header
      className="flex justify-between items-center p-6 bg-white"
      style={{
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
      }}
    >
      <h1 className="text-[20px] text-gray-500  font-semibold">{title}</h1>
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-3">
          <div className="flex flex-col space-y-0.5">
            <span className="text-gray-700 text-[16px]">Дмитрий</span>
            <span className="text-gray-500 text-[12px]">Собственник</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center text-white">
            Д
          </div>
        </div>
        <Bell size={20} color="#8097B1" />
        <LogOut size={20} color="#8097B1" />
      </div>
    </header>
  );
}
