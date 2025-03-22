import { useForm } from "react-hook-form";
import {
  Requisite,
  useSubscriptionStore,
} from "@/store/subscriptionStore/store";
import { v4 as uuidv4 } from "uuid";
import InputField from "../Utils/Input/Input";
import { FileText } from "lucide-react";
import { useShallow } from "zustand/shallow";

const RequisiteForm = ({
  onClose,
  initialData,
}: {
  onClose: () => void;
  initialData: Requisite | null;
}) => {
  const { addRequisite, updateRequisite } = useSubscriptionStore(
    useShallow((state) => ({
      addRequisite: state.addRequisite,
      updateRequisite: state.updateRequisite,
    }))
  );

  const { register, handleSubmit, watch } = useForm<Requisite>({
    defaultValues: initialData || {
      orgType: "ООО",
    },
  });

  const orgType = watch("orgType");

  const onSubmit = (data: Requisite) => {
    if (initialData) {
      updateRequisite({ ...data, id: initialData.id });
    } else {
      const newRequisite = { ...data, id: uuidv4() };
      addRequisite(newRequisite);
    }
    onClose();
  };

  return (
    <div className="flex gap-[16px] flex-col">
      <div className="text-gray-500 text-[14px] pt-1">
        <p>Добавьте реквизиты для успешной оплаты подписок.</p>
        <p>Проверяйте всю информацию на верность и соответствие.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="p-5 bg-white rounded-2xl flex flex-col gap-[16px]">
          <div className="pb-3 text-[16px] text-black font-medium border-gray-300 border-b">
            Организация
          </div>
          <div>
            <label className="block mb-1 text-[14px]">
              Организационно-правовая форма*
            </label>
            <select
              {...register("orgType", { required: "Обязательное поле" })}
              className="w-full border-gray-200 border rounded-2xl px-5 py-3"
            >
              <option value="ООО">ООО</option>
              <option value="ИП">ИП</option>
            </select>
          </div>
          <InputField
            label="Наименование"
            register={register("organizationName", {
              required: "Обязательное поле",
            })}
            placeholder="Введите наименование"
            required
          />

          <InputField
            label="Юридический адрес"
            register={register("legalAddress", {
              required: "Обязательное поле",
            })}
            placeholder="Введите юридический адрес"
            required
          />

          <InputField
            label="ИНН"
            register={register("inn", { required: "Обязательное поле" })}
            placeholder="Введите ИНН вашей организации"
            required
          />

          {orgType === "ООО" && (
            <>
              <InputField
                label="КПП"
                register={register("kpp", { required: "Обязательное поле" })}
                placeholder="Введите КПП вашей организации"
                required
              />

              <InputField
                label="ОГРН"
                register={register("ogrn", { required: "Обязательное поле" })}
                placeholder="Введите ОГРН вашей организации"
                required
              />
            </>
          )}

          {orgType === "ИП" && (
            <InputField
              label="ОГРНИП"
              register={register("ogrnip", { required: "Обязательное поле" })}
              placeholder="Введите ОГРНИП вашей организации"
              required
            />
          )}
        </div>

        <div className="p-5 bg-white rounded-2xl flex flex-col gap-[16px]">
          <div className="pb-3 text-[16px] text-black font-medium border-gray-300 border-b">
            Банк
          </div>
          <InputField
            label="Расчетный счет"
            register={register("settlementAccount", {
              required: "Обязательное поле",
            })}
            placeholder="Введите расчетный счет"
            required
          />

          <InputField
            label="Наименование банка"
            register={register("bankName", { required: "Обязательное поле" })}
            placeholder="Введите наименование банка"
            required
          />

          <InputField
            label="Корреспондентский счет"
            register={register("correspondentAccount", {
              required: "Обязательное поле",
            })}
            placeholder="Введите корреспондентский счет"
            required
          />

          <InputField
            label="БИК банка"
            register={register("bik", { required: "Обязательное поле" })}
            placeholder="Введите БИК банка"
            required
          />
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="flex justify-center items-center gap-2 bg-violet-600 text-white w-[100%] px-6 py-3 rounded-xl hover:bg-violet-700"
          >
            <FileText size={20} />
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequisiteForm;
