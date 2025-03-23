"use client";

import {
  Requisite,
  useSubscriptionStore,
} from "@/store/subscriptionStore/store";
import { SquarePlus } from "lucide-react";
import { useState } from "react";
import Modal from "../Utils/Modal/Modal";
import RequisiteForm from "./RequisitesForm";
import RequisiteItem from "./RequisitesItem";
import { useShallow } from "zustand/shallow";

const Requisites = () => {
  const { requisites, removeRequisite } = useSubscriptionStore(
    useShallow((state) => ({
      requisites: state.requisites,
      removeRequisite: state.removeRequisite,
    }))
  );
  const [modal, setModal] = useState<boolean>(false);
  const [editingRequisite, setEditingRequisite] = useState<Requisite | null>(
    null
  );

  const edit = (requisite: Requisite) => {
    setEditingRequisite(requisite);
    setModal(true);
  };

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
        </div>
      ) : (
        <div className="flex flex-col gap-[20px]">
          <div className="flex justify-between items-center ">
            <span className="text-[20px] text-black font-medium">
              Реквизиты
            </span>
            <button
              onClick={() => setModal(true)}
              className=" flex gap-2 items-center mt-4 py-[12px] px-[16px] bg-violet-600 text-white rounded-xl hover:bg-violet-700"
            >
              <SquarePlus size={20} color="white" />
              Добавить реквизиты
            </button>
          </div>
          <div className="flex gap-[20px]">
            {requisites.map((el) => (
              <RequisiteItem
                onEdit={edit}
                onDelete={removeRequisite}
                key={el.id}
                requisite={el}
              />
            ))}
          </div>
        </div>
      )}
      <Modal
        title="Добавление реквизитов"
        isOpen={modal}
        onClose={() => {
          setModal(false);
          setEditingRequisite(null);
        }}
      >
        <RequisiteForm
          initialData={editingRequisite}
          onClose={() => {
            setModal(false);
            setEditingRequisite(null);
          }}
        />
      </Modal>
    </>
  );
};

export default Requisites;
