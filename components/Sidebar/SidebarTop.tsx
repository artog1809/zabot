import { ChevronDown } from "lucide-react";

export default function SidebarTop() {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center space-x-2">
            <div className="bg-violet-100 w-[40px] h-[40px] flex items-center justify-center rounded-lg">
              <span className="text-violet-600 text-lg">✋</span>
            </div>
            <div>
              <p className="font-medium text-sm">Барбершоп</p>
              <p className="font-semibold text-sm">Петроградская</p>
              <p className="text-xs text-gray-500 mt-1">Подписка активна</p>
            </div>
          </div>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>
    </div>
  );
}
