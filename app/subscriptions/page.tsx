"use client";

import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import { useState } from "react";
import Tabs from "@/components/Tabs/Tabs";
import Requisites from "@/components/Requisites/Requisites";

type Tab = "payment" | "requisites" | "history";

export default function SubscriptionsPage() {
  const [activeTab, setActivetab] = useState<Tab>("requisites");

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header title="Подписки" />

        <div className="flex-1 m-6 flex flex-col">
          <Tabs activeTab={activeTab} setActiveTab={setActivetab} />
          <div className="flex-1 p-8 bg-white rounded-md shadow-md">
            {activeTab === "requisites" && <Requisites />}
            {activeTab === "history" && (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <p>История пуста</p>
              </div>
            )}
            {activeTab === "payment" && (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <p>Платежи отсутствуют</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
