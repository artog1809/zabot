"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useSubscriptionStore } from "@/store/subscriptionStore/store";

export default function SubscriptionsPage() {
  const subscriptions = useSubscriptionStore((state) => state.subscriptions);

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header title="Подписки" />

        <div className="flex-1 p-8 bg-white rounded-md shadow-md m-6">
          {subscriptions.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <img
                src="/empty-state.svg"
                alt="Пусто"
                className="w-40 h-40 mb-4"
              />
              <p>У вас пока нет ни одного реквизита для оплаты</p>
              <button className="mt-4 px-4 py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600">
                Добавить реквизиты
              </button>
            </div>
          ) : (
            <div>Твои реквизиты тут</div>
          )}
        </div>
      </div>
    </div>
  );
}
