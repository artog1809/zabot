import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<Props> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      <div className="relative ml-auto w-1/2 h-full bg-gray-100 shadow-xl p-8 overflow-y-auto">
        <div className="flex justify-between items-center">
          <span className="text-[24px] text-black text-500 font-medium">
            {title}
          </span>
          <button
            onClick={onClose}
            className=" w-[48px] h-[48px] bg-gray-200 flex items-center justify-center rounded-lg text-gray-500"
          >
            <X />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
