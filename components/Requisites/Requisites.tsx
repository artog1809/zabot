"use client";

import { useSubscriptionStore } from "@/store/subscriptionStore/store";
import { SquarePlus } from "lucide-react";
import { useState } from "react";
import Modal from "../Utils/Modal/Modal";
import RequisiteForm from "./RequisitesForm";

const Requisites = () => {
  const requisites = useSubscriptionStore((state) => state.requisites);
  const [modal, setModal] = useState<boolean>(false);

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
          <button
            onClick={() => setModal(true)}
            className=" flex gap-2 items-center mt-4 py-[12px] px-[16px] bg-violet-600 text-white rounded-xl hover:bg-violet-700"
          >
            <SquarePlus size={20} color="white" />
            Добавить реквизиты
          </button>
          <Modal
            title="Добавление реквизитов"
            isOpen={modal}
            onClose={() => setModal(false)}
          >
            <RequisiteForm onClose={() => setModal(false)} />
          </Modal>
        </div>
      ) : (
        <div>Твои реквизиты тут</div>
      )}
    </>
  );
};

export default Requisites;
