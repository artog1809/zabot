interface Props {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
}

const ConfirmModal: React.FC<Props> = ({
  isOpen,
  onConfirm,
  onCancel,
  title = "Вы уверены?",
  description = "Все несохранённые данные будут потеряны.",
  confirmText = "Да, закрыть",
  cancelText = "Отмена",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white relative items-center rounded-2xl p-6 w-[400px] flex flex-col gap-4 shadow-xl">
        <div className="text-lg font-medium text-black">{title}</div>
        <p className="text-gray-500 text-sm">{description}</p>
        <div className="flex w-[100%] gap-3 ">
          <button
            onClick={onCancel}
            className="px-6 w-full py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className="px-6 w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
