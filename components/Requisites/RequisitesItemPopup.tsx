import { Pencil, Trash } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ConfirmModal from "../Utils/Modal/ConfirmModal";

interface Props {
  onDelete: () => void;
  onClose: () => void;
  onEdit: () => void;
}

const RequisitesItemPopup: React.FC<Props> = ({
  onDelete,
  onClose,
  onEdit,
}) => {
  const [modal, setModal] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", clickOutside);

    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={popupRef}
      className="absolute top-[100%] right-0 bg-white flex flex-col shadow-lg rounded-xl"
    >
      <button
        onClick={() => setModal(true)}
        className="w-full text-red-500 py-3 px-4 flex gap-1 items-center hover:bg-gray-100"
      >
        <Trash size={20} />
        Удалить
      </button>
      <button
        onClick={() => {
          onEdit();
          onClose();
        }}
        className="w-full text-black py-3 px-4 flex gap-1 items-center hover:bg-gray-100"
      >
        <Pencil size={20} />
        Редактировать
      </button>
      <ConfirmModal
        isOpen={modal}
        onConfirm={onDelete}
        onCancel={() => setModal(false)}
        title="Вы уверены, что хотите удалить реквизиты?"
        description="Вы действительно уверены, что хотите удалить реквизиты без возможности восстановить? "
        confirmText="Да, удалить"
        cancelText="Отменить"
      />
    </div>
  );
};

export default RequisitesItemPopup;
