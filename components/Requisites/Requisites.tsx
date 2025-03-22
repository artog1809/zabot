import { useSubscriptionStore } from "@/store/subscriptionStore/store";
import { SquarePlus } from "lucide-react";

const Requisites = () => {
  const requisites = useSubscriptionStore((state) => state.requisites);

  return (
    <>
      {requisites.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-gray-500">
          <img
            src="/imgs/emptylist.png"
            alt="Пусто"
            className="w-40 h-40 mb-4"
          />
          <p>У вас пока нет ни одного реквизита для оплаты</p>
          <button className=" flex gap-2 items-center mt-4 py-[12px] px-[16px] bg-violet-600 text-white rounded-xl hover:bg-violet-700">
            <SquarePlus size={20} color="white" />
            Добавить реквизиты
          </button>
        </div>
      ) : (
        <div>Твои реквизиты тут</div>
      )}
    </>
  );
};

export default Requisites;
