import { Requisite } from "@/store/subscriptionStore/store";
import { EllipsisVertical } from "lucide-react";
import { useState } from "react";
import RequisitesItemPopup from "./RequisitesItemPopup";

interface Props {
  requisite: Requisite;
  onDelete: (id: string) => void;
  onEdit: (requisite: Requisite) => void;
}

const RequisiteItem: React.FC<Props> = ({ requisite, onDelete, onEdit }) => {
  const [popup, setPopup] = useState<boolean>(false);
  const requisitesFields = [
    { label: "Юридический адрес организациии", value: requisite.legalAddress },
    { label: "ИНН", value: requisite.inn },
    { label: "ОГРН:", value: requisite.ogrn },
    { label: "Расчетный счет:", value: requisite.ogrnip },
    { label: "Банк:", value: requisite.bankName },
    { label: "Корреспондентский счет", value: requisite.correspondentAccount },
    { label: "БИК", value: requisite.bik },
    { label: "КПП", value: requisite.kpp },
    { label: "ОГРНИП", value: requisite.ogrnip },
  ];

  return (
    <div className="border w-1/4 py-3 px-4 rounded-xl border-gray-200">
      <div className="flex justify-between items-center relative">
        <span className="text-[20px] text-black">
          {requisite.organizationName}
        </span>
        <button className=" w-[36px] h-[36px] bg-gray-200 flex items-center justify-center rounded-lg text-gray-500">
          <EllipsisVertical onClick={() => setPopup(!popup)} size={20} />
        </button>
        {popup && (
          <RequisitesItemPopup
            onEdit={() => onEdit(requisite)}
            onClose={() => setPopup(false)}
            onDelete={() => onDelete(requisite.id)}
          />
        )}
      </div>
      <div className="pt-1 flex flex-col gap-3">
        {requisitesFields.map(
          (el) =>
            el.value && (
              <div className="flex flex-col gap-0.5" key={el.label}>
                <span className="text-gray-500 text-[14px]">{el.label}</span>
                <span className="text-black text-[14px]">{el.value}</span>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default RequisiteItem;
