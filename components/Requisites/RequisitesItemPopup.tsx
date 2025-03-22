import { Pencil, Trash } from "lucide-react";

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
  return (
    <div className="absolute top-[100%] right-0 bg-white flex flex-col shadow-lg rounded-xl">
      <button
        onClick={() => onDelete()}
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
    </div>
  );
};

export default RequisitesItemPopup;
