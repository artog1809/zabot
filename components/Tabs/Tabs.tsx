type Tab = "payment" | "requisites" | "history";

interface Props {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const Tabs: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  const tabs: { id: Tab; label: string }[] = [
    { id: "payment", label: "Оплата" },
    { id: "requisites", label: "Реквизиты" },
    { id: "history", label: "История платежей" },
  ];

  return (
    <div className="flex">
      {tabs.map((tab) => (
        <span
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`p-2 cursor-pointer transition-colors duration-200 ${
            activeTab === tab.id ? "bg-white rounded-t-xl" : ""
          }`}
        >
          {tab.label}
        </span>
      ))}
    </div>
  );
};

export default Tabs;
